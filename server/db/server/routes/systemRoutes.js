import express from "express";
import { Database } from "../db/index.js";

export const systemRouter = express.Router();

// system status
systemRouter.get("/status", async (req, res) => {
    try {
        const dbStatus = await Database.connect();
        return res.json({
            ok: true,
            db: dbStatus ? "connected" : "disconnected",
            timestamp: Date.now()
        });
    } catch (err) {
        return res.status(500).json({ error: "SYSTEM_STATUS_ERROR" });
    }
});

// system shutdown placeholder
systemRouter.post("/shutdown", (req, res) => {
    return res.json({
        ok: true,
        message: "SYSTEM_SHUTDOWN_SIGNAL_RECEIVED"
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { systemRouter };
}
