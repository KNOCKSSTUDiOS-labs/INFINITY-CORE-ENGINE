export const particles = {
  list: [],

  spawn(p) {
    this.list.push(p);
  },

  update(delta) {
    this.list = this.list.filter(p => {
      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.life -= delta;
      return p.life > 0;
    });
  },

  draw(ctx) {
    for (const p of this.list) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
  }
};
