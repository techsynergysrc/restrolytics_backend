import express from 'express';
import { PORT } from "./config/env.js";

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Restaurant analytics backend API");
});

app.listen(PORT, () => {
    console.log(`Restaurant analytics backend API is running on http://localhost:${ PORT }`);
});

export default app;