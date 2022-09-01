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

export const EditDoctor = (doctor: DoctorEntity) => {
  const newArr: any = doctorRepository;
  doctorRepository = newArr.map((obj: DoctorEntity) => {
    if (obj.id == doctor.id) {
      return { ...obj, doctor };
    }
  });
  return doctorRepository;
};

export const RemoveDoctor = (doctor: DoctorEntity) => {
  const newArr: DoctorEntity[] = doctorRepository;
  doctorRepository = newArr.filter((obj) => {
    return obj.id !== doctor.id;
  });
  return doctorRepository;
};
