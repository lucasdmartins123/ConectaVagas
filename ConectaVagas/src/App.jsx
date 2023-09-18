import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Begin from "./pages/Begin/Begin.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Begin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
