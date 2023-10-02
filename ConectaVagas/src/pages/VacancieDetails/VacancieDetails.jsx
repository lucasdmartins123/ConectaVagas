import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";

export default function VacancieDetails() {
  const { id } = useParams();
  const context = useContext(CompaniesContext);
  const { LoadVacanciesDetails, vacancieDetails } =
    useContext(CompaniesContext);

  useEffect(() => {
    LoadVacanciesDetails(id);
  }, [id]);

  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form className="w-1/3 h-2/3 rounded-xl bg-white shadow-xl shadow-black	flex flex-col items-center ">
          <div className="text-2xl font-serif font-bold text-black self-center pt-10">
            <h2>Título: {vacancieDetails.title} </h2>
            <h2 className=" pt-6">Descrição: {vacancieDetails.description}</h2>
            <h2 className=" pt-6">Localização: {vacancieDetails.location}</h2>
            <h2 className=" pt-6">Salario: {vacancieDetails.salary}</h2>
          </div>
          <button
            type={"submit"}
            className="m-10 py-5 px-12 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 "
          >
            Aplicar
          </button>
        </form>
      </div>
    </>
  );
}
