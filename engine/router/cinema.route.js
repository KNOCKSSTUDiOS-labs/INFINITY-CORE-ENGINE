import { GICinemaApp } from "../cinema-engine/GI-CINEMA-APP-L.js";

export const CinemaRoute = {
    id: "cinema-route-1",
    name: "GI-CINEMA-ROUTE",
    version: "1.0.0",

    register(server) {
        // GET /cinema/generate?type=fullmovie
        server.get("/cinema/generate", (req, res) => {
            const type = req.query.type || "fullmovie";
            const pkg = GICinemaApp.generate(type);
            res.json({ status: "OK", package: pkg });
        });

        // POST /cinema/generate
        server.post("/cinema/generate", (req, res) => {
            const type = req.body.type || "fullmovie";
            const pkg = GICinemaApp.generate(type);
            res.json({ status: "OK", package: pkg });
        });

        // GET /cinema/ui
        server.get("/cinema/ui", (req, res) => {
            res.send(GICinemaApp.ui.render());
        });

        // GET /cinema/ping
        server.get("/cinema/ping", (req, res) => {
            res.json({ status: "CINEMA-APP-ONLINE" });
        });
    }
};
