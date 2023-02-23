import axios from "axios";

export const api = axios.create({
  baseURL: 'httpps://'  // link de la api.
});

export const getPost = async () => {
  const response = await api.get('/posts')   // llamada a la data que qeuremos obtener, en este caso son posts.
  return response.data 
}