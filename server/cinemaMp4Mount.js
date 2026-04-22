import { cinemaMp4Route } from "../backend/cinemaMp4Route.js";

export const cinemaMp4Mount = {
    id: "server-mount-cinema-mp4-1",
    name: "SERVER-MOUNT-CINEMA-MP4",
    version: "1.0.0",

    register(app) {
        app.use("/api/cinema", cinemaMp4Route);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { cinemaMp4Mount };
}
