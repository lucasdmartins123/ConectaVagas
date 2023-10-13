import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../../components/Context/CompaniesContext";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Header />
      <div className="bg-azul-100 opacity-50 flex flex-col items-center min-h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-serif font-bold self-center pt-6 pb-6">
          Essas foram as vagas encontradas:
        </h1>
        <div className="pt-2 flex-col w-1/2">
          {searchResult.map((result, index) => (
            <div className="bg-azul-100 pt-5 flex flex-col " key={index}>
              <Link to={`/vacancieDetails/${result.ID}`}>
                <div className="bg-white rounded-xl text-base font-serif font-bold px-20 ">
                  <p> Titulo: {result.title}</p>
                  <p> Descrição: {result.description}</p>
                  <p> Localização: {result.location}</p>
                  <p> Categorias: {result.filters}</p>
                  <p> Salário: {result.salary}</p>
                  <p>Data de publicação: {result.postDate}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
