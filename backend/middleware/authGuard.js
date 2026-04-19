// AUTH GUARD · INFINITY-CORE-ENGINE
// Cookie-based session + role enforcement.

const { ROLES } = require("../auth");

function authGuard(allowedRoles = []) {
  return (req, res, next) => {
    const session = parseSession(req);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { role, username } = session;

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ error: "Forbidden", role, username });
    }

    req.user = session;
    next();
  };
}

function superuserGuard(req, res, next) {
  const session = parseSession(req);
  if (!session || session.role !== ROLES.KING_KNOCKS) {
    return res.status(403).json({ error: "Superuser only" });
  }
  req.user = session;
  next();
}

function parseSession(req) {
  const raw = req.cookies && req.cookies.ic_session;
  if (!raw) return null;

  try {
    const json = Buffer.from(raw, "base64").toString("utf8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}

module.exports = {
  authGuard,
  superuserGuard,
};

