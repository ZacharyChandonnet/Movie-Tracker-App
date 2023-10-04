import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const RechercheTab = ({ query, setQuery }) => {
  return (
    <div className="container pl-10 mb-5 mt-16">
      <div>
        <h1 className="italic pl-2 pb-2 text-gray-700">Que recherchez-vous ?</h1>
      </div>
      <div className="flex">
        <div className="relative w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              className="w-full py-3 px-6 rounded-full bg-blue-500 text-white placeholder-white focus:outline-none pr-12 ml-0"
              placeholder="Rechercher..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Link to={`/recherche`} className="absolute inset-y-0 right-0 flex items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-full ml-1">
                <AiOutlineSearch className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechercheTab;
