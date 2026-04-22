import express from "express";

export const cacheRouter = express.Router();

// in‑memory cache placeholder
let cacheStore = new Map();

// write to cache
cacheRouter.post("/set", (req, res) => {
    const { key, value } = req.body;

    if (!key) {
        return res.status(400).json({ error: "MISSING_KEY" });
    }

    cacheStore.set(key, {
        value,
        at: Date.now()
    });

    return res.json({
        ok: true,
        key,
        stored: true
    });
});

// read from cache
cacheRouter.get("/get/:key", (req, res) => {
    const key = req.params.key;

    if (!cacheStore.has(key)) {
        return res.status(404).json({ error: "CACHE_MISS" });
    }

    return res.json({
        ok: true,
        key,
        data: cacheStore.get(key)
    });
});

// clear cache
cacheRouter.post("/clear", (req, res) => {
    cacheStore.clear();
    return res.json({
        ok: true,
        cleared: true,
        at: Date.now()
    });
});

// cache health
cacheRouter.get("/health", (req, res) => {
    return res.json({
        ok: true,
        cache: "ONLINE",
        size: cacheStore.size,
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { cacheRouter };
}
