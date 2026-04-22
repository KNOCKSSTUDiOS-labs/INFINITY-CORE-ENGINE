// simple in‑memory subscription model placeholder
// replace with real DB (Postgres/MySQL) in production

export const SubscriptionModel = {
    _subs: new Map(),

    setActive(userId, plan = "pro") {
        this._subs.set(userId, {
            userId,
            plan,
            active: true,
            updatedAt: Date.now()
        });
    },

    setInactive(userId) {
        this._subs.set(userId, {
            userId,
            plan: null,
            active: false,
            updatedAt: Date.now()
        });
    },

    get(userId) {
        return this._subs.get(userId) || { active: false };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { SubscriptionModel };
}
