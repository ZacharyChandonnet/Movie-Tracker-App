import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ links }) => {
  const location = useLocation();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">FlickFlow</div>
        <ul className="flex gap-6 space-x-4">
          {links.map(({ url, name }) => {
            const isActive = location.pathname === url;
            const linkClasses = isActive
              ? "text-white hover:text-gray-300 border-b-2 border-white pb-1"
              : "text-white hover:text-gray-300";
            return (
              <li key={name}>
                <Link
                  className={linkClasses}
                  to={url}
                  data-cy={`${name.toLowerCase()}-link`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
