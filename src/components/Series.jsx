import Description from "./Description";
import Trailer from "./Trailer";
import Rating from "./Rating";
import Poster from "./Poster";
import FillerInformation from "./FillerInformation";
import { useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import Lottie from "lottie-react";
import SerieAnimation from "./Animations/SerieAnimation.json";
import { Navigate, useParams, useLocation } from "react-router-dom";

const Series = ({ series }) => {
  const [saisonVisible, setSaisonVisible] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  if (!series) {
    return <Navigate to={location.pathname} replace />;
  }

  const {
    title,
    year,
    imdb,
    tagline,
    overview,
    network,
    country,
    trailer,
    status,
    rating,
    votes,
    language,
    genres,
    aired_episodes,
    poster,
    seasons,
  } = series;


  const voirSaison = () => {
    setSaisonVisible(!saisonVisible);
  };

  const borderBottomStyle = {
    width: "80px",
    height: "4px",
    backgroundColor: "#4299E1",
    marginLeft: "2rem",
    marginTop: "0.2rem",
    position: "absolute",
  };

  try {

    return (
      <div id="Serie" className=" bg-gray-50 p-4">
        <div id="ListeSerie" className="flex pt-20">
          <h1 data-cy="serie-title" className="text-blue-500 text-3xl font-semibold relative pl-10 pt-7">
            Série
            <div
              style={borderBottomStyle}
              className="border-b-2 border-blue-500  mt-2"
            ></div>
          </h1>
          <div className=" items-center">
            <div className=" pl-10 w-32 h-32">
              <Lottie animationData={SerieAnimation} />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center w-3/4">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="mb-4">
                <Poster poster={poster} className="w-full h-auto" />
              </div>
              <Rating rating={rating} votes={votes} />
              <p
                className="text-gray-500 text-sm cursor-pointer flex items-center pt-2"
                onClick={voirSaison}
              >
                Voir les saisons{" "}
                {saisonVisible ? (
                  <HiArrowUp className="pl-2 pt-2 text-lg" />
                ) : (
                  <HiArrowDown className="pl-2 pt-2 text-lg" />
                )}
              </p>
              {saisonVisible && (
                <div className="mt-4">
                  {seasons.map((season, index) => (
                    <div key={index} className="mb-2 text-sm">
                      <p
                        style={{
                          borderBottom: "1px solid #e2e8f0",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        Saison : {season.number} -{" "}
                        <span className="italic">
                          Épisodes : {season.episodes.length}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3 md:pl-4">
            <div className="bg-white rounded-lg shadow-md p-10">
              <div className="flex flex-col md:flex-row">
                <div id="ListeSerie" className="w-full md:w-1/2 pr-4">
                  <Description
                    title={title}
                    overview={overview}
                    genres={genres}
                    status={status}
                    year={year}
                    aired_episodes={aired_episodes}
                    language={language}
                  />
                </div>
                <div className="w-full md:w-1/2 pl-10">
                  {trailer ? (
                    <Trailer trailer={trailer} />
                  ) : (
                    <p className="text-red-500">Pas de trailer</p>
                  )}
                  <FillerInformation
                    network={network}
                    country={country}
                    tagline={tagline}
                    imdb={imdb}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <Navigate to="/listeSerie" replace />;
  }
};

export default Series;
