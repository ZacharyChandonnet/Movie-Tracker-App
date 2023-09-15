const Profil = ({ photo, user, favorites }) => {
  const borderBottomStyle = {
    width: "120px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "2.5rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  return (
    <div className="profil">
      <h1 className="text-blue-500 text-3xl pt-16 font-semibold pl-10 relative">
        Profil
        <div
          style={borderBottomStyle}
          className="border-b-2 border-blue-500 w-24 mt-2"
        ></div>
      </h1>
      <img
        src="https://i.pravatar.cc"
        alt="userImg"
        className="rounded-full w-48 h-48"
      />
    </div>
  );
};

export default Profil;
