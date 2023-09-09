import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Favoris.css";

const Favoris = () => {
  const [favoris, setFavoris] = useState(false);

  const ajouterFavoris = () => {
    setFavoris((prevFavoris) => !prevFavoris); // Inverse la valeur de favoris
    console.log(favoris ? "Retiré des favoris" : "Ajouté aux favoris");
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
