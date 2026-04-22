import { EngineBootloaderMasterUpdateCinemaMp4 } from "./bootloader-master-update-cinema-mp4.js";

export const EngineDoneCinemaMp4 = {
    id: "engine-done-cinema-mp4-1",
    name: "ENGINE-DONE-CINEMA-MP4-L",
    version: "1.0.0",

    finalize(engine) {
        engine.bootloader = engine.bootloader || {};
        EngineBootloaderMasterUpdateCinemaMp4.apply(engine.bootloader);

        engine.status = engine.status || {};
        engine.status["cinema-mp4"] = "DONE";

        return engine;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { EngineDoneCinemaMp4 };
}
