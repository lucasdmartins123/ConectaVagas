import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Begin from "./pages/Begin/Begin.jsx";
import Login from "./pages/Login/Login.jsx";
import { AuthContext } from "./components/Context/AuthContext.jsx";
import Home from "./pages/Home/Home.jsx";
import JobRegister from "./pages/JobRegister/JobRegister.jsx";
import RegisterCompany from "./pages/RegisterCompany/RegisterCompany.jsx";
import RegisterPerson from "./pages/RegisterPerson/RegisterPerson.jsx";
import CompaniesList from "./pages/CompaniesList/CompaniesList.jsx";
import Profile from "./pages/Perfil/Perfil.jsx";

function App() {
  const { authenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={!authenticated ? <Begin /> : <Navigate to="/home" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/registerCompany" element={<RegisterCompany />} />
      <Route path="/registerPerson" element={<RegisterPerson />} />
      <Route
        path="/home"
        element={authenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route
        path="/jobRegister"
        element={authenticated ? <JobRegister /> : <Navigate to="/" />}
      />
      <Route
        path="/profile"
        element={authenticated ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="/companiesList"
        element={authenticated ? <CompaniesList /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
