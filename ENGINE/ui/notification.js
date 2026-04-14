export const notification = {
  list: [],

  push(msg, time = 2) {
    this.list.push({ msg, time });
  },

  update(delta) {
    this.list = this.list.filter(n => {
      n.time -= delta;
      return n.time > 0;
    });
  },

  draw(ctx) {
    let y = 20;
    for (const n of this.list) {
      ctx.fillStyle = "#000";
      ctx.fillRect(20, y - 15, 300, 25);
      ctx.fillStyle = "#fff";
      ctx.fillText(n.msg, 30, y);
      y += 30;
    }
  }
};
