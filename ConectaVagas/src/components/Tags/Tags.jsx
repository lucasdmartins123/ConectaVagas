import React from "react";
import { useState } from "react";

export default function Tags({ setFilters, filters }) {
  const selectFilter = (filter) => {
    setFilters(filter);
  };

  return (
    <div className="flex justify-center items-center pt-5">
      <ul className="flex items-center gap-4">
        <li>
          <button
            type="button"
            onClick={() => selectFilter("JAVA")}
            className={`w-full py-4 px-4 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-4 border-2 ${
              filters === "JAVA"
                ? "bg-azul-100 border-black  "
                : "bg-white border-azul-100 "
            }`}
          >
            Java
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => selectFilter("MYSQL")}
            className={`w-full py-4 px-4 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-4 border-2 ${
              filters === "MYSQL"
                ? "bg-azul-100 border-black  "
                : "bg-white border-azul-100 "
            }`}
          >
            MYSQL
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => selectFilter("BACKEND")}
            className={`w-full py-4 px-4 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-4 border-2 ${
              filters === "BACKEND"
                ? "bg-azul-100 border-black  "
                : "bg-white border-azul-100 "
            }`}
          >
            Back-End
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => selectFilter("FRONTEND")}
            className={`w-full py-4 px-4 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-4 border-2 ${
              filters === "FRONTEND"
                ? "bg-azul-100 border-black"
                : "bg-white border-azul-100 "
            }`}
          >
            Front-End
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => selectFilter("SPRINGBOOT")}
            className={`w-full py-4 px-4 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-4  border-2 ${
              filters === "SPRINGBOOT"
                ? "bg-azul-100 border-black  "
                : "bg-white border-azul-100 "
            }`}
          >
            Spring Boot
          </button>
        </li>
      </ul>
    </div>
  );
}
