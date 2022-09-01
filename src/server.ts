import express from "express";
import { Router } from "express";

import {
  AlterDoctor,
  DeleteDoctor,
  GetAllDoctorsController,
  PostNewDoctor,
} from "./controller";

const app = express();
const port = `3333`;
const route = Router();

app.use(express.json());
app.use(route);
app.listen(port, () => `server running at https://localhost:${port}`);

app.get("/", GetAllDoctorsController);
app.post("/add", PostNewDoctor);
app.put(`/edit/:id`, AlterDoctor);
app.delete(`/delete/:id`, DeleteDoctor);
