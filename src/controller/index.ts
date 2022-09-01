import express, { response } from "express";
import { Router, Request, Response } from "express";
import {
  AddDoctor,
  CheckId,
  CheckParam,
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
    const check: string | undefined = CheckParam(doctor);
    if (check == undefined) {
      AddDoctor(doctor);
      res.status(201).send(doctor);
    } else {
      res.send(check);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const AlterDoctor = (req: Request, res: Response) => {
  try {
    const doctor: DoctorEntity = req.body;
    const id: string = req.params.id;

    const checkid: string | undefined = CheckId(id);
    const check: string | undefined = CheckParam(doctor);

    if (checkid == undefined) {
      if (check == undefined) {
        EditDoctor(doctor, id);
        res.status(201).send(doctor);
      } else {
        res.send(check);
      }
    } else {
      res.send(checkid);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const DeleteDoctor = (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const checkid: string | undefined = CheckId(id);
    if (checkid == undefined) {
      RemoveDoctor(id);
      res.send("deleted with success");
    } else {
      res.send(checkid);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};
