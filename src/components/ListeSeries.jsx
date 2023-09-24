import Favoris from "./Favoris";
import { Link, Outlet, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import ListeAnimation from "./Animations/ListeAnimation.json";

const ListeSeries = ({ seriesData, choisirSerie, favoris, ajouterFavoris }) => {
  const location = useLocation();
  const isListeSeriePage = location.pathname.includes("/listeSerie");

  const borderBottomStyle = {
    width: "100px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "6rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  return (
    <div id="ListeSerie">
      <div id="ListeSerie" className="flex pt-20">
          <h1 className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
            Liste Séries
            <div
              style={borderBottomStyle}
              className="border-b-2 border-blue-500  mt-2"
            ></div>
          </h1>
          <div className=" items-center">
            <div className=" pl-10 w-32 h-32">
              <Lottie animationData={ListeAnimation} />
            </div>
          </div>
        </div>
      <div className="grid grid-cols-5 gap-5 p-4 mt-5">
        {seriesData.map((serie) => (
          <Link
            to={`${isListeSeriePage ? "/listeSerie" : "/favoris"}/${serie.id}`}
            key={serie.id}
          >
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              key={serie.id}
              onClick={() => {
                choisirSerie(serie.id);
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
