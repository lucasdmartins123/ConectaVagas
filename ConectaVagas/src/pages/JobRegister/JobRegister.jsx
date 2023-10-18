import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";
import { useContext, useState } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";
import Tags from "../../components/Tags/Tags";

export default function JobRegister() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState("");
  const [salary, setSalary] = useState("");
  const [postDate, setPostDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [internshipType, setinternshipType] = useState("");
  const [requirements, setRequirements] = useState("");
  const [benefits, setBenefits] = useState("");
  const { vacanciesRegister } = useContext(CompaniesContext);
  const { userData } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !location ||
      !salary ||
      !filters ||
      !postDate ||
      !endDate
    ) {
      alert("preencha todos os campos");
    }
    if (salary < 0) {
      return alert("salario nao pode ser negativo");
    }
    if (endDate < postDate) {
      return alert("a data de término nao pode ser menor");
    }

    const newVacancie = {
      title,
      description,
      location,
      filters,
      salary,
      postDate,
      endDate,
      userId: userData.id,
    };
    vacanciesRegister(newVacancie);
  }

  return (
    <>
      <Header />
      <div className="bg-azul-100  h-screen flex justify-center items-center">
        <form
          className="w-2/3 h-5/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-4 pt-5">
              Cadastre sua Vaga
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <label className="pb-3 text-xl font-serif font-bold">
                Titulo:
              </label>
              <input
                type="text"
                className="w-1/2 p-2  shadow-md  shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4  "
                placeholder="Digite um titulo "
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              ></input>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="pt-6 pb-3 text-xl font-serif font-bold">
                Descrição:
              </label>
              <input
                type="text"
                className="w-1/2 p-3 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                placeholder="Digite uma descrição"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></input>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="pt-6 pb-3 text-xl font-serif font-bold">
                Cidade:
              </label>
              <input
                type="text"
                className="w-1/2 p-2 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                placeholder="Digite uma cidade"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              ></input>
            </div>
            {/*<div className="flex flex-col justify-center items-center">
              <label className="pt-6 pb-3 text-xl font-serif font-bold">
                Tags:
              </label>
              <select
                className="w-1/2 p-2 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                value={filters}
                onChange={(e) => setFilters(e.target.value)}
              >
                <option value="select">Selecionar</option>
                <option value="JAVA">Java</option>
                <option value="MYSQL">MYSQL</option>
                <option value="BACKEND">Back-End</option>
                <option value="FRONTEND">Front-End</option>
                <option value="SPRINGBOOT">Spring Boot</option>
              </select>
  </div>*/}
            <Tags setFilters={setFilters} filters={filters} />
            <div className="flex flex-col justify-center items-center">
              <label className="pt-6 pb-3 text-xl font-serif font-bold">
                Salário:
              </label>
              <input
                type="text"
                className="w-1/2 p-2 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                placeholder="Digite o salário"
                onChange={(e) => setSalary(e.target.value)}
                value={salary}
              ></input>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col pr-10">
                <label className="pt-6 pb-3 text-xl font-serif font-bold">
                  Data de Publicação:
                </label>
                <input
                  type="date"
                  className="w-full p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setPostDate(e.target.value)}
                  value={postDate}
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="pt-6 pb-3 text-xl font-serif font-bold">
                  Data de Término:
                </label>
                <input
                  type="date"
                  className="w-full p-2 shadow-md shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                ></input>
              </div>
            </div>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-9">
              <button
                type={"submit"}
                className="py-5 px-12 rounded-xl bg-azul-100  text-xl font-serif font-semibold text-black uppercase hover:ring-4"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
