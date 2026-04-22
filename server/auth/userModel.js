// simple in‑memory user model placeholder
// replace with real DB in production

export const UserModel = {
    _users: new Map(),

    create({ id, email, role = "user" }) {
        const user = {
            id,
            email,
            role,
            createdAt: Date.now()
        };
        this._users.set(id, user);
        return user;
    },

    get(id) {
        return this._users.get(id) || null;
    },

    getByEmail(email) {
        for (const u of this._users.values()) {
            if (u.email === email) return u;
        }
        return null;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { UserModel };
}
