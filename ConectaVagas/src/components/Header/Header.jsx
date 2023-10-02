import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Header() {
  const { handleLogout, userData } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center px-20 py-5">
      <div>
        <div>
          <Link to="/home">ConectaVagas</Link>
        </div>
      </div>
      <div className="flex space-x-20">
        <div className="relative w-64">
          <IconContext.Provider
            value={{
              size: "1em",
              className: "absolute left-2 top-1/2 transform -translate-y-1/2",
            }}
          >
            <div>
              <BsSearch />
            </div>
          </IconContext.Provider>
          <input
            className="pl-7 w-72"
            placeholder="Insira o nome da vaga ou empresa"
          />
        </div>

        <IconContext.Provider value={{ size: "1.5em", color: "black" }}>
          <div>
            <Link to="/profile">
              <CgProfile />
            </Link>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="cursor-pointer">
            <BsFilter />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="cursor-pointer" onClick={handleLogout}>
            <FiLogOut />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
