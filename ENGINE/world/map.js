export const map = {
  tiles: [],
  width: 0,
  height: 0,
  tileSize: 32,

  load(data) {
    this.tiles = data.tiles || [];
    this.width = data.width || 0;
    this.height = data.height || 0;
    this.tileSize = data.tileSize || 32;
  },

  get(x, y) {
    if (x < 0 || y < 0) return null;
    if (x >= this.width || y >= this.height) return null;
    return this.tiles[y * this.width + x];
  },

  update(delta) {
  }
};
