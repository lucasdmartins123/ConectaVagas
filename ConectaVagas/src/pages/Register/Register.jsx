import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";

export default function Register() {
  const [is_company, setIs_company] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { handleRegister } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !name) {
      return;
    }
    handleRegister({ name, email, password, is_company });
  }
  return (
    <>
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form
          className="w-1/3 h-4/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-8 pt-5">
              Cadastro
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 text-xl font-serif font-bold">Tipo:</label>
            <select
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md"
              value={is_company}
              onChange={(e) => setIs_company(e.target.value)}
            >
              <option value="true">Empresa</option>
              <option value="false">Usuário</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 pt-6 text-xl font-serif font-bold">
              Nome:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-10">
              <button
                type={"submit"}
                className="py-5 px-12 rounded-xl bg-cyan-400 text-xl font-serif font-semibold text-black uppercase"
              >
                Cadastrar
              </button>
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
