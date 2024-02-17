import {
  faCat,
  faDog,
  faFishFins,
  faKiwiBird,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useRef} from "react";
import HomePageDetails from "./home-details";

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

  const scrollRef = useRef(0);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current);
  });

  return (
    <div className="flex flex-col md:flex-row w-full gap-x-4 px-4 md:px-7 lg:px-11">
      <div className="flex flex-col w-full md:w-1/4 h-fit gap-y-28">
        <div className="flex flex-row flex-wrap items-center md:flex-col w-full md:items-start md:justify-start">
        <p className="hidden md:flex mb-5 font-semibold tracking-wider text-lg">
            {" "}
            Categories: {" "}
          </p>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800 px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faDog}></FontAwesomeIcon>
            <p> Dogs </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800 px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
            <p> Cats </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800  px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon>
            <p> Birds </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800  px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faFishFins}></FontAwesomeIcon>
            <p> Fishes </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center hover:bg-zinc-800  px-3 py-2 rounded-lg mb-2 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            <p> Others </p>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-7">
          <div className="bg-red-600  text-center py-2 rounded-lg transition-all ease-out duration-700 hover:bg-red-700 cursor-pointer">
            {" "}
            See all
          </div>
          <div className="flex flex-row gap-x-3 w-full flex-wrap gap-y-2">
            {tags.map((tag) => {
              return (
                <div className="bg-zinc-800 px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-700 transition-all ease-out duration-700">
                  {tag}
                </div>
              );
            })}
          </div>
        </div> */}
      </div>

      {/* main-div */}
      <div className="flex flex-col w-full md:w-3/4 items-start">
        <HomePageDetails></HomePageDetails>
      </div>
    </div>
  );
};

export default Home;
