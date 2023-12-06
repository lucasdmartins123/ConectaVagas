import { useState, useRef, useContext, useEffect, useMemo } from "react";
import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney, MdOutlineDescription } from "react-icons/md";
import { Link } from "react-router-dom";

import { CompaniesContext } from "../../components/Context/CompaniesContext";

import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Home() {
  const {
    notifications,
    vacanciesList,
    applyList,
    handleFilter,
    setEmpty,
    setFilter,
    empty,
    filter,
    vacancyLoadApplications,
  } = useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);

  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };

    const formatedDate = createDate.toLocaleDateString("pt-BR", format);

    return formatedDate;
  };

  useEffect(() => {
    vacancyLoadApplications();

    console.log(notifications);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-azul-100  flex flex-col items-center min-h-[calc(100vh-64px)]">
        <div className="bg-gray-200 mt-6 mb-6 px-8 flex flex-col justify-center items-center shadow-md shadow-black rounded-lg w-2/3 ">
          <div className="flex flex-col pt-5">
            {userData.company ? (
              <>
                <h1 className="text-3xl font-sans font-bold self-center pt-5 text-black ">
                  Vagas Criadas:
                </h1>
              </>
            ) : (
              <h1 className="text-3xl font-sans font-bold self-center pt-2 text-black ">
                Para Você:
              </h1>
            )}
          </div>
          <div className="pt-2 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-xl:grid-cols-2 w-full ">
            {console.log("notifications", typeof notifications, notifications)}
            {notifications.map((notification, index) => (
              <div className="pt-5 pb-5  flex flex-col pr-3" key={index}>
                <Link to={`/vacancieDetails/${notification.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 rounded-sm shadow-md  shadow-black p-3 mb-1">
                    {notification.title}
                  </h1>
                  <div className="bg-white rounded-sm text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                    <div className="pb-2 pt-2">
                      <MdOutlineDescription size={18} className="absolute" />
                      <p className="px-6 "> {notification.description}</p>
                    </div>
                    <div className="pb-2">
                      <BsFillGeoAltFill size={18} className="absolute" />
                      <p className="px-6">{notification.location}</p>
                    </div>
                    {notification.tags.map((tag) => (
                      <div className="pb-2">
                        <BsStack size={18} className="absolute" />
                        <div className="flex">
                          <p className="px-6">{notification.title}</p>
                        </div>
                      </div>
                    ))}
                    <div className="pb-2">
                      <MdOutlineAttachMoney size={20} className="absolute" />
                      <p className="px-6">
                        {notification.salary.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                    <div>
                      <BsCalendarDate size={18} className="absolute" />
                      <p className="px-6">
                        {formatDate(notification.postDate)}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {userData.company ? (
            <></>
          ) : (
            <h1 className="text-3xl font-sans font-bold self-center pt-10 text-black ">
              Oportunidade de Vagas:
            </h1>
          )}
          <div className="pt-2 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-xl:grid-cols-2 w-full ">
            {/* {empty === true ? (
              <p className="text-3xl font-sans font-bold self-center text-black py-7">
                Nenhuma vaga dessa categoria no momento
              </p>
            ) : filter.length > 0 ? (
              filter.map((vacancy, index) => (
                <div className=" pt-4 pb-4 flex flex-col pr-3" key={index}>
                  <Link to={`/vacancieDetails/${vacancy.ID}`}>
                    <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 p-3 mb-1 rounded-md shadow-md shadow-black">
                      {vacancy.title}
                    </h1>
                    <div className="bg-white rounded-md text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                      <div className="pb-2 pt-2">
                        <MdOutlineDescription size={18} className="absolute" />
                        <p className="px-6 "> {vacancy.description}</p>
                      </div>
                      <div className="pb-2">
                        <BsFillGeoAltFill size={18} className="absolute" />
                        <p className="px-6">{vacancy.location}</p>
                      </div>
                      {vacancy.tags.map((tag) => (
                        <div className="pb-2">
                          <BsStack size={18} className="absolute" />
                          <div className="flex">
                            <p className="px-6">{tag.title}</p>
                          </div>
                        </div>
                      ))}
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
            ) : ( */}
            {vacanciesList.map((vacancy, index) => (
              <div className="pt-4 pb-4 flex flex-col pr-3 " key={index}>
                <Link to={`/vacancieDetails/${vacancy.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 p-3 mb-1 rounded-sm shadow-md shadow-black">
                    {vacancy.title}
                  </h1>
                  <div className="bg-white rounded-sm text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                    <div className="pb-2 pt-2">
                      <MdOutlineDescription size={18} className="absolute" />
                      <p className="px-6 "> {vacancy.description}</p>
                    </div>
                    <div className="pb-2">
                      <BsFillGeoAltFill size={18} className="absolute" />
                      <p className="px-6">{vacancy.location}</p>
                    </div>
                    {vacancy.tags.map((tag) => (
                      <div className="pb-2">
                        <BsStack size={18} className="absolute" />
                        <div className="flex">
                          <p className="px-6">{tag.title}</p>
                        </div>
                      </div>
                    ))}
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
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
}
