import axios from "axios";

export const api = axios.create({
  baseURL: "conectavagas-production.up.railway.app",
});
