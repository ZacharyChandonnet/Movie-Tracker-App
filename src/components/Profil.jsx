import React from "react";
import Lottie from "lottie-react";
import UserAnimation from "./Animations/UserAnimation.json";
import { AiFillHeart } from "react-icons/ai";

const Profil = ({ photo, user, favorites }) => {
  return (
    <div className="profil p-6 rounded-lg shadow-md">
      {/* <div className="flex items-center bg-blue-500 p-10 rounded-t-lg">
        <div className="w-20 h-20 mr-4">
          <Lottie animationData={UserAnimation} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-white mb-2">
            Profil de {user}
          </h1>
          <p className="text-sm text-white">
            Bienvenue sur votre tableau de bord personnel.
          </p>
        </div>
      </div> */}
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex items-center pt-10">
        <img
          src={photo}
          alt="userImg"
          className="rounded-full w-36 h-36 object-cover"
        />
        <div className="flex flex-col ml-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Bonjour, <br /> <span className="italic">{user}</span>
          </h3>
          <div className="font-semibold text-gray-500 flex items-center mt-2">
            <span className="mr-1">Nombre de séries favorites:</span>
            {favorites.length}{" "}
            <span className="text-red-500">
              <AiFillHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
