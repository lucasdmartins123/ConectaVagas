import axios from "axios";

export const api = axios.create({
  baseURL: "https://conectavagas.up.railway.app/",
});
