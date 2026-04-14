export const sprite = {
  create(img, x = 0, y = 0, w = null, h = null) {
    return { img, x, y, w, h };
  },

  draw(ctx, s) {
    if (!s || !s.img) return;
    const w = s.w || s.img.width;
    const h = s.h || s.img.height;
    ctx.drawImage(s.img, s.x, s.y, w, h);
  },

  update(delta) {
  }
};
