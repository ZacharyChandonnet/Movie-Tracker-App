
import { FaHeart } from "react-icons/fa";
import "./CSS/Favoris.css";

const Favoris = ({ serieId, favoris, ajouterFavoris }) => {
  console.log(favoris);
  const estDansFavoris = favoris.includes(serieId); 
  
  const toggleFavorite = () => {
    ajouterFavoris(serieId);
    console.log("Favoris ajouté" + serieId);
  };


  return (
    <div className="favoris-container">
      <button data-cy="btn_favoris" className="favoris" onClick={toggleFavorite}>
        <FaHeart data-cy="btn-favoris" className={estDansFavoris ? "favoris-icon" : ""} />
      </button>
    </div>
  );
};

export default Favoris;
