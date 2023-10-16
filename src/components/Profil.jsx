import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Profil = ({ photo, user, favorites }) => {
  return (
    <div className="profil p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center">
        <img
          src={photo}
          alt="userImg"
          className="rounded-full w-20 h-20 object-cover"
        />
        <div className="ml-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Bonjour,{" "}
            <span className="italic text-blue-500">{user}</span>
          </h3>
          <div className="font-semibold text-gray-500 flex items-center mt-1">
            Nombre de favoris :
            <span data-testid="favoris" className="text-red-500 text-base mr-1 ml-1">
              {favorites.length} {" "}
            </span>
            <span className="text-gray-500">
              <AiFillHeart className="text-red-500 inline-block" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
