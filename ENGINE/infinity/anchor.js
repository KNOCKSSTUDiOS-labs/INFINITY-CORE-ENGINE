import { origin } from "./origin.js";

export const anchor = {
  anchors: {},

  set(name, value) {
    if (!name) return;
    this.anchors[name] = value;
  },

  get(name) {
    return this.anchors[name];
  },

  remove(name) {
    delete this.anchors[name];
  },

  attachToContext(ctx) {
    ctx.anchor = {
      set: this.set.bind(this),
      get: this.get.bind(this),
      remove: this.remove.bind(this)
    };
    return ctx;
  }
};
