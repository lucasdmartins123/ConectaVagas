import { useState, useRef, useContext, useEffect, useMemo } from "react";
import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Home() {
  const { companiesList, vacanciesList, applyList, vacancyLoadApplications } =
    useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);
  const { handleFilter, setEmpty, setFilter, empty, filter } =
    useContext(CompaniesContext);

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
      <div className="bg-azul-100 opacity-50 flex flex-col items-center min-h-[calc(100vh-64px)]">
        <div className="flex flex-col pt-5">
          {userData.company ? (
            <>
              <Link to="/jobregister">
                <span className="text-3xl font-serif font-bold self-center   ">
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

        <div className="pt-2 grid grid-cols-3">
          {empty === true ? (
            <p>Nenhuma vaga dessa categoria</p>
          ) : filter.length > 0 ? (
            filter.map((vacancy, index) => (
              <div className="bg-azul-100 pt-5 flex flex-col pr-3" key={index}>
                <Link to={`/vacancieDetails/${vacancy.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-blue-600 p-3 mb-2 rounded-xl shadow-md shadow-black">
                    {vacancy.title}
                  </h1>
                  <div className="bg-white rounded-xl text-base font-sans px-9 py-4 shadow-sm shadow-black ">
                    <p> {vacancy.description}</p>
                    <p> Cidade: {vacancy.location}</p>
                    <p> Categorias: {vacancy.filters}</p>
                    <p> Salário: {vacancy.salary}</p>
                    <p>Data de publicação: {vacancy.postDate}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            vacanciesList.map((vacancy, index) => (
              <div className="bg-azul-100 pt-5 flex flex-col pr-3 " key={index}>
                <Link to={`/vacancieDetails/${vacancy.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-blue-600 p-3 mb-2 rounded-xl shadow-md shadow-black">
                    {vacancy.title}
                  </h1>
                  <div className="bg-white rounded-xl text-base font-serif font-bold px-9 py-4 shadow-sm shadow-black ">
                    <p> {vacancy.description}</p>
                    <p> Cidade: {vacancy.location}</p>
                    <p> Categorias: {vacancy.filters}</p>
                    <p> Salário: {vacancy.salary}</p>
                    <p>Data de publicação: {vacancy.postDate}</p>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
        {userData.company ? (
          <></>
        ) : (
          <h1 className="text-3xl font-serif font-bold self-center pt-10 pb-3">
            Vagas Aplicadas:
          </h1>
        )}
        <div className="pt-2 grid grid-cols-3 ">
          {applyList.map((vacancy, index) => (
            <div className="bg-azul-100 pt-5 flex flex-col pr-3" key={index}>
              <Link to={`/vacancieDetails/${vacancy.ID}`}>
                <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-blue-600 rounded-xl shadow-md shadow-black p-3 mb-2">
                  {vacancy.title}
                </h1>
                <div className="bg-white rounded-xl text-base font-serif font-bold px-9 py-4 shadow-sm shadow-black">
                  <p> {vacancy.description}</p>
                  <p> Cidade: {vacancy.location}</p>
                  <p> Categorias: {vacancy.filters}</p>
                  <p> Salário: {vacancy.salary}</p>
                  <p>Data de publicação: {vacancy.postDate}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
