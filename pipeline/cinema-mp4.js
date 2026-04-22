import { GICinemaMp4Pipeline } from "../cinema-engine/GI-CINEMA-MP4-PIPELINE-L.js";

export const CinemaMp4Pipeline = {
    id: "pipeline-cinema-mp4-1",
    name: "CINEMA-MP4-PIPELINE",
    version: "1.0.0",

    createJob(options = {}) {
        return GICinemaMp4Pipeline.buildJob(options);
    },

    async run(executor, options = {}) {
        const job = this.createJob(options);

        const result = await executor.run(job);

        return {
            job,
            result,
            status: "QUEUED"
        };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { CinemaMp4Pipeline };
}
