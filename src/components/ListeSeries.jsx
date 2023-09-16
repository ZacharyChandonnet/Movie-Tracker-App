import Favoris from "./Favoris";

const ListeSeries = ({ seriesData, choisirSerie }) => {
  console.log(seriesData);
  

  const borderBottomStyle = {
    width: "120px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "7.5rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  return (
    <div id="ListeSerie">
      <h1 className="text-blue-500 text-3xl pt-5 font-semibold pl-10 relative">
        Liste de séries
        <div
          style={borderBottomStyle}
          className="border-b-2 border-blue-500 w-24 mt-2"
        ></div>
      </h1>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4">
        {seriesData.map((serie) => (
          <div
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            key={serie.id}
            onClick={() => choisirSerie(serie.id)}
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={serie.poster}
                alt={serie.title}
                className="w-full h-auto object-cover"
              />
            </div>
              <Favoris serieId={serie.id} />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-500">{serie.title}</h3>
              <p className="text-sm text-gray-500">{serie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeSeries;
