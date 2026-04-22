import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { InfinityCoreEngine } from "../engine/INFINITY-CORE-ENGINE-L.js";

const app = express();
const PORT = process.env.PORT || 8080;

// basic hardening
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("combined"));

// TODO: plug in your real DB + Stripe SDK here
// import { db } from "./db.js";
// import { stripe } from "./stripe.js";

// --- AUTH MIDDLEWARE (JWT placeholder) ---
function requireAuth(req, res, next) {
    // read token from Authorization: Bearer <token>
    // verify JWT, attach user to req.user
    // if invalid -> return res.status(401).json({ error: "UNAUTHORIZED" });
    next();
}

// --- SUBSCRIPTION MIDDLEWARE (placeholder) ---
function requireActiveSubscription(req, res, next) {
    // check req.user.id in DB for active subscription
    // if none -> return res.status(402).json({ error: "PAYMENT_REQUIRED" });
    next();
}

// --- BOOT INFINITY-CORE ENGINE ---
const enginePackage = InfinityCoreEngine.boot({});

// example protected engine route
app.post(
    "/api/cinema/mp4",
    requireAuth,
    requireActiveSubscription,
    async (req, res) => {
        try {
            // here you’d call into your MP4 pipeline using enginePackage.engine
            // e.g. enginePackage.engine.cinema.mp4.process(req.body)
            return res.json({ ok: true, engine: enginePackage.status });
        } catch (err) {
            console.error("ENGINE ERROR", err);
            return res.status(500).json({ error: "ENGINE_FAILURE" });
        }
    }
);

// healthcheck
app.get("/health", (req, res) => {
    res.json({ ok: true, engine: enginePackage.status || {} });
});

app.listen(PORT, () => {
    console.log(`INFINITY-CORE-ENGINE live on port ${PORT}`);
});
