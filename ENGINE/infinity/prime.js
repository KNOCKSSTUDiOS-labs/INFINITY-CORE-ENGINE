import { origin } from "./origin.js";
import { forge } from "./forge.js";
import { pulse } from "./pulse.js";
import { selfcheck } from "./selfcheck.js";
import { recover } from "./recover.js";
import { identity } from "./identity.js";
import { manifest } from "./manifest.js";
import { bridge } from "./bridge.js";
import { anchor } from "./anchor.js";

export const prime = {
  init(config = {}) {
    origin.defineConfig(config);
    selfcheck.register(() => origin.core.id === "INFINITY-CORE");
  },

  start() {
    const ok = selfcheck.run();
    if (!ok) {
      recover.tryRecover();
    }
    pulse.start();
  },

  stop() {
    pulse.stop();
  },

  forge,
  origin,
  pulse,
  selfcheck,
  recover,
  identity,
  manifest,
  bridge,
  anchor
};
