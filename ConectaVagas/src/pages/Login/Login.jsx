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
      <div className="bg-azul-100 h-screen flex justify-center items-center">
        <form
          className=" w-5/6 lg:w-4/6 xl:w-3/6 xl:h-4/6 2xl:h-4/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl 2xl:text-4xl font-serif font-bold text-black self-center pb-8 pt-10">
              Login
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 text-xl 2xl:text-2xl font-serif font-bold">
              Email:
            </label>
            <input
              type="email"
              className="w-1/2 p-2 2xl:p-3  2xl:text-xl 2xl:w-4/6 shadow-md  shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6 "
              placeholder="Digite seu email "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl 2xl:text-2xl  font-serif font-bold">
              Senha:
            </label>
            <input
              type="password"
              className="w-1/2 p-2 2xl:p-3 2xl:w-4/6 2xl:text-xl  shadow-md  shadow-black border rounded-md ring-2 focus:ring-2 ring-azul-100 focus:ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-14 xl:pt-12 2xl:pt-14 flex flex-col items-center justify-center max-sm:pt-7">
              <button
                type={"submit"}
                className="py-5 px-12 2xl:py-6 2xl:px-40 rounded-xl bg-azul-100  text-xl font-serif font-semibold text-black uppercase hover:ring-4 max-sm:ml-3"
              >
                Entrar
              </button>

              <div className="pt-4 2xl:pt-12  ">
                <span className="pr-1 flex justify-center  2xl:text-xl">
                  Crie a sua conta!
                </span>
                <Link
                  className="text-azul-100 2xl:text-xl"
                  to="/registerCompany"
                >
                  Empresa
                </Link>
                <span className="plmx-1 2xl:text-xl 2xl:pl-2 2xl:pr-2 ">
                  {" "}
                  ou{" "}
                </span>
                <Link
                  className="text-azul-100 2xl:text-xl "
                  to="/registerPerson"
                >
                  Usuario
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
