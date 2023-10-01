import React from "react";
import { useState } from "react";

export default function Tags({ toggleTagSelection, selectedTags }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex">
      <ul>
        <li
          onClick={() => toggleTagSelection("Java")}
          className={`p-3 rounded-xl text-base font-serif font-bold cursor-pointer border-2 border-black shadow-md shadow-black
                    ${
                      selectedTags.includes("Java") ? "bg-azul-100" : "bg-white"
                    }`}
        >
          Java
        </li>
      </ul>
    </div>
  );
}
