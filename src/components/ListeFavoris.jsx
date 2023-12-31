import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import FavorisAnimation from "./Animations/FavorisAnimation.json";
import ListeSeries from "./ListeSeries";

const ListeFavoris = ({ choisirSerie, favoris, ajouterFavoris, series }) => {
  if (!series) {
    return (
      <>
        <Navigate to={location.pathname} replace />
        <p className="text-center text-blue-500 italic text-lg">Vous n'avez pas encore de favoris!</p>
      </>
    );
  }

  console.log("favoris", favoris);

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
        <h1 data-cy="favoris-title" className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
          Favoris
          <div
            style={borderBottomStyle}
            className="border-b-2 border-blue-500  mt-2"
          ></div>
        </h1>
        <div className=" items-center">
          <div className=" pl-10 w-32 h-32">
            <Lottie animationData={FavorisAnimation} />
          </div>
        </div>
      </div>
      <ListeSeries
        series={series}
        choisirSerie={choisirSerie}
        favoris={favoris}
        ajouterFavoris={ajouterFavoris}
      />
    </div>
  );
};

export default ListeFavoris;
