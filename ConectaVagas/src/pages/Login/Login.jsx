import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";
import { useContext, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert("preencha todos os campos");
    }
    handleLogin({ email, password });
  }
  return (
    <>
      <div className="bg-azul-100 opacity-50 h-screen flex justify-center items-center">
        <form
          className="w-1/3 h-1/2 rounded-xl bg-white shadow-xl shadow-black	flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-black self-center pb-8 pt-10">
              Login
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 text-xl font-serif font-bold">Email:</label>
            <input
              type="email"
              className="w-1/2 p-2  shadow-md shadow-black border rounded-md"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-14">
              <Link to="/home">
                <button
                  type={"submit"}
                  className="py-5 px-12 rounded-xl bg-cyan-400 text-xl font-serif font-semibold text-black uppercase"
                >
                  Entrar
                </button>
              </Link>
              <div className="pt-2">
                <span className="pr-1">Nao possui conta?</span>
                <Link className="text-azul-100" to="/register">
                  Criar conta
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
