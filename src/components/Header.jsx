import NavBar from "./NavBar";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lottie from "lottie-react";
import Animation from  "./Animations/Animation.json";

const Header = () => {
  const Affiches = [
    {
      titre: "Succession",
      image:
        "https://image.tmdb.org/t/p/original//7HW47XbkNQ5fiwQFYGWdw9gs144.jpg",
    },
    {
      titre: "What We Do in the Shadows",
      image:
        "https://image.tmdb.org/t/p/original/chckIPxBbvyFCcCFz8VPHgWCIHL.jpg",
    },
  ];

  return (
    <div className="bg-white ">
      <NavBar />
      <div className="max-w-screen-xl mx-auto pt-10 pb-40 ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2">
            <h1 className=" text-5xl font-semibold">
              Bienvenue chez <span className="text-blue-500 block">FlickFlow</span>
            </h1>
            <p className="text-gray-500 italic pt-3">
              Votre source de séries, tout en un seul endroit.
            </p>
            <a href="#ListeSerie">
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">
                Découvrez nos séries
              </button>
            </a>
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
