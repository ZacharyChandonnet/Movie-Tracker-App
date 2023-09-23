import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavBar = ({links}) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">FlickFlow</div>
        <ul className="flex gap-6 space-x-4">
        {links.map(({ url, name }) => (
          <li key={name}>
            <Link className="text-white" to={url}>{name}</Link>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;