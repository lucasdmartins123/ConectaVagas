import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";

export default function RegisterPerson() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUser_type] = useState(false);
  const [cpf, setCpf] = useState("");
  const [surname, setSurname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { handleRegisterPerson } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !name || !cpf || !surname) {
      return alert("preencha todos os campos!");
    }
    if (password !== confirmPassword) {
      return alert("senhas diferentes!");
    }
    if (name.length < 3) {
      return alert("O nome deve conter 3 letras no mínimo.");
    }
    if (cpf.length != 11) {
      return alert("O cpf deve conter 11 números.");
    }
    if (password.length < 5) {
      return alert("a senha deve conter no mínimo 5 caracteres");
    }
    handleRegisterPerson({ name, email, password, user_type, cpf, surname });
  }
  return (
    <>
      <div className="bg-azul-100 p-6  h-screen flex justify-center items-center">
        <form
          className="w-full h-full sm:h-5/6 md:w-4/6 md:h-5/6   xl:h-5/6 x 2xl:w-3/6 2xl:h-5/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-xl 2xl:text-4xl font-serif font-bold text-black self-center pt-6">
              Cadastro de Usuário
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <label className="pb-1 pt-4 text-md 2xl:text-2xl 2xl:pt-4 font-serif font-bold">
              Nome:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="p-1/2 w-4/6 max-md:w-3/6 xl:w-3/6 2xl:text-xl 2xl:p-1/2 2xl:w-4/6 2xl:p-1 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4"
              placeholder="Digite seu nome"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-1 pt-3 text-md 2xl:text-2xl 2xl:pt-4 font-serif font-bold">
              Sobrenome:
            </label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              className="p-1/2 w-4/6  2xl:text-xl  max-md:w-3/6 xl:w-3/6 2xl:p-1/2 2xl:w-4/6 2xl:p-1 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4"
              placeholder="Digite seu sobrenome"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-1 pt-3 text-md 2xl:text-2xl 2xl:pt-4 font-serif font-bold">
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="p-1/2 w-4/6 2xl:text-xl  max-md:w-3/6 xl:w-3/6 2xl:p-1/2 2xl:w-4/6 2xl:p-1  shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4"
              placeholder="Digite seu email"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-1 pt-3 text-md 2xl:text-2xl 2xl:pt-4 font-serif font-bold">
              Senha:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-1/2 w-4/6 2xl:text-xl max-md:w-3/6 xl:w-3/6 2xl:p-1/2 2xl:w-4/6 2xl:p-1  shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-1 pt-3 text-md 2xl:text-2xl 2xl:pt-4 font-serif font-bold">
              Confirme sua Senha:
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="p-1/2 w-4/6   max-md:w-3/6 xl:w-3/6 2xl:text-xl 2xl:p-1/2 2xl:w-4/6 2xl:p-1 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-1 pt-3 text-md 2xl:text-2xl 2xl:pt-4 font-serif font-bold">
              Cpf:
            </label>
            <input
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              type="text"
              className="p-1/2 w-4/6 2xl:text-xl  max-md:w-3/6 xl:w-3/6 2xl:p-1/2 2xl:w-4/6 2xl:p-1 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4"
              placeholder="Digite seu cpf"
            ></input>
          </div>
          <div className="pb-10 2xl:pl-2 flex flex-col items-center justify-center">
            <div className="pt-10">
              <button
                type={"submit"}
                className="py-4 px-10 2xl:py-4 2xl:px-20  rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 "
              >
                Cadastrar
              </button>
            </div>
            <div className="pt-3">
              <span className="pr-1 2xl:text-xl">Já possui uma conta?</span>
              <Link className="text-azul-100 2xl:text-xl" to="/login">
                Entrar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
