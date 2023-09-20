
import { FaHeart } from "react-icons/fa";
import "./CSS/Favoris.css";

const Favoris = ({ serieId, favoris, ajouterFavoris }) => {
  const estDansFavoris = favoris.includes(serieId); 

  const toggleFavorite = () => {
    ajouterFavoris(serieId);
    console.log("Favoris ajouté" + serieId);
  };

  return (
    <div className="favoris-container">
      <button className="favoris" onClick={toggleFavorite}>
        <FaHeart className={estDansFavoris ? "favoris-icon" : ""} />
      </button>
    </div>
  );
};

export default Favoris;
