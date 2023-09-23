import Favoris from "./Favoris";
import { Link, Outlet, useLocation } from "react-router-dom";

const ListeSeries = ({ seriesData, choisirSerie, favoris, ajouterFavoris }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div id="ListeSerie">
      <div className="grid grid-cols-5 gap-5 p-4">
        {seriesData.map((serie) => (
          <Link to={`/listeSerie/${serie.id}`} key={serie.id}>
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              key={serie.id}
              onClick={() => {
                if (location.pathname !== "/favoris") {
                  choisirSerie(serie.id);
                }
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
