import axios from "axios";

export const api = axios.create({
  baseURL: 'httpps://localhost:8000/api'  // link de la api.
});

export const getVinils = async () => {
  const response = await api.get('${url}/vinils')   // llamada a la data que qeuremos obtener, en este caso son los vinilos.
  return response.data 
};