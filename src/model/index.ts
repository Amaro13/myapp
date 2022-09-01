export interface DoctorEntity {
  id: string;
  name: string; //Máximo de 120 caractéres;
  CRM: number; //Somente números com no máximo 7 caracteres.
  fixo: number; //Somente números
  celular: number; //Somente números
  CEP: number; //Somente números (Ao cadastrar o CEP, deve ser feita uma requisição para a API dos correios e retornar todos os dados de endereço do cliente)
  specialty: string[]; //Mínimo de duas especialidades
}
