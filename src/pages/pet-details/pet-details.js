import React from "react";

const PetDetailsPage = () => {
  return (
    <div className="flex flex-col items-start justify-start px-10 md:px-36">
      <p className="text-lg tracking-wider font-semibold text-zinc-400 mb-5">
        {" "}
        Home / <span className="text-white"> Pets </span>
      </p>
      <p className="text-2xl font-bold mb-5"> Fido </p>
      <img
        className="w-full md:w-2/3 lg:w-1/2 h-96 object-cover rounded-lg "
        src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/07/Outdoor-kitten-explores-the-garden.jpeg"
        alt="paws-nepal"
      ></img>
      <p className="font-semibold tracking-wider mt-8"> About </p>
      <div style={{ height: "0.5px" }} className="w-full bg-white my-4"></div>
      <div className="flex flex-row justify-between w-full tracking-wider">
        <div className="flex flex-col items-start w-1/2 gap-y-1">
          <p className="text-zinc-500"> Name</p>
          <p>Fido</p>
        </div>
        <div className="flex flex-col items-start w-1/2 gap-y-1">
          <p className="text-zinc-500"> Breed</p>
          <p>Bengal Cat</p>
        </div>
      </div>
      <div style={{ height: "0.5px" }} className="w-full bg-white my-4"></div>
      <div className="flex flex-row justify-between w-full tracking-wider">
        <div className="flex flex-col items-start w-1/2 gap-y-1">
          <p className="text-zinc-500"> Age</p>
          <p>5</p>
        </div>
        <div className="flex flex-col items-start w-1/2 gap-y-1">
          <p className="text-zinc-500"> Sex </p>
          <p>Male</p>
        </div>
      </div>
      <div style={{ height: "0.5px" }} className="w-full bg-white my-4"></div>
      <div className="flex flex-row justify-between w-full tracking-wider">
        <div className="flex flex-col items-start w-1/2 gap-y-1">
          <p className="text-zinc-500"> Weight</p>
          <p>80lbs</p>
        </div>
      </div>
      <p className="font-semibold tracking-wider mt-11">
        {" "}
        Medical Information{" "}
      </p>
      <div style={{ height: "0.5px" }} className="w-full bg-white my-4"></div>
      <div className="flex flex-row justify-between w-full tracking-wider">
        <div className="flex flex-col items-start w-1/2 gap-y-1"> 
          <p className="text-zinc-500"> Vaccination Status</p>
          <p>Up To Date </p>
        </div>
        <div className="flex flex-col items-start w-1/2 gap-y-1">
          <p className="text-zinc-500"> Microchip Id</p>
          <p>123456789</p>
        </div>
      </div>

      <p className="font-semibold tracking-wider mt-11"> Care Instructions </p>
      <div style={{ height: "0.5px" }} className="w-full bg-white my-4"></div>
      <div className="flex flex-row justify-start items-center gap-x-10 w-full tracking-wider">
        <p className="text-zinc-500"> Feeding </p>
        <p className=""> Twice a day, 2 cups</p>
      </div>
      <div style={{ height: "0.5px" }} className="w-full bg-white my-4"></div>
      <div className="flex flex-row justify-start items-center gap-x-10 w-full tracking-wider">
        <p className="text-zinc-500"> Exercise </p>
        <p className=""> 30 minutes, 2 times a day</p>
      </div>
    </div>
  );
};

export default PetDetailsPage;
