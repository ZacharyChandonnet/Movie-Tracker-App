const Description = ({
  title,
  overview,
  genres,
  status,
  year,
  aired_episodes,
  language,
}) => {
  let statusText;
  let statusColor;

  switch (status) {
    case "returning series":
      statusText = "Renouvelée";
      statusColor = "text-yellow-500";
      break;
    case "continuing":
      statusText = "En cours";
      statusColor = "text-yellow-500";
      break;
    case "in production":
      statusText = "En production";
      statusColor = "text-yellow-500";
      break;
    case "planned":
      statusText = "Planifiée";
      statusColor = "text-blue-500";
      break;
    case "canceled":
      statusText = "Annulée";
      statusColor = "text-red-500";
      break;
    case "ended":
      statusText = "Terminée";
      statusColor = "text-green-500";
      break;
    case "upcoming":
      statusText = "A venir";
      statusColor = "text-blue-500";
      break;
    case "pilot":
      statusText = "Pilote";
      statusColor = "text-gray-500";
    default:
      statusText = "Inconnu";
      statusColor = "text-gray-500";
  }

  switch (language) {
    case "en":
      language = "Anglais";
      break;
    case "fr":
      language = "Français";
      break;
    case "es":
      language = "Espagnol";
      break;
    default:
      language = "Inconnu";
  }

  return (
    <div>
      <h2 className="text-2xl font-medium text-blue-600">{title}</h2>
      <p className="pt-1 italic text-gray-500 leading-7">{overview}</p>
      <div className="pt-7 leading-6 text-sm">
        <div style={{ borderBottom: '1px solid #ccc' }}>
          <div className="flex justify-between" style={{ padding: '8px 0' }}>
            <p className="text-left">Année :</p>
            <p className="text-right font-semibold">{year}</p>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #ccc' }}>
          <div className="flex justify-between" style={{ padding: '8px 0' }}>
            <p className="text-left">Langue :</p>
            <p className="text-right font-semibold">{language}</p>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #ccc' }}>
          <div className="flex justify-between" style={{ padding: '8px 0' }}>
            <p className="text-left">Statut :</p>
            <p className={` font-semibold text-right ${statusColor}`}>{statusText}</p>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #ccc' }}>
          <div className="flex justify-between" style={{ padding: '8px 0' }}>
            <p className="text-left">Nombre d'épisodes :</p>
            <p className="text-right font-semibold">{aired_episodes}</p>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid #ccc' }}>
          <div className="flex justify-between" style={{ padding: '8px 0' }}>
            <p className="text-left">Genre :</p>
            {genres &&
              genres.map((genre, index) => (
                <p className="text-right font-semibold" key={index}>
                  {genre}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
