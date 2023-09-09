import { FaStar } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import {useState} from "react";

const Rating = ({ rating, votes }) => {
  const etoiles = (rating / 2).toFixed(0);

  const etoilesArray = [];
  for (let i = 0; i < etoiles; i++) {
    etoilesArray.push(<FaStar key={i} />);
  }
  

  return (
    <>
      <p className="flex items-center">
        {etoilesArray.map((etoile, index) => (
          <span className="text-yellow-500" key={index}>
            {etoile}
          </span>
        ))}
        <span className="text-blue-400 pl-4">
          <FaUserCheck className="pl-1" /> </span> <span className="pl-1">{votes}</span>
      </p>
      <p>
        <span className="text-sm text-gray-500">
          Mon avis{" "}
          <span
            className="inline-block"
          >
            <FaStar className="pl-2 pt-4" />
          </span>
        </span>
      </p>
    </>
  );
};

export default Rating;
