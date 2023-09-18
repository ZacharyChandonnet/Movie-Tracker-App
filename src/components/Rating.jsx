import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import ReactStars from "react-stars";

// React.memo permet d'optimiser les performances en évitant de re-render le composant à chaque fois qu'il y a un changement (avec npm install react-stars)
const Rating = React.memo(({ rating, votes }) => {
  const etoiles = (rating / 2).toFixed(0);

  const etoilesArray = [];
  for (let i = 0; i < etoiles; i++) {
    etoilesArray.push(<FaStar key={i} className=" text-yellow-500" />);
  }

  const ratingChanged = (newRating) => {
    console.log(`New rating: ${newRating}`);
  };

  return (
    <>
      <p className="flex items-center">
        {etoilesArray.map((etoile, index) => (
          <span key={index}>{etoile}</span>
        ))}
        <span className="text-blue-500 pl-4">
          <FaUserCheck className="pl-1" />
        </span>{" "}
        <span className="pl-1">{votes}</span>
      </p>
      <div className="flex">
        <div className="text-sm text-gray-500">
          Mon avis{" "}
          <div className="inline-block pt-2">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={22}
              color2={"#4299E1"}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Rating;