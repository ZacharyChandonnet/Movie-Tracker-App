import { useState } from "react";

const Saison = ({ saisons }) => {
  const [saisonVisible, setSaisonVisible] = useState(false);

  const voirSaison = () => {
 
    setSaisonVisible(!saisonVisible);
  };

  return (
    <div>
      <p onClick={voirSaison}>Voir les saisons</p>
      {saisonVisible && (
        <div>
          {saisons.map((saison, index) => (
            <div key={index}>
              <p>Saison : {saison.number + 1} Épisodes : {saison.episodes.length}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saison;
