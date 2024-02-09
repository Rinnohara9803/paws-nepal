import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const CartItem = () => {
  const [value, setvalue] = useState(0);

  return (
    <div className="flex flex-row items-center justify-between w-full mb-5">
      <div className="flex flex-row items-center">
        <img
          className="h-20 w-20 rounded-md object-cover mr-4"
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          alt="paws-nepal"
        ></img>
        <div className="flex flex-col items-start justify-center text-sm tracking-wider gap-y-1">
          <p className="font-semibold"> Honest Kitchen Dehydrated Dog Food</p>
          <p className="text-zinc-500"> Flavour: Chicken</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div onClick={() => {
            setvalue((prevVal) => {
                if (prevVal === 1) {
                    return 1;
                } else {
                    return prevVal - 1
                }
            });
        }} className="cursor-pointer bg-zinc-700 h-8 w-8 rounded-full text-center flex flex-row justify-center items-center">
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </div>
        <p className="font-semibold"> {value} </p>
        <div onClick={() => {
            setvalue((prevVal) => prevVal + 1);
        }} className="cursor-pointer bg-zinc-700 h-8 w-8 rounded-full text-center flex flex-row justify-center items-center">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
