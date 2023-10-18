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
      return alert("preencha todos os campos");
    }
    if (password !== confirmPassword) {
      return alert("senhas diferentes");
    }
    if (name.length < 3) {
      return alert("O nome deve conter 3 letras no mínimo");
    }
    if (cpf.length != 11) {
      return alert("O cpf deve conter 11 numeros");
    }
    if (password.length < 5) {
      return alert("a senha deve conter no mínimo 5 caracteres");
    }
    handleRegisterPerson({ name, email, password, user_type, cpf, surname });
  }
  return (
    <>
      <div className="bg-azul-100  h-screen flex justify-center items-center max-sm:p-4">
        <form
          className="w-1/3 h-5/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col max-sm:w-5/6 max-sm:h-full "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold text-black self-center pb-1 pt-2">
              Cadastro de Usuário
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 pt-1 text-xl font-serif font-bold">
              Nome:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
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
              className="w-1/2 p-2  shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
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
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              Confirme sua Senha:
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite sua senha novamente"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              Cpf:
            </label>
            <input
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              type="text"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite seu cpf"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              Sobrenome:
            </label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="pb-10 flex flex-col items-center justify-center">
            <div className="pt-10">
              <button
                type={"submit"}
                className="py-5 px-12 rounded-xl bg-azul-100 text-xl font-serif font-semibold text-black uppercase hover:ring-4 "
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
