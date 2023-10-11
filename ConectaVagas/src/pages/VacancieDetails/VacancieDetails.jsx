import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../components/Context/AuthContext";

export default function VacancieDetails() {
  const { id } = useParams();
  const params = useParams();
  console.log(params);
  const {
    LoadVacanciesDetails,
    vacancieDetails,
    vacancieDelete,
    vacancyApply,
    vacancyLoadApplications,
    applyList,
    vacancyQuit,
  } = useContext(CompaniesContext);

  const [isApply, setIsApply] = useState(false);

  function handleAddToVacancy() {
    if (isApply) return;
    vacancyApply(id);
    alert("Vaga adicionada a aplicações");
  }

  function handleQuitToVacancy() {
    vacancyQuit(id);
    alert("Vaga removida das aplicações");
  }

  useEffect(() => {
    const apply = applyList.filter((vacancy) => vacancy.ID == id);
    if (apply.length > 0) {
      setIsApply(true);
    } else {
      setIsApply(false);
    }
  }, [id, applyList]);

  function handleDelete() {
    vacancieDelete(id);
  }

  useEffect(() => {
    LoadVacanciesDetails(id);
  }, [id]);

  useEffect(() => {
    vacancyLoadApplications();
  }, []);

  const { userData } = useContext(AuthContext);
  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form className="w-1/3 h-2/3 rounded-xl bg-white shadow-xl shadow-black	flex flex-col items-center ">
          <div className="text-2xl font-serif font-bold text-black self-center pt-20">
            <h2>Título: {vacancieDetails.title} </h2>
            <h2 className=" pt-6">Descrição: {vacancieDetails.description}</h2>
            <h2 className=" pt-6">Localização: {vacancieDetails.location}</h2>
            <h2 className=" pt-6">Categorias: {vacancieDetails.filters}</h2>
            <h2 className=" pt-6">Salario: {vacancieDetails.salary}</h2>
            <h2 className=" pt-6">
              Data de inicio: {vacancieDetails.postDate}
            </h2>
            <h2 className=" pt-6">Data de fim: {vacancieDetails.endDate}</h2>
          </div>
          {userData.company ? (
            <></>
          ) : (
            <div>
              {isApply ? (
                <button
                  type="button"
                  onClick={handleQuitToVacancy}
                  className="m-10 py-5 px-12 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 "
                >
                  Desistir da vaga
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAddToVacancy}
                  className="m-10 py-5 px-12 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 "
                >
                  Aplicar
                </button>
              )}
            </div>
          )}
          <div>
            {userData.company ? (
              <div className="flex justify-between pt-14">
                <span className="text-lg font-serif font-bold self-center text-black-700 px-5 py-5 rounded-xl bg-azul-100  text-white mx-5 ">
                  <Link to={`/JobEdit/${vacancieDetails.ID}`}>Editar</Link>
                </span>

                <span
                  onClick={handleDelete}
                  className="text-lg font-serif font-bold self-center rounded-xl px-5 py-5  bg-red-500 text-white cursor-pointer"
                >
                  Deletar
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
