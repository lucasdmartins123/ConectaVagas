import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Home() {
  const { companiesList, vacanciesList, applyList, vacancyLoadApplications } =
    useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);

  /*let jobs = useMemo(() => {
    const apply = [];
    for (let i = 0; i < applyList.length; i++) {
      const verify = vacanciesList.filter(
        (vacancy) => vacancy.ID == applyList[i].ID
      );

      if (verify.length > 0) {
        apply.push(verify[0]);
      }
    }
    console.log(apply);
    console.log(applyList);
    console.log(vacanciesList);
    return apply;
  }, [applyList]);
*/
  useEffect(() => {
    vacancyLoadApplications();
  }, []);
  console.log(applyList);
  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50 flex flex-col items-center min-h:screen">
        <div className="flex flex-col pt-5">
          {userData.company ? (
            <>
              <Link to="/jobregister">
                <span className="text-3xl font-serif font-bold self-center  ">
                  Cadastrar Vaga
                </span>
              </Link>
              <h1 className="text-3xl font-serif font-bold self-center pt-5">
                Vagas Criadas:
              </h1>
            </>
          ) : (
            <h1 className="text-3xl font-serif font-bold self-center pt-10">
              Oportunidades de Vagas:
            </h1>
          )}
        </div>

        <div className="pt-2 flex flex-col ">
          {vacanciesList.map((vacancy, index) => (
            <div className="bg-azul-100 pt-5 flex flex-col " key={index}>
              <Link to={`/vacancieDetails/${vacancy.ID}`}>
                <div className="bg-white rounded-xl text-base font-serif font-bold ">
                  <p className="px-20"> Titulo: {vacancy.title}</p>
                  <p className="px-20"> Descrição: {vacancy.description}</p>
                  <p className="px-20"> Localização: {vacancy.location}</p>
                  <p className="px-20"> Salário: {vacancy.salary}</p>
                  <p className="px-20">
                    {" "}
                    Data de publicação: {vacancy.postDate}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-serif font-bold self-center pt-10">
          Vagas Aplicadas:
        </h1>
        <div className="flex flex-col gap-4">
          {applyList.map((vacancy, index) => (
            <div key={index}>
              <Link to={`/vacancieDetails/${vacancy.ID}`}>
                <div className="bg-white rounded-xl text-base font-serif font-bold ">
                  <p className="px-20"> Titulo: {vacancy.title}</p>
                  <p className="px-20"> Descrição: {vacancy.description}</p>
                  <p className="px-20"> Localização: {vacancy.location}</p>
                  <p className="px-20"> Salário: {vacancy.salary}</p>
                  <p className="px-20">
                    {" "}
                    Data de publicação: {vacancy.postDate}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
