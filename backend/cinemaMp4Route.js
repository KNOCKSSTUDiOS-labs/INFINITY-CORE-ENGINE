import express from "express";
import { CinemaMp4Pipeline } from "../pipeline/cinema-mp4.js";

export const cinemaMp4Route = express.Router();

cinemaMp4Route.post("/mp4", async (req, res) => {
    try {
        const options = req.body || {};

        const executor = {
            async run(job) {
                return {
                    id: job.id,
                    status: "QUEUED",
                    received: Date.now()
                };
            }
        };

        const result = await CinemaMp4Pipeline.run(executor, options);

        res.json({
            ok: true,
            pipeline: "cinema-mp4",
            result
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            error: "cinema-mp4-failed"
        });
    }
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { cinemaMp4Route };
}
