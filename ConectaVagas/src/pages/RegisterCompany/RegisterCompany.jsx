import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";

export default function RegisterCompany() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user_type, setUser_type] = useState(true);
  const [cnpj, setCnpj] = useState("");
  const [city, setCity] = useState("");

  const { handleRegisterCompany } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !name || !cnpj || !city) {
      return alert("dados invalidos");
    }
    if (password !== confirmPassword) {
      return alert("senhas diferentes");
    }
    if (name.length < 3) {
      return alert("O nome deve conter 3 letras no mínimo");
    }
    if (cnpj.length != 14) {
      return alert("O cpf deve conter 11 numeros");
    }
    if (password.length < 5) {
      return alert("a senha deve conter no mínimo 5 caracteres");
    }
    handleRegisterCompany({ name, email, password, user_type, cnpj, city });
  }
  return (
    <>
      <div className="bg-azul-100  h-screen flex justify-center items-center max-sm:p-4">
        <form
          className="w-1/3 h-5/6 rounded-xl bg-white shadow-xl shadow-black	flex flex-col max-sm:w-5/6 max-sm:h-full "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold text-black self-center pb-2 pt-2">
              Cadastro de Empresas
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pb-3 text-xl font-serif font-bold">Nome:</label>
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
              Cnpj:
            </label>
            <input
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              type="text"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite seu cnpj"
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="pt-6 pb-3 text-xl font-serif font-bold">
              Cidade:
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="w-1/2 p-2 shadow-md shadow-black border rounded-md ring-2 ring-azul-100 hover:ring-4 max-sm:w-5/6"
              placeholder="Digite a cidade"
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
