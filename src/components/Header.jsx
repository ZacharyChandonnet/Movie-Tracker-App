import NavBar from "./NavBar";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      <div className="max-w-screen-xl mx-auto pt-40 pb-40 ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2">
            <h1 className=" text-5xl font-semibold">
              Bienvenue chez <span className="text-blue-500">FlickFlow</span>
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
          <div className=" mt-4 md:mt-0 ">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              autoPlay={true}
            >
              {Affiches.map((affiche, index) => (
                <div key={index} className="carousel-item relative">
                  <img
                    src={affiche.image}
                    alt={affiche.titre}
                    className="w-full h-96 object-cover object-center rounded-xl "
                  />
                  <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 p-2 rounded">
                    {affiche.titre}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
