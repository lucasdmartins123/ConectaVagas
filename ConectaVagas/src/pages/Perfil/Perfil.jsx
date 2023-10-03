import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Profile() {
  const { userData } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50  flex flex-col justify-center items-center">
        <h1 className="text-3xl font-serif font-bold self-center pt-10">
          Minhas Vagas:
        </h1>
      </div>
    </>
  );
}
