import { CinemaMp4Pipeline } from "./cinema-mp4.js";

export const PipelineConfigCinemaMp4 = {
    id: "pipeline-config-cinema-mp4-1",
    name: "PIPELINE-CONFIG-CINEMA-MP4",
    version: "1.0.0",

    register(config) {
        config.pipelines = config.pipelines || {};

        config.pipelines["cinema-mp4"] = {
            id: CinemaMp4Pipeline.id,
            name: CinemaMp4Pipeline.name,
            handler: CinemaMp4Pipeline
        };

        return config;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { PipelineConfigCinemaMp4 };
}
