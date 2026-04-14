export const flow = {
  steps: [],

  add(step) {
    if (typeof step === "function") {
      this.steps.push(step);
    }
  },

  update(delta, ctx) {
    for (const step of this.steps) {
      try {
        step(delta, ctx);
      } catch (e) {
      }
    }
  }
};
