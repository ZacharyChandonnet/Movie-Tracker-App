const FillerInformation = ({ network, country, tagline, imdb }) => {
  switch (country) {
    case "us":
      country = "Etats-Unis";
      break;
    case "gb":
      country = "Grande-Bretagne";
      break;
    case "fr":
      country = "France";
      break;
    case "ca":
      country = "Canada";
      break;
      default:
  }

  return (
    <div className="text-sm leading-6" >
      <p className="italic text-gray-500">{tagline}</p>
      <p>Network : {network}</p>
      <p className="pb-6"> Pays : {country}</p>
      <a className="cursor-pointer bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 pl-5 pr-5" target="_blank"  href={imdb}>Voir Film</a>
    </div>
  );
};

export default FillerInformation;
