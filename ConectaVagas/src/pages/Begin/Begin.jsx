import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Begin() {
  return (
    <>
      <div className="m1-6 bg-azul-100 opacity-100 h-screen flex justify-center items-center">
        <form className=" w-5/6 lg:w-4/6 xl:w-3/6 2xl:h-3/5 2xl:w-3/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-md sm:text-2xl  md:text-2xl lg:text-3xl font-serif font-bold text-black pb-5 pt-10">
              Bem-Vindo ao ConectaVagas!
            </h1>

            <span className="text-l md:text-2xl lg:text-2xl 2xl:text-2xl font-serif text-black self-center">
              Encontre aqui a vaga dos seus sonhos
            </span>
          </div>

          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-9">
              <Link to="/login">
                <button className="py-5 px-16 2xl:py-6 2xl:px-40 2xl:mt-4 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-8">
                  Acessar Conta
                </button>
              </Link>
            </div>
            <div className="pt-9">
              <Link to="/registerCompany">
                <button className="py-5 px-16 2xl:py-6 2xl:px-40 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-8">
                  Criar Empresa
                </button>
              </Link>
            </div>
            <div className="pt-9">
              <Link to="/registerPerson">
                <button className="py-5 px-16 2xl:py-6 2xl:px-40 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-8">
                  Criar Usuário
                </button>
              </Link>
              <></>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
