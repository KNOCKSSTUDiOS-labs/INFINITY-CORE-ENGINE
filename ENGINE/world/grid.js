export const grid = {
  create(w, h, fill = 0) {
    return {
      w,
      h,
      data: new Array(w * h).fill(fill)
    };
  },

  get(g, x, y) {
    if (x < 0 || y < 0) return null;
    if (x >= g.w || y >= g.h) return null;
    return g.data[y * g.w + x];
  },

  set(g, x, y, v) {
    if (x < 0 || y < 0) return;
    if (x >= g.w || y >= g.h) return;
    g.data[y * g.w + x] = v;
  },

  update(delta) {
  }
};
