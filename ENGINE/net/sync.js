export const sync = {
  state: {},
  dirty: false,

  set(key, value) {
    this.state[key] = value;
    this.dirty = true;
  },

  pull(remote) {
    Object.assign(this.state, remote);
  },

  push(sendFn) {
    if (this.dirty) {
      sendFn(this.state);
      this.dirty = false;
    }
  },

  update(delta) {
  }
};
