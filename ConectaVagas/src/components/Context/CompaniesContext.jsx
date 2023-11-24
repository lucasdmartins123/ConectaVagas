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
  const [filter, setFilter] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [socialMediaList, setSocialMediaList] = useState(null);
  const [tags, setTags] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [limitPage, setLimitPage] = useState("");
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
      const { data } = await api.get(
        `/myvacancies${filter ? `?tagIds=${filter}` : ""}`,
        headers
      );
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
  async function handleNotifications() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    try {
      const notificationList = await api.get(
        `/person/${userId}/recommendations`,
        headers
      );
      setNotifications(notificationList.data.content);
      //setLimitPage(notificationList.pageable)
      console.log(notificationList);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleTags() {
    try {
      const tagList = await api.get(`/tags/select`);
      setTags(tagList.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSocialMedias() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.id;
    try {
      const MediaList = await api.get(`/person/${userId}/contact`, headers);
      setSocialMediaList(MediaList.data);
      console.log(MediaList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      //loadCompanies();
      loadVacancies();
      handleNotifications();
      handleSocialMedias();
    }
  }, [userData, filter]);

  useEffect(() => {
    handleTags();
  }, []);

  useEffect(() => {
    if (token) {
      console.log("entrei");
    }
  }, []);
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
        tags,
        notifications,
        handleSocialMedias,
        socialMediaList,
        limitPage,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export { CompaniesContext, CompaniesProvider };
