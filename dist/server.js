import express from "express";
import { Router } from "express";
const app = express();
const port = `3333`;
const route = Router();
app.use(express.json());
app.use(route);
app.listen(port, () => `server running at https://localhost:${port}`);
