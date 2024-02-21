import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 shawdow sm:w-full px-10 md:px-16 lg:px-28 flex flex-col lg:flex-row lg:justify-start py-20 md:py-10 gap-x-10">
      {/* first */}
      <div className=" flex flex-col justify-start text-start">
        <h2 className="text-white font-semibold">Paws Nepal</h2>
        <p className=" text-xs  text-white">
          Copyright @2024,{" "}
          <span className="text-slate-400 font-semibold">
            Paws Nepal Pvt Ltd
          </span>
          . All rights reserved.
        </p>
        <div className="mt-4 cursor-pointer">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="border-2 border-white px-3.5 py-2 rounded-sm hover:text-blue-500 hover:border-blue-500 text-white"
              style={{}}
            />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="border-2 border-white ml-2 px-3 py-2 rounded-sm hover:text-red-600 hover:border-red-600 text-white"
              style={{}}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="border-2 border-white ml-2 px-3 py-2 rounded-sm  hover:border-blue-500 hover:text-blue-500 text-white"
              style={{}}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start text-white gap-y-3 pt-5 md:pt-0">
        <div className="pb-4 flex flex-col">
          <p className="font-semibold text-lg "> Quick Links </p>
          <div className="h-0.5 w-9 bg-white mt-1"></div>
        </div>
        <p
          onClick={() => {
            navigate("/home");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          Home
        </p>

        <p
          onClick={() => {
            navigate("/about-us");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          About Us
        </p>

        <p
          onClick={() => {
            navigate("/contact-us");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Contact Us
        </p>
      </div>
    </div>
  );
};

export default Footer;
