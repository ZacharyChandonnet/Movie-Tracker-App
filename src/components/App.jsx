import Series from "./Series";
import ListeSeries from "./ListeSeries";
import "./reset.css";
import SeriesListe from "./series_etape2_list.json";
import SeriesDetails from "./series_etape2_details.json";
import Header from "./Header";
import Profil from "./Profil";
import SeriesFavorites from "./SeriesFavorites";

const App = () => {
  return (
    <>
      <Header />
      <ListeSeries seriesData={SeriesListe} />
      <Series series={SeriesDetails["614"]} />
      <SeriesFavorites />
      <Profil />
    </>
  );
};

export default App;
