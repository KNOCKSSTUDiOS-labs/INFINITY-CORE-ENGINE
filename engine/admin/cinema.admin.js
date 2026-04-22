import { GICinemaApp } from "../cinema-engine/GI-CINEMA-APP-L.js";

export const GICinemaAdmin = {
    id: "cinema-admin-1",
    name: "GI-CINEMA-ADMIN-L",
    version: "1.0.0",

    // -------------------------
    // ADMIN ACCESS CONTROL
    // -------------------------
    allowedRanks: ["owner", "admin", "developer"],

    hasAccess(user) {
        return user && this.allowedRanks.includes(user.rank);
    },

    // -------------------------
    // ADMIN PANEL RENDER
    // -------------------------
    render(user) {
        if (!this.hasAccess(user)) {
            return `<div class="denied">ACCESS DENIED</div>`;
        }

        return `
            <div class="cinema-admin-panel">
                <h1>CINEMA ENGINE — ADMIN PANEL</h1>

                <section>
                    <h2>Generate Package</h2>
                    <button onclick="window.CinemaAdmin_generate('intro')">Intro</button>
                    <button onclick="window.CinemaAdmin_generate('trailer')">Trailer</button>
                    <button onclick="window.CinemaAdmin_generate('fullmovie')">Full Movie</button>
                    <button onclick="window.CinemaAdmin_generate('credits')">Credits</button>
                </section>

                <section>
                    <h2>Automation</h2>
                    <button onclick="window.CinemaAdmin_schedule('1h')">Every Hour</button>
                    <button onclick="window.CinemaAdmin_schedule('24h')">Daily</button>
                    <button onclick="window.CinemaAdmin_schedule('7d')">Weekly</button>
                </section>

                <section>
                    <h2>Logs</h2>
                    <div id="cinema-admin-logs"></div>
                </section>
            </div>
        `;
    },

    // -------------------------
    // ADMIN ACTIONS
    // -------------------------
    actions: {
        generate(type) {
            const pkg = GICinemaApp.generate(type);
            GICinemaAdmin.log(`Generated package: ${type}`);
            return pkg;
        },

        schedule(interval) {
            const job = GICinemaApp.automation.schedule(interval);
            GICinemaAdmin.log(`Scheduled automation: ${interval}`);
            return job;
        }
    },

    // -------------------------
    // LOGGING
    // -------------------------
    logs: [],

    log(entry) {
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${entry}`);
    },

    getLogs() {
        return this.logs.slice(-50); // last 50 logs
    }
};
