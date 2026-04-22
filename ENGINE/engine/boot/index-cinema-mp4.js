import { cinemaMp4Boot } from "./cinemaMp4Boot.js";

export const EngineBootCinemaMp4 = {
    id: "engine-boot-index-cinema-mp4-1",
    name: "ENGINE-BOOT-INDEX-CINEMA-MP4",
    version: "1.0.0",

    load(app) {
        cinemaMp4Boot.init(app);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { EngineBootCinemaMp4 };
}
