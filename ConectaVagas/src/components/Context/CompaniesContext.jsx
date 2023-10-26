import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Axios/Api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const CompaniesContext = createContext();

const CompaniesProvider = ({ children }) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [vacanciesList, setVacanciesList] = useState([]);
  const [vacancieDetails, setVacancieDetails] = useState({});
  const [search, setSearch] = useState("");
  const [applyList, setapplyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbLoading, setDbLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [empty, setEmpty] = useState(false);
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

  async function LoadVacanciesDetails(vacancieId) {
    try {
      const { data } = await api.get(`myvacancies/${vacancieId}`, headers);
      setVacancieDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function vacanciesRegister(vacanciesData) {
    setDbLoading(true);
    try {
      await api.post("myvacancies", vacanciesData, headers);
      loadVacancies();
      alert("Vaga adicionada");
      navigate("/home");
    } catch (error) {
      console.log(error);
    } finally {
      setDbLoading(false);
    }
  }

  async function vacanciesEdit(vacanciesData) {
    try {
      await api.put(`myvacancies`, vacanciesData, headers);
      loadVacancies();
      alert("Vaga atualizada");
    } catch (error) {
      console.log(error);
    }
  }

  async function vacancieDelete(id) {
    try {
      await api.delete(`myvacancies/${id}`, headers);
      loadVacancies();
      alert("Vaga excluida");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  async function vacancyApply(vacancieId) {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    const applyData = { personID: userId, jobID: vacancieId };
    try {
      await api.post(`/users/applications/${userId}`, applyData, headers);
      vacancyLoadApplications();
    } catch (error) {
      console.log(error);
    }
  }

  async function vacancyLoadApplications() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    try {
      const data = await api.get(`/users/applications/${userId}`, headers);
      setapplyList(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function vacancyQuit(vacancieId) {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    console.log(userId);
    console.log(vacancieId);
    try {
      await api.delete(`/users/applications/${userId}/${vacancieId}`, headers);
      vacancyLoadApplications();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFilter(category) {
    navigate("/home");
    if (category === "ALL") {
      setEmpty(false);
      setFilter([]);
    } else {
      const selected = vacanciesList.filter(
        (vacancy) => vacancy.filters === category
      );
      if (selected.length > 0) {
        setEmpty(false);
        setFilter(selected);
      } else {
        setEmpty(true);
      }
    }
  }

  useEffect(() => {
    if (token) {
      //loadCompanies();
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
        vacanciesEdit,
        LoadVacanciesDetails,
        vacancieDetails,
        vacancieDelete,
        vacancyApply,
        vacancyLoadApplications,
        applyList,
        vacancyQuit,
        search,
        setSearch,
        filter,
        setFilter,
        empty,
        setEmpty,
        handleFilter,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export { CompaniesContext, CompaniesProvider };
