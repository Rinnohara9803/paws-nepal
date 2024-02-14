import React, { useEffect } from "react";
import { Rating } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";

const WriteReview = ({ showWriteReview, close }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
              "heading-text-2-active",
              "header-data-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-data"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div
      onClick={close}
      className="fixed z-50 inset-0 flex justify-center items-center bg-gray-800 bg-opacity-45"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="heading-text-1 bg-zinc-800 p-8 rounded-lg shadow-lg mx-4 md:mx-0"
      >
        <div className="flex flex-row justify-between">
          <p className="header-data text-xl text-white tracking-wider font-semibold">
            Write a review
          </p>
          <FontAwesomeIcon
            className="text-end cursor-pointer"
            onClick={close}
            icon={faClose}
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col w-full items-start gap-y-3 mt-5">
          <p className="header-data text-start text-lg text-white tracking-wider font-normal">
            Overall, how satisfied are you with this product?
          </p>
          <Rating
            className="header-data"
            name="simple-controlled"
            value={1}
            precision={0.5}
            sx={{
              "& .MuiRating-iconFilled": {
                color: "red",
                fontSize: "2.5rem", // Change the filled star color
              },
              "& .MuiRating-iconEmpty": {
                borderColor: "red",
                fontSize: "2.5rem", // Change the border color
              },
              "& .MuiSvgIcon-root": {
                fill: "red",
                fontSize: "2.5rem", // Make the unfilled stars transparent
                //   stroke: "red", // Change the border color of the unfilled stars
              },
            }}
          />
          <textarea
            className="header-data bg-zinc-700 px-3 py-3 w-full rounded-lg"
            rows={5}
            placeholder="Please leave us a review ..."
          ></textarea>
          <div className="flex flex-row gap-x-4 justify-end w-full">
            <div className="bg-red-500 text-center rounded-md px-3 py-2 hover:bg-red-700 transition-all duration-700 cursor-pointer">
              {" "}
              Submit
            </div>
            <div
              onClick={close}
              className="bg-zinc-700 text-center rounded-md px-3 py-2 hover:bg-red-600 transition-all duration-700 cursor-pointer"
            >
              {" "}
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
