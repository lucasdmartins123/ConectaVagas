import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Begin() {
  return (
    <>
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form className="w-1/3 h-1/2 rounded-xl bg-white shadow-xl shadow-black	flex flex-col ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-5 pt-10">
              Bem-Vindo ao ConectaVagas
            </h1>
            <span className="text-xl font-serif text-black self-center">
              Encontre aqui a vaga dos seus sonhos
            </span>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-14">
              <Link to="/login">
                <button className="py-5 px-12 rounded-xl bg-cyan-400 text-xl font-serif font-semibold text-black uppercase">
                  Acessar Conta
                </button>
              </Link>
            </div>
            <div className="pt-9">
              <Link to="/register">
                <button className="py-5 px-16 rounded-xl bg-cyan-400 text-xl font-serif font-semibold text-black uppercase">
                  Criar Conta
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
