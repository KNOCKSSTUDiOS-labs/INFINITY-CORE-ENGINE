import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "CHANGE_ME_IN_PRODUCTION";
const JWT_EXPIRES_IN = "7d";

export const AuthEngine = {
    id: "auth-engine-1",
    name: "AUTH-ENGINE-L",
    version: "1.0.0",

    signUser(user) {
        const payload = {
            id: user.id,
            role: user.role || "user",
            email: user.email
        };

        return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    },

    verifyToken(token) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (e) {
            return null;
        }
    }
};

export function requireAuth(req, res, next) {
    const header = req.headers["authorization"] || "";
    const [, token] = header.split(" ");

    if (!token) {
        return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const decoded = AuthEngine.verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    req.user = decoded;
    next();
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { AuthEngine, requireAuth };
}
