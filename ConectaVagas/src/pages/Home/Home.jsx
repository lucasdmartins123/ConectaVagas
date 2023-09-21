import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";

export default function Home() {
  const { companiesList, vacanciesList } = useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);
  return (
    <>
      <div className="bg-azul-100 opacity-50  flex flex-col items-center h-screen">
        <h1 className="text-3xl font-serif font-bold self-center pt-10">
          Oportunidades de Vagas
        </h1>
        <div className="pt-2 flex flex-col ">
          {vacanciesList.map((vacancy, index) => (
            <div className="bg-azul-100 pt-5 flex flex-col " key={index}>
              <div className="bg-white rounded-xl text-base font-serif font-bold ">
                <p className="px-20"> Titulo: {vacancy.title}</p>
                <p className="px-20"> Descrição: {vacancy.description}</p>
                <p className="px-20"> Localização: {vacancy.location}</p>
                <p className="px-20"> Salário: {vacancy.salary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
