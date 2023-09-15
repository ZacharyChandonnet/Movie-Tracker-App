const SeriesFavorites = () => {
  const borderBottomStyle = {
    width: "120px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "7.5rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  return (
    <div id="SerieFavorite">
      <h1 className="text-blue-500 text-3xl pt-16 font-semibold pl-10 relative">
        Séries favorites
        <div
          style={borderBottomStyle}
          className="border-b-2 border-blue-500 w-24 mt-2"
        ></div>
      </h1>
    </div>
  );
};

export default SeriesFavorites;
