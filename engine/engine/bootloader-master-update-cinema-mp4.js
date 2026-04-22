import { EngineBootloaderMergeCinemaMp4 } from "./bootloader-merge-cinema-mp4.js";

export const EngineBootloaderMasterUpdateCinemaMp4 = {
    id: "engine-bootloader-master-update-cinema-mp4-1",
    name: "ENGINE-BOOTLOADER-MASTER-UPDATE-CINEMA-MP4",
    version: "1.0.0",

    apply(bootloader) {
        return EngineBootloaderMergeCinemaMp4.merge(bootloader);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { EngineBootloaderMasterUpdateCinemaMp4 };
}
