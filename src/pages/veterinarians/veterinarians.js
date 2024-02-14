import React from "react";
import VetItem from "../../components/vet-item";

const Veterinarians = () => {
  return (
    <div className="flex flex-col items-start justify-start px-10 md:px-36 w-full">
      <p className="text-2xl tracking-wider font-semibold text-white mb-5">
        {" "}
        Veterinarians
      </p>
      <p className="text-zinc-500 font-semibold tracking-wider mb-2">
        {" "}
        Find the right care for your pet
      </p>
      <input
        onChange={(e) => {
          //
        }}
        placeholder="Search for a vet"
        className="w-full px-3 py-2 mb-7 rounded-sm border border-solid bg-zinc-800"
      ></input>
      <p className="text-lg tracking-wider font-semibold text-white mb-5">
        {" "}
        Featured Vets
      </p>
      <VetItem></VetItem>
      <VetItem></VetItem>
      <VetItem></VetItem>
      <VetItem></VetItem>
      <VetItem></VetItem>
      <VetItem></VetItem>
      <VetItem></VetItem>
      <VetItem></VetItem>
    </div>
  );
};

export default Veterinarians;
