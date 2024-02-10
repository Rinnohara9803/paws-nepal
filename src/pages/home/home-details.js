import React from "react";
import PetItem from "../../components/pet-item";

const HomePageDetails = () => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* section */}
      <div className="flex flex-col items-start mb-12 w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6   w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12  w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6  w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12  w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6  w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>{" "}
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12  w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6  w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>
    </div>
  );
};

export default HomePageDetails;
