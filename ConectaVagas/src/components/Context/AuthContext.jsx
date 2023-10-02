import { createContext, useEffect, useState } from "react";
import { api } from "../../Axios/Api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(userData) {
    try {
      const { data } = await api.post("/login", userData);
      const token = JSON.stringify(data.token);
      const user = {
        name: data.name,
        email: data.email,
        company: data.is_company,
        id: data.id,
      };
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthenticated(true);
      setUserData(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("email inexistente ou senha invalida");
    }
  }

  async function handleRegisterCompany(userData) {
    try {
      await api.post("/registerCompany", userData);
      alert("cadastrado com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRegisterPerson(userData) {
    try {
      await api.post("/registerPerson", userData);
      alert("cadastrado com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      setAuthenticated(true);
      setUserData(user);
    } else {
      navigate("/");
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegisterCompany,
        handleRegisterPerson,
        handleLogout,
        authenticated,
        loading,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
