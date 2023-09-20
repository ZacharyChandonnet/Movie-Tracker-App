import React, { useState, useEffect } from "react";
import ListeSeries from "./ListeSeries";
import SeriesListe from "./series_etape2_list.json";
import SeriesDetails from "./series_etape2_details.json";
import Header from "./Header";
import Profil from "./Profil";
import Series from "./Series";
import FavorisAnimation from "./Animations/FavorisAnimation.json";
import Lottie from "lottie-react";
import ListeAnimation from "./Animations/ListeAnimation.json";

const App = () => {
  const borderBottomStyle = {
    width: "120px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "7.5rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  const [series, setSeries] = useState(null);
  const [favoris, setFavoris] = useState([]);

  function ajouterOuRetirerFavori(id) {
    const estDansFavoris = favoris.includes(id);

    if (estDansFavoris) {
      const nouveauxFavoris = favoris.filter((serieId) => serieId !== id);
      setFavoris(nouveauxFavoris);
    } else {
      setFavoris([...favoris, id]); 
    }
  }
  const choisirSerie = (id) => {
    setSeries(SeriesDetails[id]);
  };

  useEffect(() => {
    // On utilise useEffect pour charger une série au chargement de la page (ressource utilisée grâce à ChatGPT car je savais pas comment faire autrement)
    choisirSerie(614);
  }, []);

  return (
    <>
      <Header />
      <main>
        <div id="ListeSerie" className="flex pt-20">
          <h1 className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
            Liste de séries
            <div
              style={borderBottomStyle}
              className="border-b-2 border-blue-500  mt-2"
            ></div>
          </h1>
          <div className=" items-center">
            <div className=" pl-20 w-48 h-48">
              <Lottie animationData={ListeAnimation} />
            </div>
          </div>
        </div>
        <ListeSeries
          seriesData={SeriesListe}
          choisirSerie={choisirSerie}
          favoris={favoris}
          ajouterFavoris={ajouterOuRetirerFavori}
        />
        {series ? <Series series={series} /> : <p>Chargement...</p>}
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
        <ListeSeries
          seriesData={SeriesListe.filter((serie) => favoris.includes(serie.id))}
          choisirSerie={choisirSerie}
          favoris={favoris}
          ajouterFavoris={ajouterOuRetirerFavori}
        />
        <Profil
          user="Zachary Chandonnet"
          photo="https://i.pravatar.cc"
          favorites={favoris}
        />
      </main>
    </>
  );
};

export default App;
