import express from "express";

export const queueRouter = express.Router();

// simple in‑memory job queue placeholder
let jobQueue = [];
let jobIdCounter = 1;

// enqueue job
queueRouter.post("/enqueue", (req, res) => {
    const { type = "generic", payload = {} } = req.body;

    const job = {
        id: jobIdCounter++,
        type,
        payload,
        status: "queued",
        at: Date.now()
    };

    jobQueue.push(job);

    return res.json({
        ok: true,
        job
    });
});

// get queue
queueRouter.get("/list", (req, res) => {
    return res.json({
        ok: true,
        queue: jobQueue
    });
});

// mark job complete
queueRouter.post("/complete", (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: "MISSING_JOB_ID" });
    }

    const job = jobQueue.find(j => j.id === Number(id));

    if (!job) {
        return res.status(404).json({ error: "JOB_NOT_FOUND" });
    }

    job.status = "completed";
    job.completedAt = Date.now();

    return res.json({
        ok: true,
        job
    });
});

// queue health
queueRouter.get("/health", (req, res) => {
    return res.json({
        ok: true,
        queue: "ONLINE",
        size: jobQueue.length,
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { queueRouter };
}
