import express, { response } from "express";
import { Router, Request, Response } from "express";
import {
  AddDoctor,
  EditDoctor,
  GetAllDoctors,
  RemoveDoctor,
} from "../service/index";
import { DoctorEntity } from "../model/index";

const app = express();

const route = Router();

app.use(express.json());

export const GetAllDoctorsController = (req: Request, res: Response) => {
  try {
    const doctors: DoctorEntity[] = GetAllDoctors();

    res.status(200).send(doctors);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const PostNewDoctor = (req: Request, res: Response) => {
  try {
    const doctor: DoctorEntity = req.body;
    AddDoctor(doctor);

    res.status(201).send(doctor);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const AlterDoctor = (req: Request, res: Response) => {
  try {
    const doctor: DoctorEntity = req.body;
    EditDoctor(doctor);

    res.status(201).send(doctor);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const DeleteDoctor = (req: Request, res: Response) => {
  try {
    const doctor: DoctorEntity = req.body;
    RemoveDoctor(doctor);

    res.status(200).send(`{success: true}`);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
