
import { FaHeart } from "react-icons/fa";
import "./Favoris.css";

const Favoris = ({ serieId, favoris, ajouterFavoris }) => {
  const isFavorite = favoris.includes(serieId); 

  const toggleFavorite = () => {
    ajouterFavoris(serieId);
    console.log("Favoris ajouté" + serieId);
  };

  return (
    <div className="favoris-container">
      <button className="favoris" onClick={toggleFavorite}>
        <FaHeart className={isFavorite ? "favoris-icon" : ""} />
      </button>
    </div>
  );
};

export default Favoris;
