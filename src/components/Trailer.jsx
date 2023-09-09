import PropTypes from "prop-types";

const Trailer = ({ trailer }) => {
  const videoId = trailer.split("v=")[1]; // On vient récupérer l'ID de la vidéo Youtube à partir de l'URL

  return (
    <div className="trailer w-full max-w-screen-lg mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="w-full h-56"
      />
    </div>
  );
};

Trailer.propTypes = {
  trailer: PropTypes.string.isRequired,
};

export default Trailer;
