import Series from "./Series";
import Saison from "./Saison"; 

const ListeSeries = ({ series}) => {
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

  return (
    <div >
      <Series
        title={title}
        year={year}
        imdb={imdb}
        tagline={tagline}
        overview={overview}
        network={network}
        country={country}
        trailer={trailer}
        status={status}
        rating={rating}
        votes={votes}
        language={language}
        genres={genres}
        aired_episodes={aired_episodes}
        poster={poster}
      />
    </div>
  );
};

export default ListeSeries;
