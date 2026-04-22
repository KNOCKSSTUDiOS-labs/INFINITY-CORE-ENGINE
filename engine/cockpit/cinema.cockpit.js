import { GICinemaApp } from "../cinema-engine/GI-CINEMA-APP-L.js";

export const GICinemaCockpit = {
    id: "cinema-cockpit-1",
    name: "GI-CINEMA-COCKPIT-L",
    version: "1.0.0",

    // -------------------------
    // COCKPIT PANEL RENDER
    // -------------------------
    render() {
        return `
            <div class="cinema-cockpit">
                <h1>CINEMA ENGINE — CREATOR COCKPIT</h1>

                <section class="controls">
                    <h2>Generate Cinematic Package</h2>
                    <button onclick="window.CinemaCockpit_generate('intro')">Intro</button>
                    <button onclick="window.CinemaCockpit_generate('trailer')">Trailer</button>
                    <button onclick="window.CinemaCockpit_generate('fullmovie')">Full Movie</button>
                    <button onclick="window.CinemaCockpit_generate('credits')">Credits</button>
                </section>

                <section class="preview">
                    <h2>Preview Output</h2>
                    <pre id="cinema-cockpit-preview">No package generated yet.</pre>
                </section>

                <section class="automation">
                    <h2>Automation</h2>
                    <button onclick="window.CinemaCockpit_schedule('1h')">Every Hour</button>
                    <button onclick="window.CinemaCockpit_schedule('24h')">Daily</button>
                    <button onclick="window.CinemaCockpit_schedule('7d')">Weekly</button>
                </section>

                <section class="logs">
                    <h2>Logs</h2>
                    <pre id="cinema-cockpit-logs"></pre>
                </section>
            </div>
        `;
    },

    // -------------------------
    // COCKPIT ACTIONS
    // -------------------------
    actions: {
        generate(type) {
            const pkg = GICinemaApp.generate(type);
            GICinemaCockpit.log(`Generated package: ${type}`);
            return pkg;
        },

        schedule(interval) {
            const job = GICinemaApp.automation.schedule(interval);
            GICinemaCockpit.log(`Scheduled automation: ${interval}`);
            return job;
        }
