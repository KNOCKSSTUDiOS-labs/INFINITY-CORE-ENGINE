export const post = {
  effects: [],

  add(effect) {
    if (typeof effect === "function") {
      this.effects.push(effect);
    }
  },

  apply(ctx) {
    for (const fx of this.effects) {
      try {
        fx(ctx);
      } catch (e) {
      }
    }
  },

  update(delta) {
  }
};
