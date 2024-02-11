import React from "react";
import PetItem from "../../components/pet-item";
import "react-loading-skeleton/dist/skeleton.css";
import PetItemShimmer from "../../utilities/shimmers/pet-item-shimmer";

const HomePageDetails = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mb-12"
        style={{ width: "100%" }}
      >
        <PetItemShimmer></PetItemShimmer>
        <PetItemShimmer></PetItemShimmer>
        <PetItemShimmer></PetItemShimmer>
        <PetItemShimmer></PetItemShimmer>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12 w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12  w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12  w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>{" "}
      </div>

      {/* section */}
      <div className="flex flex-col items-start mb-12  w-full">
        <p className="font-bold tracking-wider text-xl mb-5"> Dry Dog Food</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      </div>
    </div>
  );
};

export default HomePageDetails;
