var doctorRepository = [];
const specialtylist = [
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
export const AddDoctor = (doctor) => {
    doctorRepository = [...doctorRepository, doctor];
    return doctorRepository;
};
export const EditDoctor = (doctor) => {
    const newArr = doctorRepository;
    doctorRepository = newArr.map((obj) => {
        if (obj.id == doctor.id) {
            return Object.assign(Object.assign({}, obj), { doctor });
        }
    });
    return doctorRepository;
};
export const RemoveDoctor = (doctor) => {
    const newArr = doctorRepository;
    doctorRepository = newArr.filter((obj) => {
        return obj.id !== doctor.id;
    });
    return doctorRepository;
};
