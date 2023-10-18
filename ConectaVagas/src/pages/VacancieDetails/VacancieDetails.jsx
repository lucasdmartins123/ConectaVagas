import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../components/Context/AuthContext";
import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

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
  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };

    const formatedDate = createDate.toLocaleDateString("pt-BR", format);

    return formatedDate;
  };
  return (
    <>
      <Header />
      <div className="bg-azul-100  h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-200 p-20 flex flex-col justify-center items-center rounded-md w-5/6 h-5/6">
          <h2 className="pb-6 font-sans text-white text-xl bg-sky-500 p-3 mb-1 rounded-md shadow-md shadow-black w-2/3 flex justify-center">
            {vacancieDetails.title}{" "}
          </h2>
          <form className=" rounded-xl bg-white shadow-xl shadow-black	flex flex-col items-center px-8 py-8 w-2/3">
            <div className="text-2xl font-serif font-bold text-black self-center">
              <p className="pb-3 pt-3"> {vacancieDetails.description}</p>
              <div className="pb-2 pt-2">
                <BsFillGeoAltFill size={18} className="absolute" />
                <p className="px-6">{vacancieDetails.location}</p>
              </div>
              <div className="pb-2 pt-2">
                <BsStack size={18} className="absolute" />
                <p className="px-6">{vacancieDetails.filters}</p>
              </div>
              <div className="pb-2 pt-2">
                <MdOutlineAttachMoney size={20} className="absolute" />
                <p className="px-6">
                  {vacancieDetails.salary.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div className="pb-2 pt-2">
                <BsCalendarDate size={18} className="absolute" />
                <p className="px-6">{formatDate(vacancieDetails.postDate)}</p>
              </div>
              <div className="pb-2 pt-2">
                <BsCalendarDate size={18} className="absolute" />
                <p className="px-6">{formatDate(vacancieDetails.endDate)}</p>
              </div>
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
      </div>
    </>
  );
}
