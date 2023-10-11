import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Profile() {
  const { companiesList, vacanciesList, applyList, vacancyLoadApplications } =
    useContext(CompaniesContext);

  useEffect(() => {
    vacancyLoadApplications();
  }, []);
  console.log(applyList);
  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50  flex flex-col  h-screen ">
        <h1 className="text-3xl font-serif font-bold self-center pt-10">
          Minhas Vagas:
        </h1>
        <div className="pt-2 flex flex-col">
          {applyList.map((vacancy, index) => (
            <div
              className="bg-azul-100 pt-5 flex flex-col justify-center items-center"
              key={index}
            >
              <div className="bg-white rounded-xl text-base font-serif font-bold w-1/2 flex flex-col px-20">
                <Link to={`/vacancieDetails/${vacancy.ID}`}>
                  <p> Titulo: {vacancy.title}</p>
                  <p> Descrição: {vacancy.description}</p>
                  <p> Localização: {vacancy.location}</p>
                  <p> Categorias: {vacancy.filters}</p>
                  <p> Salário: {vacancy.salary}</p>
                  <p> Data de publicação: {vacancy.postDate}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
