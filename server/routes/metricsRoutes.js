import express from "express";

export const metricsRouter = express.Router();

// basic runtime metrics
metricsRouter.get("/runtime", (req, res) => {
    return res.json({
        ok: true,
        metrics: {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            timestamp: Date.now()
        }
    });
});

// request count placeholder
metricsRouter.get("/requests", (req, res) => {
    return res.json({
        ok: true,
        requests: 0,
        note: "Real request counter not yet implemented"
    });
});

// performance heartbeat
metricsRouter.get("/heartbeat", (req, res) => {
    return res.json({
        ok: true,
        performance: "ONLINE",
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { metricsRouter };
}
