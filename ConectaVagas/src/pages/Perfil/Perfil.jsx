import { useState, useRef, useContext, useEffect, useMemo } from "react";
import {
  BsCalendarDate,
  BsFillGeoAltFill,
  BsStack,
  BsGithub,
} from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import {
  MdOutlineAttachMoney,
  MdDriveFileRenameOutline,
  MdOutlineDescription,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import { AuthContext } from "../../components/Context/AuthContext";
import Header from "../../components/Header/Header";

export default function Profile() {
  const { applyList, vacancyLoadApplications, socialMediaList, vacanciesList } =
    useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);
  const [imagem, setImagem] = useState(null);

  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formatedDate = createDate.toLocaleDateString("pt-BR", format);
    return formatedDate;
  };

  useEffect(() => {
    vacancyLoadApplications();
  }, []);
  console.log(applyList);
  console.log(socialMediaList);
  return (
    <>
      <Header />
      <div className="bg-azul-100   flex flex-col  min-h-[calc(100vh-64px)]  items-center ">
        <div className="bg-gray-200  px-8 flex flex-col justify-center items-center shadow-md shadow-black rounded-lg w-5/6 mt-10">
          <h1 className="py-6 text-3xl font-sans font-bold self-center text-black">
            Meu Perfil
          </h1>
          <div className="pt-5 flex self-start">
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
                <div>
                  {userData.company ? (
                    <></>
                  ) : (
                    <Link
                      to={`https://www.linkedin.com/in/${socialMediaList?.linkedin}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div>
                        <FaLinkedin size={20} className="absolute" />
                        <h3 className="px-6">
                          Linkedin: {socialMediaList?.linkedin}
                        </h3>
                      </div>
                    </Link>
                  )}
                </div>
                {/* <div>
                <AiOutlineInstagram size={20} className="absolute" />
                <h3 className="px-6">Instagram: </h3>
              </div> */}
                <div>
                  {userData.company ? (
                    <></>
                  ) : (
                    <Link
                      to={`https://github.com/${socialMediaList?.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div>
                        <BsGithub size={20} className="absolute" />
                        <h3 className="px-6">
                          GitHub: {socialMediaList?.github}
                        </h3>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          {userData.company ? (
            <>
              <Link to="/jobregister">
                <span className="text-3xl font-sans font-bold text-black  ">
                  Cadastrar Vaga
                </span>
              </Link>
              <h1 className="text-3xl font-sans font-bold self-center pt-10 pb-3">
                Vagas Criadas:
              </h1>
              <div className="pt-2 grid grid-cols-4 w-full ">
                {vacanciesList.map((vacancy, index) => (
                  <div className="pt-5 pb-5  flex flex-col pr-3" key={index}>
                    <Link to={`/vacancieDetails/${vacancy.ID}`}>
                      <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 rounded-md shadow-md  shadow-black p-3 mb-1">
                        {vacancy.title}
                      </h1>
                      <div className="bg-white rounded-xl text-base font-sans font-bold px-5 py-4 shadow-md shadow-black">
                        <div className="pb-2 pt-2">
                          <MdOutlineDescription
                            size={18}
                            className="absolute"
                          />
                          <p className="px-6 "> {vacancy.description}</p>
                        </div>
                        <div className="pb-2">
                          <BsFillGeoAltFill size={18} className="absolute" />
                          <p className="px-6">{vacancy.location}</p>
                        </div>
                        {vacancy.tags.map((tag) => (
                          <div className="pb-2">
                            <BsStack size={18} className="absolute" />
                            <div className="flex">
                              <p className="px-6">{tag.title}</p>
                            </div>
                          </div>
                        ))}
                        <div className="pb-2">
                          <MdOutlineAttachMoney
                            size={20}
                            className="absolute"
                          />
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
            </>
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
                    <div className="pb-2 pt-2">
                      <MdOutlineDescription size={18} className="absolute" />
                      <p className="px-6 "> {vacancy.description}</p>
                    </div>
                    <div className="pb-2">
                      <BsFillGeoAltFill size={18} className="absolute" />
                      <p className="px-6">{vacancy.location}</p>
                    </div>
                    {vacancy.tags.map((tag) => (
                      <div className="pb-2">
                        <BsStack size={18} className="absolute" />
                        <div className="flex">
                          <p className="px-6">{tag.title}</p>
                        </div>
                      </div>
                    ))}
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
