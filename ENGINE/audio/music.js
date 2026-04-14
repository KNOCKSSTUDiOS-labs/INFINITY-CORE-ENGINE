export const music = {
  track: null,
  gain: null,
  volume: 1,

  play(ctx, buffer, loop = true) {
    if (this.track) {
      this.track.stop();
    }
    this.track = ctx.createBufferSource();
    this.gain = ctx.createGain();
    this.gain.gain.value = this.volume;
    this.track.buffer = buffer;
    this.track.loop = loop;
    this.track.connect(this.gain);
    this.gain.connect(ctx.destination);
    this.track.start(0);
  },

  stop() {
    if (this.track) {
      this.track.stop();
      this.track = null;
    }
  },

  setVolume(v) {
    this.volume = v;
    if (this.gain) {
      this.gain.gain.value = v;
    }
  },

  update(delta) {
  }
};
