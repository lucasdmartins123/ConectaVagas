import React, { useContext } from "react";
import { CompaniesContext } from "../Context/CompaniesContext";

export default function Tags({ setFilters, filters }) {
  const { tags } = useContext(CompaniesContext);

  const selectFilter = (filter) => {
    const verify = filters.find((id) => id === filter);
    if (verify) {
      const remove = filters.filter((id) => id !== filter);
      setFilters(remove);
    } else {
      const add = [...filters, filter];
      setFilters(add);
    }
  };

  return (
    <div className="flex justify-center items-center pt-5">
      <ul className="flex items-center gap-4">
        {tags?.map((tag) => (
          <li key={tag.id}>
            <button
              type="button"
              onClick={() => selectFilter(tag.id)}
              className={`w-24 py-5  rounded-lg  text-sm font-serif font-semibold text-black uppercase hover:ring-4 border-2 ${
                filters.includes(tag.id)
                  ? "bg-azul-100 border-black  "
                  : "bg-white border-azul-100 "
              }`}
            >
              {tag.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
