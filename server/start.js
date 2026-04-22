import { app } from "./app.js";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`INFINITY-CORE-PRODUCTION live on port ${PORT}`);
});
