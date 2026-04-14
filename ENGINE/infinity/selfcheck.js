import { origin } from "./origin.js";

export const selfcheck = {
  checks: [],

  register(checkFn) {
    if (typeof checkFn === "function") {
      this.checks.push(checkFn);
    }
  },

  run() {
    const ctx = origin.createContext();
    let healthy = true;

    for (const check of this.checks) {
      try {
        const result = check(ctx);
        if (result === false) {
          healthy = false;
        }
      } catch (e) {
        healthy = false;
      }
    }

    if (healthy) {
      origin.markHealthy();
    } else {
      origin.markUnhealthy();
    }

    return healthy;
  }
};
