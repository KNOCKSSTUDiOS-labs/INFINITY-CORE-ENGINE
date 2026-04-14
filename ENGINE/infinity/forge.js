import { origin } from "./origin.js";

export const forge = {
  create(name, factory) {
    origin.registerSubsystem(name, factory);
  },

  build(name, context) {
    return origin.forgeSubsystem(name, context);
  },

  buildAll(map, context) {
    if (!map) return;
    for (const name in map) {
      if (typeof map[name] === "function") {
        origin.registerSubsystem(name, map[name]);
        origin.forgeSubsystem(name, context);
      }
    }
  },

  rebuild(name, context) {
    return origin.regenerateSubsystem(name, context);
  },

  rebuildAll(context) {
    origin.regenerateAll(context);
  }
};
