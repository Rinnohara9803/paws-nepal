import {
  faCat,
  faDog,
  faKiwiBird,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PetItem from "../../components/pet-item";

const Home = () => {
  const tags = [
    "Dry Food",
    "Wet Food",
    "Treats",
    "Toys",
    "Beds",
    "Bowls",
    "Leashes",
  ];

  return (
    <div className="flex flex-row w-full gap-x-4 px-4 md:px-7 lg:px-11">
      <div className="flex flex-col w-1/4 h-full justify-between">
        <div className="flex flex-col w-full items-start justify-start">
          <p className="mb-5 font-semibold tracking-wider text-lg">
            {" "}
            Categories{" "}
          </p>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800 w-full px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faDog}></FontAwesomeIcon>
            <p> Dogs </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800 w-full px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
            <p> Cats </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800 w-full px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon>
            <p> Birds </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800 w-full px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            <p> Others </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="bg-red-600  text-center py-2 rounded-lg">
            {" "}
            See all
          </div>
          <div className="flex flex-row gap-x-3 w-full flex-wrap gap-y-2">
            {tags.map((tag) => {
              return (
                <div className="bg-zinc-800 px-3 py-1 rounded-xl">{tag}</div>
              );
            })}
          </div>
        </div>
      </div>

      {/* main-div */}
      <div className="flex flex-col w-3/4 items-start">
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
    </div>
  );
};

export default Home;
