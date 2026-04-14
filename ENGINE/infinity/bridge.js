import { origin } from "./origin.js";

export const bridge = {
  links: {},

  link(name, externalRef) {
    if (!name) return;
    this.links[name] = externalRef;
  },

  unlink(name) {
    delete this.links[name];
  },

  get(name) {
    return this.links[name] || null;
  },

  exposeToContext(ctx) {
    ctx.bridge = {
      get: this.get.bind(this),
      link: this.link.bind(this),
      unlink: this.unlink.bind(this)
    };
    return ctx;
  }
};
