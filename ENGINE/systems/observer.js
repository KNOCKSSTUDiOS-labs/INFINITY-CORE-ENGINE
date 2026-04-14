export const observer = {
  watchers: {},

  watch(key, fn) {
    if (!this.watchers[key]) {
      this.watchers[key] = [];
    }
    this.watchers[key].push(fn);
  },

  notify(key, value) {
    if (!this.watchers[key]) return;
    for (const fn of this.watchers[key]) {
      try {
        fn(value);
      } catch (e) {
      }
    }
  },

  update(delta) {
  }
};
