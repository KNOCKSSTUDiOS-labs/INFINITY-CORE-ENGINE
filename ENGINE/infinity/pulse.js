import { origin } from "./origin.js";

export const pulse = {
  running: false,
  time: {
    last: 0,
    delta: 0,
    elapsed: 0,
    fps: 0
  },

  start() {
    if (this.running) return;
    this.running = true;
    this.time.last = performance.now();
    requestAnimationFrame(this.tick.bind(this));
  },

  stop() {
    this.running = false;
  },

  tick(now) {
    if (!this.running) return;

    const dt = (now - this.time.last) / 1000;
    this.time.last = now;
    this.time.delta = dt;
    this.time.elapsed += dt;
    this.time.fps = 1 / (dt || 1e-6);

    const ctx = origin.createContext();
    ctx.time = this.time;

    const flow = origin.ensureSubsystem("flow", ctx);
    if (flow && typeof flow.update === "function") {
      flow.update(dt, ctx);
    }

    requestAnimationFrame(this.tick.bind(this));
  }
};
