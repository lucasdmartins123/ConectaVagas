import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";
import { useContext, useState } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";

export default function JobRegister() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState("");
  const [salary, setSalary] = useState("");
  const { companiesRegister, vacanciesRegister, dbLoading } =
    useContext(CompaniesContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description || !location || !salary) {
      alert("preencha todos os campos");
    }
    const newVacancie = {
      title,
      description,
      location,
      filters,
      salary,
    };
    vacanciesRegister(newVacancie);
  }

  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form
          className="w-1/2 h-5/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-8 pt-10">
              Cadastre sua Vaga
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 text-xl font-serif font-bold">Titulo:</label>
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
              className="w-1/2 p-2 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
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
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              tags:
            </label>
            <input
              type="text"
              className="w-1/2 p-2 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
              placeholder="Digite uma cidade"
              onChange={(e) => setFilters(e.target.value)}
              value={filters}
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              Salário:
            </label>
            <input
              type="text"
              className="w-1/2 p-2 shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4"
              placeholder="Digite uma descrição"
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            ></input>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-14">
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
