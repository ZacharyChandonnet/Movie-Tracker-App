import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import Favoris from "./Favoris";
import { useState } from "react";

const ListeSeries = ({ choisirSerie, favoris, ajouterFavoris, series }) => {
  const location = useLocation();
  const estDansListeSeries = location.pathname.includes("trending");
  const estDansListeFavoris = location.pathname.includes("favoris");
  const estDansRecherche = location.pathname.includes("recherche");
  const [selectedSeries, setSelectedSeries] = useState(null);

  if (!series) {
    return <Navigate to={location.pathname} replace />;
  }

  return (
    <div id="ListeSerie">
      <div className="grid grid-cols-5 gap-5 p-4 mt-5">
        {series.map((serie) => (
          <Link
            to={
              estDansListeSeries
                ? `/trending/${serie.id}`
                : estDansListeFavoris
                ? `/favoris/${serie.id}`
                : estDansRecherche
                ? `/recherche/${serie.id}`
                : `/autre-chemin/${serie.id}`
            }
            key={serie.id}
            data-testid="contenu"
          >
            <div
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 ${
                selectedSeries === serie.id ? 'border-2 p-1 border-blue-300' : ''
              }`}
              key={serie.id}
              onClick={() => {
                choisirSerie(serie.id);
                setSelectedSeries(serie.id);
              }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={serie.poster}
                  alt={serie.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <Favoris
                serieId={serie.id}
                favoris={favoris}
                ajouterFavoris={ajouterFavoris}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-500">
                  {serie.title}
                </h3>
                <p className="text-sm text-gray-500">{serie.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ListeSeries;
