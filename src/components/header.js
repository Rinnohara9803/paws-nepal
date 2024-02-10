import React, { useState, useEffect } from "react";
import {
  faBars,
  faBell,
  faPaw,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "./side-bar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Corrected the toggle logic
  };

  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 flex flex-row w-full justify-between items-center px-5 py-5 border-b-2 border-b-white">
      <Sidebar isOpen={showMenu} toggleSidebar={toggleMenu}></Sidebar>
      <div className="flex flex-row items-center gap-x-3">
        <FontAwesomeIcon className="text-xl" icon={faPaw}></FontAwesomeIcon>
        <p className="text-lg font-semibold"> Paws Nepal</p>
      </div>
      <div className="flex md:hidden mt-1.5 pr-4 ">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl cursor-pointer transition-transform duration-500 ease-in-out"
          style={{
            transform: showMenu ? "rotate(90deg) " : "rotate(0deg)",
          }}
          skks
          onClick={toggleMenu}
        />
      </div>
      {showMenu && (
        <div
          onClick={toggleMenu}
          className="fixed h-full w-full bg-black opacity-30 top-0 left-0"
        ></div>
      )}

      <div className="hidden md:flex flex-row items-center gap-x-3">
        <p className="tracking-wider mr-3 hover:text-red-600 transition-all ease-out duration-700 cursor-pointer">
          {" "}
          Orders{" "}
        </p>
        {/* <p className="tracking-wider mr-3 hover:text-red-600 transition-all ease-out duration-700 cursor-pointer">
          {" "}
          Inventory{" "}
        </p> */}
        <div className="flex items-center bg-zinc-700 rounded-lg mr-5 relative">
          <FontAwesomeIcon
            className="absolute left-3 text-gray-500"
            icon={faSearch}
          ></FontAwesomeIcon>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-zinc-700 w-full pl-9 py-2 px-3 rounded-lg"
          />
        </div>
        <div
          onClick={() => {
            navigate("/home/my-cart");
          }}
          className=" cursor-pointer bg-red-600 px-5 py-2 rounded-lg flex flex-row items-center justify-center gap-x-4"
        >
          <FontAwesomeIcon
            className="text-sm"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
          <p className="font-semibold text-sm"> Cart (0) </p>
        </div>
        <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm hover:bg-zinc-800 transition-all ease-out duration-700 cursor-pointer">
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </div>
        <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm hover:bg-zinc-800 transition-all ease-out duration-700 cursor-pointer">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
