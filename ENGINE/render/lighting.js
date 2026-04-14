export const lighting = {
  lights: [],

  add(light) {
    this.lights.push(light);
  },

  draw(ctx) {
    for (const l of this.lights) {
      const g = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.radius);
      g.addColorStop(0, l.color);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(l.x, l.y, l.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  update(delta) {
  }
};
