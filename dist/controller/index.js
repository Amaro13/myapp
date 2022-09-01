import express from "express";
import { Router } from "express";
import { AddDoctor, EditDoctor, GetAllDoctors, RemoveDoctor, } from "../service/index";
const app = express();
const route = Router();
app.use(express.json());
app.get("/", (req, res) => {
    try {
        const doctors = GetAllDoctors();
        res.status(200).send(doctors);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.post("/add", (req, res) => {
    try {
        const doctor = req.body;
        AddDoctor(doctor);
        res.status(201).send(doctor);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.put(`/edit/:id`, (req, res) => {
    try {
        const doctor = req.body;
        EditDoctor(doctor);
        res.status(201).send(doctor);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.delete(`/delete/:id`, (req, res) => {
    try {
        const doctor = req.body;
        RemoveDoctor(doctor);
        res.status(201).send(doctor);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
