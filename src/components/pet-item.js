import React from "react";

const PetItem = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-3 w-full cursor-pointer">
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
