import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import ListeAnimation from "./Animations/ListeAnimation.json";
import Favoris from "./Favoris";

const ListeSeries = ({ choisirSerie, favoris, ajouterFavoris, series }) => {
  if (!series) {
    return <Navigate to={location.pathname} replace />;
  }

  const borderBottomStyle = {
    width: "80px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "0rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  return (
    <div id="ListeSerie">
      <div className="flex pt-20">
        <h1 className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
          Favoris
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
        {series.map((serie) => (
          <Link to={`/favoris/${serie.id}`} key={serie.id}>
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
