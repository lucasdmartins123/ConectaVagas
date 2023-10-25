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

  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };

    const formatedDate = createDate.toLocaleDateString("pt-BR", format);

    return formatedDate;
  };

  useEffect(() => {
    vacancyLoadApplications();
  }, []);
  console.log(applyList);
  return (
    <>
      <Header />
      <div className="bg-azul-100  flex flex-col items-center min-h-[calc(100vh-64px)]">
        <div className="bg-gray-200 mt-6 mb-6 px-8 flex flex-col justify-center items-center shadow-md shadow-black rounded-lg">
          <div className="flex flex-col pt-5">
            {userData.company ? (
              <>
                <Link to="/jobregister">
                  <span className="text-3xl font-sans font-bold self-center text-black  ">
                    Cadastrar Vaga
                  </span>
                </Link>
                <h1 className="text-3xl font-sans font-bold self-center pt-5 text-black ">
                  Vagas Criadas:
                </h1>
              </>
            ) : (
              <h1 className="text-3xl font-sans font-bold self-center pt-10 text-black ">
                Oportunidades de Vagas:
              </h1>
            )}
          </div>

          <div className="pt-2 grid grid-cols-3 w-full ">
            {empty === true ? (
              <p>Nenhuma vaga dessa categoria</p>
            ) : filter.length > 0 ? (
              filter.map((vacancy, index) => (
                <div className=" pt-4 pb-4 flex flex-col pr-3" key={index}>
                  <Link to={`/vacancieDetails/${vacancy.ID}`}>
                    <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 p-3 mb-1 rounded-md shadow-md shadow-black">
                      {vacancy.title}
                    </h1>
                    <div className="bg-white rounded-md text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                      <p className="px-1 pb-2"> {vacancy.description}</p>
                      <div className="pb-2 pt-2">
                        <BsFillGeoAltFill size={18} className="absolute" />
                        <p className="px-6">{vacancy.location}</p>
                      </div>
                      <div className="pb-2">
                        <BsStack size={18} className="absolute" />
                        <p className="px-6">{vacancy.filters}</p>
                      </div>
                      <div className="pb-2">
                        <MdOutlineAttachMoney size={20} className="absolute" />
                        <p className="px-6">
                          {vacancy.salary.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                      <div>
                        <BsCalendarDate size={18} className="absolute" />
                        <p className="px-6">{formatDate(vacancy.postDate)}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              vacanciesList.map((vacancy, index) => (
                <div className="pt-4 pb-4 flex flex-col pr-3 " key={index}>
                  <Link to={`/vacancieDetails/${vacancy.ID}`}>
                    <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 p-3 mb-1 rounded-sm shadow-md shadow-black">
                      {vacancy.title}
                    </h1>
                    <div className="bg-white rounded-sm text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                      <p className="px-1 pb-2"> {vacancy.description}</p>
                      <div className="pb-2 pt-2">
                        <BsFillGeoAltFill size={18} className="absolute" />
                        <p className="px-6">{vacancy.location}</p>
                      </div>
                      <div className="pb-2">
                        <BsStack size={18} className="absolute" />
                        <p className="px-6">{vacancy.filters}</p>
                      </div>
                      <div className="pb-2">
                        <MdOutlineAttachMoney size={20} className="absolute" />
                        <p className="px-6">
                          {vacancy.salary.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                      <div>
                        <BsCalendarDate size={18} className="absolute" />
                        <p className="px-6">{formatDate(vacancy.postDate)}</p>
                      </div>
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
          <div className="pt-2 grid grid-cols-3 w-full ">
            {applyList.map((vacancy, index) => (
              <div className="pt-5 pb-5  flex flex-col pr-3" key={index}>
                <Link to={`/vacancieDetails/${vacancy.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 rounded-md shadow-md  shadow-black p-3 mb-1">
                    {vacancy.title}
                  </h1>
                  <div className="bg-white rounded-xl text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                    <p className="px-1 pb-2"> {vacancy.description}</p>
                    <div className="pb-2 pt-2">
                      <BsFillGeoAltFill size={18} className="absolute" />
                      <p className="px-6">{vacancy.location}</p>
                    </div>
                    <div className="pb-2">
                      <BsStack size={18} className="absolute" />
                      <p className="px-6">{vacancy.filters}</p>
                    </div>
                    <div className="pb-2">
                      <MdOutlineAttachMoney size={20} className="absolute" />
                      <p className="px-6">
                        {vacancy.salary.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                    <div>
                      <BsCalendarDate size={18} className="absolute" />
                      <p className="px-6">{formatDate(vacancy.postDate)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
