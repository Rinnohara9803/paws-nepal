import React from "react";
import { useNavigate } from "react-router-dom";

const PetItem = ({ name, image, breed }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/pets/fido");
      }}
      className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer"
    >
      <img
        src={`http://localhost:3009/uploads/${image}`}
        alt="paws-nepal"
        className="h-64 md:h-56 lg:h-52 object-cover rounded-xl w-full"
      ></img>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-lg"> {name} </p>
        <p className="text-gray-600"> {breed} </p>
      </div>
    </div>
  );
};

export default PetItem;

export const PetFoodItem = ({ name, image, brand }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/pets/foods/chicken");
      }}
      className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer"
    >
      <img
        src={`http://localhost:3009/uploads/${image}`}
        alt="paws-nepal"
        className="h-64 md:h-56 lg:h-52 object-cover rounded-xl w-full"
      ></img>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-lg"> {name} </p>
        <p className="text-gray-600"> {brand} </p>
      </div>
    </div>
  );
};

export const PetAccessoryItem = ({ name, image, brand }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/pets/accessories/chew-toy");
      }}
      className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer"
    >
      <img
        src={`http://localhost:3009/uploads/${image}`}
        alt="paws-nepal"
        className="h-64 md:h-56 lg:h-52 object-cover rounded-xl w-full"
      ></img>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-lg"> {name} </p>
        <p className="text-gray-600"> {brand} </p>
      </div>
    </div>
  );
};
