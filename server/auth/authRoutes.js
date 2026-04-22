import express from "express";
import { UserModel } from "./userModel.js";
import { AuthEngine } from "./authEngine.js";

export const authRouter = express.Router();

// register user
authRouter.post("/register", (req, res) => {
    const { id, email } = req.body;

    if (!id || !email) {
        return res.status(400).json({ error: "MISSING_FIELDS" });
    }

    const existing = UserModel.getByEmail(email);
    if (existing) {
        return res.status(409).json({ error: "EMAIL_EXISTS" });
    }

    const user = UserModel.create({ id, email });
    const token = AuthEngine.signUser(user);

    return res.json({ ok: true, user, token });
});

// login user
authRouter.post("/login", (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "MISSING_EMAIL" });
    }

    const user = UserModel.getByEmail(email);
    if (!user) {
        return res.status(404).json({ error: "USER_NOT_FOUND" });
    }

    const token = AuthEngine.signUser(user);
    return res.json({ ok: true, user, token });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { authRouter };
}
