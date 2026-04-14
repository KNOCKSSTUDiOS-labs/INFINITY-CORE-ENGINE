export const world = {
  entities: [],

  add(e) {
    this.entities.push(e);
  },

  remove(e) {
    this.entities = this.entities.filter(x => x !== e);
  },

  update(delta) {
    for (const e of this.entities) {
      if (typeof e.update === "function") {
        e.update(delta);
      }
    }
  }
};
