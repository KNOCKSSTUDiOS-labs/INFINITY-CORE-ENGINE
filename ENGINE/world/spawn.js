export const spawn = {
  list: [],

  add(factory) {
    if (typeof factory === "function") {
      this.list.push(factory);
    }
  },

  createAll() {
    return this.list.map(f => f());
  },

  update(delta) {
  }
};
