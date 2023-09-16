import React, { useState, useEffect } from "react";
import ListeSeries from "./ListeSeries";
import SeriesListe from "./series_etape2_list.json";
import SeriesDetails from "./series_etape2_details.json";
import Header from "./Header";
import Profil from "./Profil";
import SeriesFavorites from "./SeriesFavorites";
import Series from "./Series";

const App = () => {
  const [series, setSeries] = useState(null); 

  const choisirSerie = (id) => {
    setSeries(SeriesDetails[id]);
  };

  useEffect(() => { // On utilise useEffect pour charger une série au chargement de la page (ressource utilisée grâce à ChatGPT car je savais pas comment faire autrement)
    choisirSerie(614);
  }, []); 

  return (
    <>
      <Header />
      <main>
        <ListeSeries seriesData={SeriesListe} choisirSerie={choisirSerie} />
        {series ? <Series series={series} /> : <p>Chargement...</p>}
        <SeriesFavorites />
        <Profil />
      </main>
    </>
  );
};

export default App;
