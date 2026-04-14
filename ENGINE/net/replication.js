export const replication = {
  replicas: {},

  register(id, data) {
    this.replicas[id] = data;
  },

  updateReplica(id, data) {
    if (this.replicas[id]) {
      Object.assign(this.replicas[id], data);
    }
  },

  remove(id) {
    delete this.replicas[id];
  },

  update(delta) {
  }
};
