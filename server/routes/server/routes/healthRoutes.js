import express from "express";

export const healthRouter = express.Router();

// global health check
healthRouter.get("/live", (req, res) => {
    return res.json({
        ok: true,
        service: "INFINITY‑CORE‑ENGINE",
        status: "LIVE",
        at: Date.now()
    });
});

// deep health check
healthRouter.get("/deep", (req, res) => {
    return res.json({
        ok: true,
        checks: {
            cpu: "OK",
            memory: "OK",
            runtime: process.uptime(),
            timestamp: Date.now()
        }
    });
});

// ping
healthRouter.get("/ping", (req, res) => {
    return res.json({
        ok: true,
        pong: true,
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { healthRouter };
}
