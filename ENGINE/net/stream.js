export const stream = {
  readers: [],
  writers: [],

  addReader(fn) {
    this.readers.push(fn);
  },

  addWriter(fn) {
    this.writers.push(fn);
  },

  read(data) {
    for (const r of this.readers) {
      r(data);
    }
  },

  write(data) {
    for (const w of this.writers) {
      w(data);
    }
  },

  update(delta) {
  }
};
