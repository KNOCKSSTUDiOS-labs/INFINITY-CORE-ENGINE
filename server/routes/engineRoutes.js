import express from "express";
import { requireAuth } from "../auth/authEngine.js";
import { requireActiveSubscription } from "../billing/billingEngine.js";
import { InfinityCoreEngine } from "../../engine/INFINITY-CORE-ENGINE-L.js";

export const engineRouter = express.Router();

const enginePackage = InfinityCoreEngine.boot({});

// protected engine endpoint example
engineRouter.post(
    "/cinema/mp4",
    requireAuth,
    requireActiveSubscription,
    async (req, res) => {
        try {
            // plug in your real MP4 pipeline here
            return res.json({
                ok: true,
                engine: enginePackage.status || {},
                message: "INFINITY-CORE-ENGINE MP4 pipeline live"
            });
        } catch (err) {
            console.error("ENGINE ROUTE ERROR", err);
            return res.status(500).json({ error: "ENGINE_FAILURE" });
        }
    }
);

if (typeof module !== "undefined" && module.exports) {
    module.exports = { engineRouter };
}
