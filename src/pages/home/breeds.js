import React, { useEffect, useState } from "react";
import PetItem from "../../components/pet-item";
import PetItemShimmer from "../../utilities/shimmers/pet-item-shimmer";
import cat from "../../images/cat-sorry.png";
import LoadError from "./load-error";
const Breeds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div className="flex flex-col items-start mb-12  w-full">
      <p className="font-bold tracking-wider text-xl mb-5"> Explore by Breed</p>
      {isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
        </div>
      )}
      {!isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
          <PetItem></PetItem>
        </div>
      )}
      {!isLoading && error !== null && (
        <LoadError></LoadError>
      )}
    </div>
  );
};

export default Breeds;