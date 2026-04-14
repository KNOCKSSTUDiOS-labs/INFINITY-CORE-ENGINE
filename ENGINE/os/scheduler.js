export const scheduler = {
  tasks: [],

  every(interval, fn) {
    this.tasks.push({
      interval,
      fn,
      elapsed: 0
    });
  },

  update(delta) {
    for (const t of this.tasks) {
      t.elapsed += delta;
      if (t.elapsed >= t.interval) {
        t.elapsed = 0;
        try {
          t.fn(delta);
        } catch (e) {
        }
      }
    }
  }
};
