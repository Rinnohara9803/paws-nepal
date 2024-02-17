import React from "react";
import { useNavigate } from "react-router-dom";

const PetItem = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/pets/fido");
      }}
      className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer"
    >
      <img
        src="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Bengal.1.jpg?h=1f9aeeea&itok=-betxrGH"
        alt="paws-nepal"
        className="h-64 md:h-56 lg:h-52 object-cover rounded-xl w-full"
      ></img>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-lg"> Pedigree </p>
        <p className="text-gray-600"> Complete Nutrition</p>
      </div>
    </div>
  );
};

export default PetItem;

export const PetFoodItem = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/pets/foods/chicken");
      }}
      className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Cat_and_Cat_Foods.jpg/1200px-Cat_and_Cat_Foods.jpg"
        alt="paws-nepal"
        className="h-64 md:h-56 lg:h-52 object-cover rounded-xl w-full"
      ></img>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-lg"> Pedigree </p>
        <p className="text-gray-600"> Complete Nutrition</p>
      </div>
    </div>
  );
};

export const PetAccessoryItem = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/home/pets/accessories/chew-toy");
      }}
      className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer"
    >
      <img
        src="https://m.media-amazon.com/images/I/616TtqDuLXL.jpg"
        alt="paws-nepal"
        className="h-64 md:h-56 lg:h-52 object-cover rounded-xl w-full"
      ></img>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-lg"> Pedigree </p>
        <p className="text-gray-600"> Complete Nutrition</p>
      </div>
    </div>
  );
};
