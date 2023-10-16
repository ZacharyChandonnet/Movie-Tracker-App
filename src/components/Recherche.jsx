import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListeRecherche from "./ListeRecherche";
import { AiOutlineSearch } from "react-icons/ai";

const Recherche = ({
  favoris,
  ajouterFavoris,
  choisirSerie,
  query,
  setQuery,
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const location = useLocation();
  const pageRecherche = location.pathname.includes("/recherche");

  useEffect(() => {
    if (pageRecherche) {
      recherche();
    }
  }, []);

  const recherche = async () => {
    if (query) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/series/search?q=${query}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la recherche");
        }
        const responseData = await response.json();
        let data = responseData.series;

        if (data.length === 0) {
          setSearchResults([]);
          setSearchError("Aucun résultat");
        } else {
          // Sort the data array by title
          data.sort((a, b) => {
            // Assuming a and b have a "title" property
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();

            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
          });

          setSearchResults(data);
          setSearchError(null);
        }
      } catch (error) {
        console.error(error);
        setSearchResults([]);
        setSearchError("Une erreur s'est produite lors de la recherche");
      }
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="text-center mb-5">
        <h1 className="text-xl text-blue-500">Que recherchez-vous ?</h1>
        <p className="text-gray-500 italic">Explorez des milliers de séries.</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <input
            data-query="query"
            type="text"
            className="w-full py-3 px-6 rounded-full bg-blue-500 text-white placeholder-white focus:outline-none"
            placeholder="Rechercher..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="absolute right-0 top-0 mt-3 mr-3 text-white hover:bg-blue-700 font-semibold rounded-full pb-2 px-3 pt-1"
            onClick={recherche}
            aria-label="Rechercher" 
          >
            <AiOutlineSearch className="w-4 h-4" />
          </button>
        </div>
      </div>
      {searchError ? (
        <p className="mt-4 text-red-500 text-center">{searchError}</p>
      ) : (
        <div className="mt-8">
          <ListeRecherche
            choisirSerie={choisirSerie}
            favoris={favoris}
            ajouterFavoris={ajouterFavoris}
            series={searchResults}
          />
        </div>
      )}
    </div>
  );
};

export default Recherche;
