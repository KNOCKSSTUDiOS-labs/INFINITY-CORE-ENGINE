export const ui = {
  elements: [],

  add(el) {
    this.elements.push(el);
  },

  remove(el) {
    this.elements = this.elements.filter(x => x !== el);
  },

  update(delta) {
    for (const el of this.elements) {
      if (typeof el.update === "function") {
        el.update(delta);
      }
    }
  },

  draw(ctx) {
    for (const el of this.elements) {
      if (typeof el.draw === "function") {
        el.draw(ctx);
      }
    }
  }
};
