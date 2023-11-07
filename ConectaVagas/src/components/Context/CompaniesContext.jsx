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
  const [notifications, setNotifications] = useState([
    {
      id: 2, // id recomendação
      jobVacancy: {
        // vaga da recomendação
        id: 26,
        title: "Desenvolvedor backend TESTE NOTI 14",
        location: "Santa Maria",
        companyName: "Pedro LTDA",
      },
      createdAt: "2023-11-07T00:10:43.485+00:00", // data de criação da recomendação
    },
    {
      id: 3, // id recomendação
      jobVacancy: {
        // vaga da recomendação
        id: 26,
        title: "Desenvolvedor backend TESTE NOTI 14",
        location: "Santa Maria",
        companyName: "Pedro LTDA",
      },
      createdAt: "2023-11-07T00:10:43.485+00:00", // data de criação da recomendação
    },
  ]);
  const [tags, setTags] = useState([
    {
      id: 1,
      title: "Backend",
    },
    {
      id: 2,
      title: "Frontend",
    },
    {
      id: 3,
      title: "IA",
    },
    {
      id: 4,
      title: "Redes",
    },
    {
      id: 5,
      title: "Java",
    },
  ]);
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
  async function handleNotifications() {
    try {
      const notificationList = await api.get(
        `/person/${userId}/recommendations`,
        headers
      );
      setNotifications(notificationList);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReadNotifications(notificationId) {
    try {
      await api.put(
        `recommendations/person/${userId}/read/${notificationId}`,
        headers
      );
      handleNotifications();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleTags() {
    try {
      const tagList = await api.get(`/tags/select`, headers);
      setTags(tagList);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFilter(category) {
    navigate("/home");

    if (category.length === 0) {
      setEmpty(false);
      setFilter([]);
    } else {
      const selected = vacanciesList.filter((vacancy) =>
        category.includes(vacancy.filters)
      );
      console.log(vacanciesList);
      console.log(selected);
      console.log(category);
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
  useEffect(() => {
    if (token) {
      handleTags();
      handleNotifications();
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
        handleFilter,
        tags,
        notifications,
        handleReadNotifications,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export { CompaniesContext, CompaniesProvider };
