import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Favoris.css";

const Favoris = ({ serieId }) => {
  const [favoris, setFavoris] = useState(false);

  const ajouterFavoris = () => {
    setFavoris((prevFavoris) => !prevFavoris);
    console.log(favoris ? `Série ${serieId} retirée des favoris` : `Série ${serieId} ajoutée aux favoris`);
  };

  return (
    <div className="favoris-container">
      <button className="favoris" onClick={ajouterFavoris}>
        <FaHeart className={favoris ? "favoris-icon" : ""} />
      </button>
    </div>
  );
};

export default Favoris;
