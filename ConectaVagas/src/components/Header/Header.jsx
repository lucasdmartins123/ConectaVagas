import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { CompaniesContext } from "../Context/CompaniesContext";
import Filter from "../Filter/Filter";

export default function Header() {
  const { handleLogout, userData } = useContext(AuthContext);
  const { search, setSearch, handleFilter } = useContext(CompaniesContext);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  function handleSearch() {
    navigate("/search");
  }

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-between items-center px-20 py-5 sticky top-0 bg-white z-50">
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
            <div className="cursor-pointer" onClick={handleSearch}>
              <BsSearch />
            </div>
          </IconContext.Provider>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-7 w-80"
            placeholder="Insira o nome da vaga ou cidade"
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
          <button className="relative">
            <BsFilter onClick={handleShowFilters} />
            <Filter
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              onClick={handleFilter}
            />
          </button>
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
