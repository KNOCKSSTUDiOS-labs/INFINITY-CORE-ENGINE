import { origin } from "./origin.js";
import { selfcheck } from "./selfcheck.js";

export const recover = {
  attempts: 0,
  maxAttempts: 3,

  tryRecover() {
    if (selfcheck.run()) {
      this.attempts = 0;
      return true;
    }

    this.attempts++;
    if (this.attempts > this.maxAttempts) {
      return false;
    }

    const ctx = origin.createContext();
    const names = Object.keys(origin.state.subsystems);

    for (const name of names) {
      origin.regenerateSubsystem(name, ctx);
    }

    return selfcheck.run();
  }
};
