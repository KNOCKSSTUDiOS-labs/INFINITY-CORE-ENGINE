export const memory = {
  store: {},

  save(key, value) {
    this.store[key] = value;
  },

  load(key) {
    return this.store[key];
  },

  remove(key) {
    delete this.store[key];
  },

  clear() {
    this.store = {};
  },

  update(delta) {
  }
};
