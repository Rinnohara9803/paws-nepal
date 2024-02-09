import {
  faPaw,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="bg-zinc-900 flex flex-row w-full justify-between items-center px-5 py-5 border-b-2 border-b-white">
      <div className="flex flex-row items-center gap-x-3">
        <FontAwesomeIcon className="text-xl" icon={faPaw}></FontAwesomeIcon>
        <p className="text-lg font-semibold"> Paws Nepal</p>
      </div>
      <div className="flex flex-row items-center gap-x-3">
        <div className="flex items-center bg-zinc-700 rounded-lg mr-5 relative">
          <FontAwesomeIcon
            className="absolute left-3 text-gray-500 "
            icon={faSearch}
          ></FontAwesomeIcon>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-zinc-700 w-full pl-9 py-2 px-3 rounded-lg"
          />
        </div>
        <div className="bg-red-600 px-5 py-2 rounded-lg flex flex-row items-center justify-center gap-x-4">
          <FontAwesomeIcon
            className="text-sm"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
          <p className="font-semibold text-sm"> Cart (0) </p>
        </div>
        <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
