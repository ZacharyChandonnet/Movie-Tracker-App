import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import ListeAnimation from "./Animations/ListeAnimation.json";
import ListeSeries from "./ListeSeries";

const ListeTrending = ({ choisirSerie, favoris, ajouterFavoris, series }) => {
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
        <h1 data-cy="trending-title" className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
          Séries Trending
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
      <ListeSeries
        series={series}
        choisirSerie={choisirSerie}
        favoris={favoris}
        ajouterFavoris={ajouterFavoris}
      />
    </div>
  );
};

export default ListeTrending;
