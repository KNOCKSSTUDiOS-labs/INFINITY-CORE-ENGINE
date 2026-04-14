export const text = {
  draw(ctx, str, x, y, size = 16, color = "#fff") {
    ctx.fillStyle = color;
    ctx.font = size + "px sans-serif";
    ctx.fillText(str, x, y);
  },

  update(delta) {
  }
};
