import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

const Search = () => {
  const { search, vacanciesList } = useContext(CompaniesContext);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const vacancieFilter = vacanciesList.filter(
      (vacancy) =>
        vacancy.title.toLowerCase().includes(search.toLowerCase()) ||
        vacancy.location.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(vacancieFilter);
  }, [search]);

  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };

    const formatedDate = createDate.toLocaleDateString("pt-BR", format);

    return formatedDate;
  };

  return (
    <>
      <Header />
      <div className="bg-azul-100  flex flex-col items-center min-h-[calc(100vh-64px)]">
        <div className="bg-gray-200 mt-6 mb-6 px-8 flex flex-col justify-center items-center shadow-md shadow-black rounded-lg">
          <h1 className="text-3xl font-serif font-bold self-center pt-6 pb-6">
            Essas foram as vagas encontradas:
          </h1>
          <div className="pt-2 grid grid-cols-3 w-full">
            {searchResult.map((result, index) => (
              <div className="pt-4 pb-4 flex flex-col pr-3" key={index}>
                <Link to={`/vacancieDetails/${result.ID}`}>
                  <h1 className="flex justify-center pb-2 font-sans text-white text-xl bg-azul-100 p-3 mb-1 rounded-sm shadow-md shadow-black">
                    {result.title}
                  </h1>
                  <div className="bg-white rounded-sm text-base font-sans font-bold px-5 py-4 shadow-lg shadow-black">
                    <p className="px-1 pb-2"> {result.description}</p>
                    <div className="pb-2 pt-2">
                      <BsFillGeoAltFill size={18} className="absolute" />
                      <p className="px-6">{result.location}</p>
                    </div>
                    <div className="pb-2">
                      <BsStack size={18} className="absolute" />
                      <p className="px-6">{result.filters}</p>
                    </div>
                    <div className="pb-2">
                      <MdOutlineAttachMoney size={20} className="absolute" />
                      <p className="px-6">
                        {result.salary.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                    <div>
                      <BsCalendarDate size={18} className="absolute" />
                      <p className="px-6">{formatDate(result.postDate)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
