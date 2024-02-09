import React from "react";
import PetItem from "../../components/pet-item";

const HomePageDetails = () => {
  return (
    <div className="flex flex-col items-start">
      {/* section */}
      <div className="flex flex-col items-start mb-12">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-3 gap-x-4">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-3 gap-x-4">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-3 gap-x-4">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-3 gap-x-4">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>
    </div>
  );
};

export default HomePageDetails;
