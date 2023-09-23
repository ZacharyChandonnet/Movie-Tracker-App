import NavBar from "./NavBar";
import React from "react";
import Lottie from "lottie-react";
import Animation from "./Animations/Animation.json";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white ">
      <NavBar
        links={[
          {
            url: "/listeSerie",
            name: "Liste de séries",
          },
          {
            url: "/favoris",
            name: "Favoris",
          }
        ]}
      />
      <div className="max-w-screen-xl mx-auto pt-10 pb-40 ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2">
            <h1 className=" text-5xl font-semibold">
              Bienvenue chez{" "}
              <span className="text-blue-500 block">FlickFlow</span>
            </h1>
            <p className="text-gray-500 italic pt-3">
              Votre source de séries, tout en un seul endroit.
            </p>
            <Link to="/ListeSerie" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 inline-block hover:bg-blue-600">
              Voir les séries
            </Link>
          </div>
          <div className=" mt-4 md:mt-0 w-3/5">
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
