export const menu = {
  items: [],
  x: 0,
  y: 0,

  add(item) {
    this.items.push(item);
  },

  draw(ctx) {
    let offset = 0;
    for (const item of this.items) {
      ctx.fillStyle = "#222";
      ctx.fillRect(this.x, this.y + offset, 200, 30);
      ctx.fillStyle = "#fff";
      ctx.fillText(item.label, this.x + 10, this.y + offset + 20);
      offset += 30;
    }
  },

  update(delta) {
  }
};
