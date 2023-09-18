import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form className="w-1/3 h-4/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-8 pt-5">
              Cadastro
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 text-xl font-serif font-bold">Tipo:</label>
            <select className="w-1/2 p-2 shadow-md shadow-black border rounded-md">
              <option value="select">Selecionar</option>
              <option value="ROMANCE">Usuário</option>
              <option value="COMEDIA">Empresa</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 pt-6 text-xl font-serif font-bold">
              Nome:
            </label>
            <input
              type="text"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md"
              placeholder="Digite seu nome"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 pt-6 text-xl font-serif font-bold">
              Email:
            </label>
            <input
              type="email"
              className="w-1/2 p-2  shadow-md shadow-black border rounded-md"
              placeholder="Digite seu email"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              Senha:
            </label>
            <input
              type="password"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-10">
              <Link to="/home">
                <button className="py-5 px-12 rounded-xl bg-cyan-400 text-xl font-serif font-semibold text-black uppercase">
                  Entrar
                </button>
              </Link>
              <div className="pt-2">
                <span className="pr-1">Ja possui conta?</span>
                <Link className="text-azul-100" to="/login">
                  Entra na conta
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
