import axios from "axios";

export const api = axios.create({
  baseURL: "http://conectavagas.inf.ufsm.br/",
});
