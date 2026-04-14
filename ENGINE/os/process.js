export const process = {
  list: [],
  nextId: 1,

  spawn(task) {
    const p = {
      id: this.nextId++,
      task,
      alive: true
    };
    this.list.push(p);
    return p.id;
  },

  kill(id) {
    this.list = this.list.filter(p => p.id !== id);
  },

  update(delta) {
    for (const p of this.list) {
      if (!p.alive) continue;
      try {
        p.task(delta);
      } catch (e) {
        p.alive = false;
      }
    }
  }
};
