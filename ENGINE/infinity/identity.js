import { origin } from "./origin.js";

export const identity = {
  getId() {
    return origin.core.id;
  },

  getVersion() {
    return origin.core.version;
  },

  getLaws() {
    return origin.core.laws.slice();
  },

  describe() {
    return {
      id: origin.core.id,
      version: origin.core.version,
      laws: origin.core.laws.slice(),
      createdAt: origin.core.createdAt
    };
  }
};
