import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Begin() {
  return (
    <>
      <div className="bg-azul-100  h-screen flex justify-center items-center">
        <form className="w-1/3 h-1/2 rounded-xl bg-white shadow-xl shadow-black	flex flex-col max-sm:w-5/6 max-sm:h-5/6">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-5 pt-10 max-sm:pl-12 ">
              Bem-Vindo ao ConectaVagas
            </h1>
            <span className="text-xl font-serif text-black self-center max-sm:pl-6">
              Encontre aqui a vaga dos seus sonhos
            </span>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-9">
              <Link to="/login">
                <button className="py-5 px-16 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-12">
                  Acessar Conta
                </button>
              </Link>
            </div>
            <div className="pt-9">
              <Link to="/registerCompany">
                <button className="py-5 px-16 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-12">
                  Criar Empresa
                </button>
              </Link>
            </div>
            <div className="pt-9">
              <Link to="/registerPerson">
                <button className="py-5 px-16 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:px-12">
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
