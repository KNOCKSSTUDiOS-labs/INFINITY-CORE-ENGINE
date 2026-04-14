export const loader = {
  loadFile(url) {
    return fetch(url).then(r => r.arrayBuffer());
  },

  update(delta) {
  }
};
