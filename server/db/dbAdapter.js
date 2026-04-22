// placeholder DB adapter
// swap with real Postgres / MySQL / Mongo driver in production

export const DB = {
    async connect() {
        // TODO: connect to real DB using Env.DB_URL
        return true;
    },

    async disconnect() {
        return true;
    },

    async query(q, params = []) {
        // TODO: replace with real SQL/NoSQL query
        return { rows: [], ok: true };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { DB };
}
