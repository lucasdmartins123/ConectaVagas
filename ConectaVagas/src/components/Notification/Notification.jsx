import { Link } from "react-router-dom";
import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { CompaniesContext } from "../../components/Context/CompaniesContext";
import { AuthContext } from "../../components/Context/AuthContext";

export default function Notification({ showNotification }) {
  const { vacanciesList } = useContext(CompaniesContext);
  return (
    <>
      <div
        className={`absolute p-4 rounded-md bg-white shadow-lg -right-12 top-10 z-10 ${
          showNotification ? "block" : "hidden"
        }`}
      >
        {" "}
        <div className="flex flex-col ">
          {vacanciesList.map((vacancy, index) => (
            <div className="pt-5 pb-5  flex flex-col pr-3" key={index}>
              <Link to={`/vacancieDetails/${vacancy.ID}`}>
                <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 rounded-md shadow-md  shadow-black p-3 mb-1">
                  {vacancy.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
