import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { InfinityCoreEngine } from "../engine/INFINITY-CORE-ENGINE-L.js";
import { requireAuth } from "./auth/authEngine.js";
import { requireActiveSubscription } from "./billing/billingEngine.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("combined"));

const enginePackage = InfinityCoreEngine.boot({});

app.post(
    "/api/cinema/mp4",
    requireAuth,
    requireActiveSubscription,
    async (req, res) => {
        try {
            // hook into your real MP4 pipeline here
            return res.json({
                ok: true,
                status: enginePackage.status || {},
                message: "INFINITY-CORE-ENGINE MP4 endpoint live"
            });
        } catch (err) {
            console.error("ENGINE ERROR", err);
            return res.status(500).json({ error: "ENGINE_FAILURE" });
        }
    }
);

app.get("/health", (req, res) => {
    res.json({ ok: true, engine: enginePackage.status || {} });
});

app.listen(PORT, () => {
    console.log(`INFINITY-CORE-ENGINE live on port ${PORT}`);
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { app };
}
