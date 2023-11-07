import React, { useContext, useState } from "react";
import { CompaniesContext } from "../Context/CompaniesContext";

export default function Filter({ filters, showFilters }) {
  const { handleFilter, tags } = useContext(CompaniesContext);
  const [filtersList, setFiltersList] = useState([]);

  const selectFilter = (filter) => {
    if (filter === "ALL") {
      setFiltersList([]);
      handleFilter([]);
      return;
    }
    const verify = filtersList.find((id) => id === filter);
    if (verify) {
      const remove = filtersList.filter((id) => id !== filter);
      setFiltersList(remove);
      handleFilter(remove);
    } else {
      const add = [...filtersList, filter];
      setFiltersList(add);
      handleFilter(add);
    }
  };

  return (
    <div
      className={`absolute p-4 rounded-md bg-white shadow-lg -right-10 top-10 z-10 ${
        showFilters ? "block" : "hidden"
      }`}
    >
      <ul className="grid grid-cols-2 w-72 items-center gap-4">
        <li>
          <button
            type="button"
            onClick={() => selectFilter("ALL")}
            className={`w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
              filters === "ALL"
                ? "bg-azul-100 border-black  "
                : "bg-white border-azul-100 "
            }`}
          >
            Todos
          </button>
        </li>
        {tags?.map((tag) => (
          <li key={tag.id}>
            <button
              type="button"
              onClick={() => selectFilter(tag.title)}
              className={`w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
                filters?.includes(tag.id)
                  ? "bg-azul-100 border-black  "
                  : "bg-white border-azul-100 "
              }`}
            >
              {tag.title}
            </button>
          </li>
        ))}

        {/*<li>
          <button
            type="button"
            onClick={() => handleFilter("JAVA")}
            className={`w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
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
            onClick={() => handleFilter("MYSQL")}
            className={`w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
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
            onClick={() => handleFilter("BACKEND")}
            className={`w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
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
            onClick={() => handleFilter("FRONTEND")}
            className={` w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
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
            onClick={() => handleFilter("SPRINGBOOT")}
            className={`w-full py-2 px-2 rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-2 hover:bg-azul-100 border-2 ${
              filters === "SPRINGBOOT"
                ? "bg-azul-100 border-black  "
                : "bg-white border-azul-100 "
            }`}
          >
            Spring Boot
          </button>
          </li>*/}
      </ul>
    </div>
  );
}
