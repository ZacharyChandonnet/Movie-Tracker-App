import Lottie from "lottie-react";
import FavorisAnimation from "./FavorisAnimation.json";

const SeriesFavorites = () => {
  const borderBottomStyle = {
    width: "120px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "7.5rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  return (
    <div id="SerieFavorite" className="flex pt-20">
      <h1 className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
        Séries favorites
        <div
          style={borderBottomStyle}
          className="border-b-2 border-blue-500  mt-2"
        ></div>
      </h1>
      <div className="pl-10 items-center">
        <div className="w-24 h-24">
          <Lottie animationData={FavorisAnimation} />
        </div>
      </div>
    </div>
  );
};

export default SeriesFavorites;
