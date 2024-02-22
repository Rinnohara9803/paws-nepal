import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ title, description, index, color }) => (
  <div className={`bg-zinc-700 p-4 rounded-2xl`}>
    <h1 className="text-xl text-left font-medium">{title}</h1>
    <p className="text-left mt-2 text-sm font-normal w-4/5">{description}</p>
    <div className="flex justify-between mt-5 mb-5">
      <button
        className={`bg-red-600 text-white rounded-full px-5 py-1 mt-4 hover:transform transition-all hover:translate-x-2 duration-300 ease-in-out`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      
    </div>
  </div>
);

const MedicalServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const services = [
    {
      title: "Breeds",
      description:
        "Explore a diverse selection of top-notch pet breeds. Find the perfect companion for you and your family.",
      number: 1,
    },
    {
      title: "Pet Foods",
      description:
        "Discover premium pet foods crafted to provide optimal nutrition and satisfaction for your beloved pets.",
      number: 2,
    },
    {
      title: "Accessories",
      description:
        "Browse through a wide range of high-quality accessories to enhance your pet's happiness.",
      number: 3,
    },
    {
      title: "Veterinarians",
      description:
        "Connect with experienced and caring veterinarians dedicated to ensuring your pet's health and well-being.",
      number: 4,
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Initial check on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % services.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + services.length) %
        services.length
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-10 gap-y-5 lg:mt-20 sm:mt-10">
      {services.map((data, index) => (
        <div
          key={index}
          className={`w-full ${
            !isSmallScreen || index === currentIndex ? "block" : "hidden"
          }`}
        >
          <ServiceCard
            title={data.title}
            description={data.description}
            index={index + 1}
            color={index % 2 === 0 ? "blue" : "purple"}
          />
        </div>
      ))}

      {/* Buttons outside the map function */}

      {isSmallScreen && (
        <>
          <button
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-slate-500  px-2 py-1 rounded-xl text-3xl  btn-left"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          </button>
          <button
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-slate-500  px-2 py-1 rounded-xl text-3xl  btn-right"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </>
      )}
    </div>
  );
};

export default MedicalServices;
