import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";

export default function Home() {
  const { companiesList, vacanciesList } = useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);
  return (
    <>
      <div className="bg-red-500">
        {companiesList.map((company, index) => (
          <div key={index}>
            <p>ois</p>
            <p> {company.cnpj}</p>
            <p> {company.nomeFantasia}</p>
            <p> {company.cnae}</p>
            <p> {company.uf}</p>
          </div>
        ))}
      </div>
      <div className="bg-red-500">
        {vacanciesList.map((vacancy, index) => (
          <div key={index}>
            <p> {vacancy.title}</p>
            <p> {vacancy.description}</p>
            <p> {vacancy.location}</p>
            <p> {vacancy.salary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
