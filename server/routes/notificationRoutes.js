import express from "express";

export const notificationRouter = express.Router();

// in‑memory notification store (placeholder)
let notifications = [];
let notifId = 1;

// create notification
notificationRouter.post("/create", (req, res) => {
    const { userId, title, body, meta = {} } = req.body;

    if (!userId || !title || !body) {
        return res.status(400).json({ error: "MISSING_FIELDS" });
    }

    const notif = {
        id: notifId++,
        userId,
        title,
        body,
        meta,
        read: false,
        at: Date.now()
    };

    notifications.push(notif);

    return res.json({
        ok: true,
        notification: notif
    });
});

// list notifications for a user
notificationRouter.get("/list/:userId", (req, res) => {
    const userId = req.params.userId;

    const userNotifs = notifications.filter(n => n.userId === userId);

    return res.json({
        ok: true,
        notifications: userNotifs
    });
});

// mark as read
notificationRouter.post("/read", (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: "MISSING_NOTIFICATION_ID" });
    }

    const notif = notifications.find(n => n.id === Number(id));

    if (!notif) {
        return res.status(404).json({ error: "NOTIFICATION_NOT_FOUND" });
    }

    notif.read = true;
    notif.readAt = Date.now();

    return res.json({
        ok: true,
        notification: notif
    });
});

// notification health
notificationRouter.get("/health", (req, res) => {
    return res.json({
        ok: true,
        notifications: "ONLINE",
        count: notifications.length,
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { notificationRouter };
}
