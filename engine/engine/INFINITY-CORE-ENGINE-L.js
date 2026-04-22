import { EngineFullComplete } from "./ENGINE-FULL-COMPLETE-L.js";
import { EnginePackage } from "./ENGINE-PACKAGE-L.js";

export const InfinityCoreEngine = {
    id: "infinity-core-engine-1",
    name: "INFINITY-CORE-ENGINE-L",
    version: "1.0.0",

    boot(rawEngine = {}) {
        const completed = EngineFullComplete.complete(rawEngine);
        return EnginePackage.build(completed);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { InfinityCoreEngine };
}
