import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Begin from "./pages/Begin/Begin.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { AuthContext } from "./components/Context/AuthContext.jsx";
import Home from "./pages/Home/Home.jsx";

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
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={authenticated ? <Home /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
