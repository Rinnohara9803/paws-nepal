import React, { useEffect, useState } from "react";
import PetItem, { PetAccessoryItem } from "../../components/pet-item";
import PetItemShimmer from "../../utilities/shimmers/pet-item-shimmer";
import LoadError from "./load-error";

const Accessories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // setError("Wifi went down");
    }, 2000);
  });

  return (
    <div className="flex flex-col items-start mb-12  w-full">
      <p className="font-bold tracking-wider text-xl mb-5">
        {" "}
        Explore Accessories
      </p>
      {isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
        </div>
      )}
      {!isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetAccessoryItem></PetAccessoryItem>
          <PetAccessoryItem></PetAccessoryItem>
          <PetAccessoryItem></PetAccessoryItem>
          <PetAccessoryItem></PetAccessoryItem>
          <PetAccessoryItem></PetAccessoryItem>
          <PetAccessoryItem></PetAccessoryItem>
        </div>
      )}
      {!isLoading && error !== null && <LoadError></LoadError>}
    </div>
  );
};

export default Accessories;
