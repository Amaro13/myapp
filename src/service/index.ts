import { DoctorEntity } from "../model/index";

const crypto = require("crypto");

var doctorRepository: DoctorEntity[] = [];
const specialtylist: String[] = [
  "Alergologia",
  "Angiologia",
  "Buco maxilo",
  "Cardiologia clínca",
  "Cardiologia infantil",
  "Cirurgia cabeça e pescoço",
  "Cirurgia cardíaca",
  "Cirurgia de tórax",
];
export const GetAllDoctors = () => {
  return doctorRepository;
};

export const AddDoctor = (doctor: DoctorEntity) => {
  doctor.id = crypto.randomUUID();
  doctorRepository = [...doctorRepository, doctor];
  return doctorRepository;
};

export const EditDoctor = (doctor: DoctorEntity, id: string) => {
  const objIndex = doctorRepository.findIndex((obj) => obj.id == id);
  doctor.id = id;
  doctorRepository[objIndex] = doctor;
  return doctorRepository;
};

export const RemoveDoctor = (id: string) => {
  const findID = doctorRepository.findIndex((object) => {
    return object.id == id;
  });
  doctorRepository.splice(findID, 1);

  return doctorRepository;
};

export const CheckParam = (doctor: DoctorEntity) => {
  if (doctor.name.length > 120) {
    return "Nome muito comprido";
  }
  if (doctor.CRM.toString().length > 7 || isNaN(doctor.CRM)) {
    return "CRM muito comprido ou não numérico.";
  }
  if (isNaN(doctor.fixo)) {
    return "número fixo não numérico.";
  }
  if (isNaN(doctor.celular)) {
    return "número celular não numérico.";
  }
  if (doctor.specialty.length <= 1) {
    return "precisa ter mais especialidades.";
  }
};

export const CheckId = (id: string) => {
  const objIndex = doctorRepository.findIndex((obj) => obj.id == id);
  if (objIndex < 0) {
    return "Item não existe";
  }
};
