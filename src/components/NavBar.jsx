const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">FlickFlow</div>
        <ul className="flex gap-6 space-x-4">
          <li>
            <a href="#ListeSerie" className="text-white hover:text-gray-300">Liste de séries</a>
          </li>
          <li>
            <a href="#Serie" className="text-white hover:text-gray-300">Série</a>
          </li>
          <li>
            <a href="#SerieFavorite" className="text-white hover:text-gray-300">Séries favorites</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;