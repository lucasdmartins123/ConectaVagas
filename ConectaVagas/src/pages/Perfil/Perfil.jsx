import { useState, useRef, useContext, useEffect, useMemo } from "react";
import {
  BsCalendarDate,
  BsFillGeoAltFill,
  BsStack,
  BsGithub,
} from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { MdOutlineAttachMoney, MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Profile() {
  const { applyList, vacancyLoadApplications } = useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);
  const [imagem, setImagem] = useState(null);

  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formatedDate = createDate.toLocaleDateString("pt-BR", format);
    return formatedDate;
  };

  const selecionarArquivo = (evento) => {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0]);
    } else {
      setImagem(null);
    }
  };

  useEffect(() => {
    vacancyLoadApplications();
  }, []);
  console.log(applyList);
  return (
    <>
      <Header />
      <div className="bg-azul-100   flex flex-col  min-h-[calc(100vh-64px)]  items-center ">
        <div className="bg-gray-200  px-8 flex flex-col justify-center items-center shadow-md shadow-black rounded-lg w-5/6 mt-10">
          <h1 className="py-6 text-3xl font-sans font-bold self-center text-black">
            Meu Perfil
          </h1>
          <div className="pt-5 flex self-start">
            <div className="px-20 self-end">
              <input type="file" onChange={selecionarArquivo}></input>
            </div>
            <div className="text-xl font-sans font-normal self-center text-black">
              <div>
                <MdDriveFileRenameOutline size={20} className="absolute" />
                <h3 className="px-6">Nome completo: {userData?.name}</h3>
              </div>
              <div>
                <AiOutlineMail size={20} className="absolute" />
                <h3 className="px-6">Email: {userData?.email}</h3>
              </div>
              <div>
                <AiFillLinkedin size={20} className="absolute" />
                <h3 className="px-6">Linkedin: </h3>
              </div>
              <div>
                <AiOutlineInstagram size={20} className="absolute" />
                <h3 className="px-6">Instagram: </h3>
              </div>
              <div>
                <BsGithub size={20} className="absolute" />
                <h3 className="px-6">GitHub: </h3>
              </div>
            </div>
          </div>
          {userData.company ? (
            <></>
          ) : (
            <h1 className="text-3xl font-sans font-bold self-center pt-10 pb-3">
              Vagas Aplicadas:
            </h1>
          )}
          <div className="pt-2 grid grid-cols-4 w-full ">
            {applyList.map((vacancy, index) => (
              <div className="pt-5 pb-5  flex flex-col pr-3" key={index}>
                <Link to={`/vacancieDetails/${vacancy.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 rounded-md shadow-md  shadow-black p-3 mb-1">
                    {vacancy.title}
                  </h1>
                  <div className="bg-white rounded-xl text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                    <p className="px-1 pb-2"> {vacancy.description}</p>
                    <div className="pb-2 pt-2">
                      <BsFillGeoAltFill size={18} className="absolute" />
                      <p className="px-6">{vacancy.location}</p>
                    </div>
                    <div className="pb-2">
                      <BsStack size={18} className="absolute" />
                      <p className="px-6">{vacancy.filters}</p>
                    </div>
                    <div className="pb-2">
                      <MdOutlineAttachMoney size={20} className="absolute" />
                      <p className="px-6">
                        {vacancy.salary.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                    <div>
                      <BsCalendarDate size={18} className="absolute" />
                      <p className="px-6">{formatDate(vacancy.postDate)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
