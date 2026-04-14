export const cursor = {
  x: 0,
  y: 0,
  visible: true,

  move(x, y) {
    this.x = x;
    this.y = y;
  },

  draw(ctx) {
    if (!this.visible) return;
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.x, this.y, 4, 4);
  },

  update(delta) {
  }
};
