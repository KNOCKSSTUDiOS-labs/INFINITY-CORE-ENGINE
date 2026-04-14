export const effects = {
  applyReverb(ctx, buffer, impulse) {
    const src = ctx.createBufferSource();
    const convolver = ctx.createConvolver();
    convolver.buffer = impulse;
    src.buffer = buffer;
    src.connect(convolver);
    convolver.connect(ctx.destination);
    src.start(0);
  },

  update(delta) {
  }
};
