  import React, { useState, useEffect } from "react";
  import {
    faAdd,
    faBars,
    faBell,
    faPaw,
    faRightToBracket,
    faSearch,
    faShoppingCart,
    faSignOut,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useNavigate } from "react-router-dom";
  import Sidebar from "./side-bar";
  import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../action-creators/auth-action";
import { authSliceActions } from "../slices/auth-slice";

  const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const dispatch = useDispatch();

    const toggleMenu = () => {
      setShowMenu(!showMenu); // Corrected the toggle logic
    };

    const navigate = useNavigate();

    const authState = useSelector((state) => {
      return state.auth;
    });

    const user = authState.user;

    return (
      <div className="bg-zinc-900 flex flex-row w-full justify-between items-center px-5 py-5 border-b-2 border-b-white sticky top-0 z-20">
        <Sidebar isOpen={showMenu} toggleSidebar={toggleMenu}></Sidebar>
        <div onClick={() => {
          navigate('/home');
        }} className="flex flex-row items-center gap-x-3">
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
          {user && user.role === "admin" && (
            <div
              onClick={() => {
                navigate("/inventory/add-inventory");
              }}
              className="flex flex-row items-center gap-x-4 bg-red-700 rounded-lg px-3 py-2 text-sm hover:bg-red-800 transition-all ease-out duration-700 cursor-pointer"
            >
              <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
              <p className="tracking-wider mr-3 font-semibold">
                Add Inventory
              </p>
            </div>
          )}
          {/* <p className="tracking-wider mr-3 hover:text-red-600 transition-all ease-out duration-700 cursor-pointer">
            {" "}
            Inventory{" "}
          </p> */}

          {user && user.role !== "admin" && (
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
          )}
          <div
            onClick={() => {
              navigate("/search");
            }}
            className="bg-zinc-700 rounded-lg px-3 py-2 text-sm hover:bg-zinc-800 transition-all ease-out duration-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </div>
          {user && <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm hover:bg-zinc-800 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </div>}
          {user && <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm hover:bg-zinc-800 transition-all ease-out duration-700 cursor-pointer">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>}
          {user && (
            <div
              onClick={async () => {
                await logoutUser().then(() => {
                  navigate('/login');
                  dispatch(
                    authSliceActions.replaceLoggedInState({
                      user: null,
                      token: null,
                    })
                  );
                });
              }}
              className=" cursor-pointer bg-zinc-700 px-5 py-2 rounded-lg flex flex-row items-center justify-center gap-x-4"
            >
              <FontAwesomeIcon
                className="text-sm"
                icon={faSignOut}
              ></FontAwesomeIcon>
              <p className="font-semibold text-sm"> Log Out </p>
            </div>
          )}
          {!user && (
          <div className="flex flex-row sm:gap-x-1 md:gap-x-5">
            <div
              onClick={() => {
                navigate("/login");
              }}
              className="flex flex-row cursor-pointer items-center border border-solid border-white rounded-sm hover:bg-black bg-transparent text-black-400 py-1.5 px-4   hover:text-white transition-all duration-300  ease-in-out"
            >
              <FontAwesomeIcon className="pr-3" icon={faUser}></FontAwesomeIcon>
              <p className="text-sm">Login</p>
            </div>

            <div
              onClick={() => {
                navigate("/register");
              }}
              className="flex flex-row cursor-pointer items-center border border-solid border-red-500 rounded-sm hover:bg-red-500 bg-transparent text-red-500 py-1.5 px-4   hover:text-white transition-all duration-300  ease-in-out"
            >
              <FontAwesomeIcon
                className="pr-3"
                icon={faRightToBracket}
              ></FontAwesomeIcon>
              <p className="text-sm">Sign Up</p>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };

  export default Header;
