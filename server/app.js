import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { mainRouter } from "./routes/index.js";
import { engineRouter } from "./routes/engineRoutes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("combined"));

app.use("/api", mainRouter);
app.use("/api/engine", engineRouter);

export { app };

if (typeof module !== "undefined" && module.exports) {
    module.exports = { app };
}
