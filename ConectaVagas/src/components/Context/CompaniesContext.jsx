import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Axios/Api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const CompaniesContext = createContext();

const CompaniesProvider = ({ children }) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [vacanciesList, setVacanciesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbLoading, setDbLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { userData } = useContext(AuthContext);
  const headers = {
    headers: { Authorization: `Bearer ${JSON.parse(token)}` },
  };

  async function loadCompanies() {
    try {
      const { data } = await api.get("/companies", headers);
      setCompaniesList(data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadVacancies() {
    try {
      const { data } = await api.get("/myvacancies", headers);
      setVacanciesList(data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function companiesRegister(companiesData) {
    setDbLoading(true);
    try {
      await api.post("companies", companiesData, headers);
      loadCompanies();
      alert("Empresa adicionada");
    } catch (error) {
      console.log(error);
    } finally {
      setDbLoading(false);
    }
  }

  async function vacanciesRegister(vacanciesData) {
    setDbLoading(true);
    try {
      await api.post("myvacancies", vacanciesData, headers);
      loadVacancies();
      alert("Vaga adicionada");
    } catch (error) {
      console.log(error);
    } finally {
      setDbLoading(false);
    }
  }

  async function vancanciesEdit(vacanciesData) {
    try {
      await api.put(`myvacancies`, vacanciesData, headers);
      loadBooks();
      alert("Vaga atualizada");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      loadCompanies();
      loadVacancies();
    }
  }, [userData]);
  return (
    <CompaniesContext.Provider
      value={{
        companiesList,
        vacanciesList,
        companiesRegister,
        vacanciesRegister,
        vancanciesEdit,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export { CompaniesContext, CompaniesProvider };
