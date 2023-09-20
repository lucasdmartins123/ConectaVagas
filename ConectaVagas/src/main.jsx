import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import { CompaniesProvider } from "./components/Context/CompaniesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CompaniesProvider>
          <App />
        </CompaniesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
