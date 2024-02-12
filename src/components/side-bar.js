import {
  faBoxOpen,
  faHome,
  faPaw,
  faShoppingBasket,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoutUser } from "../services/auth-Service";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../slices/auth-slice";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed overflow-y-auto overflow-hidden h-full w-2/3 md:w-1/3  top-0 left-0 transition-transform duration-1000 transform z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start justify-start py-10 gap-y-3 w-full">
        <div className="flex flex-row items-center gap-x-3 mb-8 px-10">
          <FontAwesomeIcon className="text-xl" icon={faPaw}></FontAwesomeIcon>
          <p className="text-xl font-semibold"> Paws Nepal</p>
        </div>
        <div className="flex flex-row items-center gap-x-6 hover:bg-red-700 transition-all duration-700 ease-in w-full px-10 py-3 cursor-pointer">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <Link
            onClick={() => {
              toggleSidebar();
            }}
            to="/"
            className="font-semibold tracking-wider text-lg"
          >
            Profile
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6 hover:bg-red-700 transition-all duration-700 ease-in w-full px-10 py-3 cursor-pointer">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          <Link
            onClick={() => {
              toggleSidebar();
            }}
            to="/"
            className="font-semibold tracking-wider text-lg"
          >
            Home
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6 hover:bg-red-700 transition-all duration-700 ease-in w-full px-10 py-3 cursor-pointer">
          <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
          <Link
            onClick={() => {
              toggleSidebar();
            }}
            to="/"
            className="font-semibold tracking-wider text-lg"
          >
            Orders
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6 hover:bg-red-700 transition-all duration-700 ease-in w-full px-10 py-3 cursor-pointer">
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
          <Link
            onClick={() => {
              toggleSidebar();
            }}
            to="/"
            className="font-semibold tracking-wider text-lg"
          >
            My Cart
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6 hover:bg-red-700 transition-all duration-700 ease-in w-full px-10 py-3 cursor-pointer">
          <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
          <div
            onClick={async () => {
              toggleSidebar();
              await logoutUser().then(() => {
                dispatch(
                  authSliceActions.replaceLoggedInState({
                    user: null,
                    token: null,
                  })
                );
              });
              navigate("/login");
            }}
            className="font-semibold tracking-wider text-lg"
          >
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
