export const channel = {
  channels: {},

  create(name, ctx) {
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    this.channels[name] = gain;
    return gain;
  },

  get(name) {
    return this.channels[name] || null;
  },

  setVolume(name, v) {
    const ch = this.channels[name];
    if (ch) ch.gain.value = v;
  },

  update(delta) {
  }
};
