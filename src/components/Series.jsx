import Description from "./Description";
import Trailer from "./Trailer";
import Rating from "./Rating";
import Poster from "./Poster";
import Header from "./Header";
import FillerInformation from "./FillerInformation";
import Favoris from "./Favoris";
import { useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

const Series = ({ series, saison }) => {
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
  } = series;

  const [saisonVisible, setSaisonVisible] = useState(false);

  const voirSaison = () => {
    setSaisonVisible(!saisonVisible);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center w-4/5">
          <div className="md:w-1/3 md:pr-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="mb-4">
                <Poster poster={poster} className="w-full h-auto" />
                <Favoris />
              </div>
              <Rating rating={rating} votes={votes} />
              <p
                className="text-gray-500 text-sm cursor-pointer flex items-center pt-2"
                onClick={voirSaison}
              >
                Voir les saisons{" "}
                {saisonVisible ? (
                  <HiArrowUp className="pl-2 pt-2" />
                ) : (
                  <HiArrowDown className="pl-2 pt-2" />
                )}
              </p>
              {saisonVisible && (
                <div className="mt-4">
                  {saison.map((saison, index) => (
                    <div key={index} className="mb-2 text-sm">
                      <p
                        style={{
                          borderBottom: "1px solid #e2e8f0",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        Saison : {saison.number} -{" "}
                        <span className="italic">
                          Épisodes : {saison.episodes.length}
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
                <div className="w-full md:w-1/2 pr-4">
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
                  <Trailer trailer={trailer} />
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
    </>
  );
};

export default Series;
