import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Accessories from "./accessories";
import PetFoods from "./pet-foods";
import Breeds from "./breeds";

const HomePageDetails = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <Accessories></Accessories>
      <PetFoods></PetFoods>
      <Breeds></Breeds>
    </div>
  );
};

export default HomePageDetails;
