export const entity = {
  create(props = {}) {
    return {
      id: crypto.randomUUID(),
      x: props.x || 0,
      y: props.y || 0,
      vx: props.vx || 0,
      vy: props.vy || 0,
      data: props.data || {}
    };
  },

  update(e, delta) {
    e.x += e.vx * delta;
    e.y += e.vy * delta;
  }
};
