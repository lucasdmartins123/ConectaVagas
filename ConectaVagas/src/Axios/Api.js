import axios from "axios";

export const api = axios.create({
  baseURL: "https://conectavagas-production.up.railway.app",
});
