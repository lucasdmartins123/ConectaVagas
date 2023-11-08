import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../components/Context/AuthContext";
import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney, MdOutlineDescription } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

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
      <div className="bg-azul-100  min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
        <div className="bg-gray-200 w-5/6 h-5/6 md:h-5/6 md:w-4/6 2xl:w-3/6 2xl:h-full p-18 sm:p-10 md:p-10 xl:p-10 2xl:p-10 flex flex-col justify-center items-center rounded-md ">
          <h2 className="pb-2 font-sans text-white text-2xl bg-azul-100 p-2 mb-1 rounded-md shadow-md shadow-black flex justify-center w-5/6">
            {vacancieDetails.title}{" "}
          </h2>
          <form className=" rounded-xl bg-white shadow-md shadow-black	flex flex-col  px-6 py-2 w-5/6 h-5/6 ">
            <div className="text-lg xl:text-2xl font-serif font-bold text-black">
              <div className="flex justify-between pt-5">
                <MdOutlineDescription size={20} className="absolute" />
                <p className="px-6">{vacancieDetails.description}</p>
                <div>
                  <Link to="/home">
                    <AiOutlineClose size={40} className="relative" />
                  </Link>
                </div>
              </div>
              <div className="py-2 xl:py-3">
                <BsFillGeoAltFill size={20} className="absolute" />
                <p className="px-6">{vacancieDetails.location}</p>
              </div>
              {vacancieDetails.tags.map((tag) => (
                <div className="py-2 xl:py-3">
                  <BsStack size={18} className="absolute" />
                  <div className="flex">
                    <p className="px-6">{tag.title}</p>
                  </div>
                </div>
              ))}
              <div className="py-2 xl:py-3">
                <MdOutlineAttachMoney size={20} className="absolute" />
                <p className="px-6">{vacancieDetails.salary}</p>
              </div>
              <div className="py-2 xl:py-3">
                <BsCalendarDate size={20} className="absolute" />
                <p className="px-6">
                  Data de Publicação: {formatDate(vacancieDetails.postDate)}
                </p>
              </div>
              <div className="py-2 xl:py-3">
                <BsCalendarDate size={20} className="absolute" />
                <p className="px-6">
                  {" "}
                  Data de Término: {formatDate(vacancieDetails.endDate)}
                </p>
              </div>
            </div>
            {userData.company ? (
              <></>
            ) : (
              <div className="flex items-center justify-center">
                {isApply ? (
                  <button
                    type="button"
                    onClick={handleQuitToVacancy}
                    className="m-10 pb-5 px-12 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 "
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
                <div className="flex justify-between pt-8 md:pt-5">
                  <span className="text-lg font-serif font-bold self-center text-black-700 px-5 py-5 rounded-xl bg-azul-100  text-white mx-5 ">
                    <Link to={`/JobEdit/${vacancieDetails.ID}`}>Editar</Link>
                  </span>

                  <span
                    onClick={handleDelete}
                    className="text-lg  font-serif font-bold self-center rounded-xl px-5 py-5  bg-red-500 text-white cursor-pointer"
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
