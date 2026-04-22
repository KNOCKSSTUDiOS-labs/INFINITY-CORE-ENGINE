import { EngineDoneCinemaMp4 } from "./ENGINE-DONE-CINEMA-MP4-L.js";

export const EngineDone = {
    id: "engine-done-global-1",
    name: "ENGINE-DONE-L",
    version: "1.0.0",

    finalize(engine) {
        engine.status = engine.status || {};

        // finalize MP4 subsystem
        EngineDoneCinemaMp4.finalize(engine);

        // mark global engine as DONE
        engine.status["engine"] = "DONE";

        return engine;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { EngineDone };
}
