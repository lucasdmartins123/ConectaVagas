import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function CompaniesList() {
  const { companiesList } = useContext(CompaniesContext);

  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50  flex flex-col justify-center items-center">
        <h1 className="text-3xl font-serif font-bold self-center pt-10">
          Lista de Empresas
        </h1>
        <div className="flex">
          <div className="pt-2 flex flex-col ">
            {companiesList.map((company, index) => (
              <div className="bg-azul-100 pt-5 flex flex-col " key={index}>
                <div className="bg-white rounded-xl text-base font-serif font-bold w-5/6 px-20 ">
                  <p> Cnpj: {company.cnpj}</p>
                  <p> Nome: {company.nomeFantasia}</p>
                  <p> Estado: {company.uf}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/jobregister">
            <span className="text-3xl font-serif font-bold self-center  ">
              Cadastrar Vaga
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
