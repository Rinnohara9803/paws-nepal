import { Rating } from "@mui/material";
import React, { useState } from "react";
import ReviewItem from "../../components/review-item";

const PetFoodDetails = () => {
  const [selectedTab, setSelectedTab] = useState("Details");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-start justify-start px-10 md:px-36 ">
      <p className="text-lg tracking-wider font-semibold text-zinc-500 mb-5">
        {" "}
        Home / Pets / <span className="text-white"> Food </span>
      </p>
      <div className="flex flex-row items-start gap-x-5 w-full">
        <div className="flex flex-col items-start w-2/3 gap-y-1">
          <p className="text-zinc-500 text-sm"> PetCo Brand</p>
          <p className="text-sm font-semibold tracking-wide">
            {" "}
            Nutrition first Adult Cat Food - Chicken and Brown Rice
          </p>
          <p className="text-zinc-500 text-sm">
            {" "}
            4.8 (1200+ reviews) | 6lb bag{" "}
          </p>
        </div>
        <div className="flex flex-col items-start w-1/3">
          <img
            className="h-48 rounded-lg object-cover w-full"
            src="https://www.wikihow.com/images/thumb/2/24/Draw-a-Cute-Cartoon-Cat-Step-7-Version-3.jpg/v4-460px-Draw-a-Cute-Cartoon-Cat-Step-7-Version-3.jpg"
            alt="paws-nepal"
          ></img>
          <p className="mt-2 text-zinc-500 font-semibold tracking-wider"> Rs. 250</p>
        </div>
      </div>

      {/* ratings */}

      <div className="flex flex-row gap-x-5 mt-5 w-2/3">
        <div className="flex flex-col items-start justify-start gap-y-1">
          <p className="font-bold tracking-wide text-xl"> 4.5</p>
          <Rating
            name="simple-controlled"
            value={4.5}
            precision={0.5}
            sx={{
              "& .MuiRating-iconFilled": {
                color: "red", // Change the filled star color
              },
              "& .MuiRating-iconEmpty": {
                borderColor: "red", // Change the border color
              },
              "& .MuiSvgIcon-root": {
                fill: "red", // Make the unfilled stars transparent
                //   stroke: "red", // Change the border color of the unfilled stars
              },
            }}
          />
          <p className="text-sm"> 1200 reviews</p>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <div className="flex flex-row items-center gap-x-2">
            <p>5</p>
            <div className="h-3 rounded-md w-96 bg-zinc-600 relative">
              <div
                style={{
                  width: "68%",
                }}
                className="h-3 rounded-md w-full bg-red-600 absolute left-0"
              ></div>
            </div>
            <p> 68%</p>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p>4</p>
            <div className="h-3 rounded-md w-96 bg-zinc-600 relative">
              <div
                style={{
                  width: "15%",
                }}
                className="h-3 rounded-md w-full bg-red-600 absolute left-0"
              ></div>
            </div>
            <p> 15%</p>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p>3</p>
            <div className="h-3 rounded-md w-96 bg-zinc-600 relative">
              <div
                style={{
                  width: "8%",
                }}
                className="h-3 rounded-md w-full bg-red-600 absolute left-0"
              ></div>
            </div>
            <p> 8%</p>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p>2</p>
            <div className="h-3 rounded-md w-96 bg-zinc-600 relative">
              <div
                style={{
                  width: "3%",
                }}
                className="h-3 rounded-md w-full bg-red-600 absolute left-0"
              ></div>
            </div>
            <p> 3%</p>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p>1</p>
            <div className="h-3 rounded-md w-96 bg-zinc-600 relative">
              <div
                style={{
                  width: "5%",
                }}
                className="h-3 rounded-md w-full bg-red-600 absolute left-0"
              ></div>
            </div>
            <p> 5%</p>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div className="flex flex-row mt-12 gap-x-10">
        <p
          onClick={() => {
            setSelectedTab("Details");
            scrollToSection("details-section");
          }}
          className={`cursor-pointer ${
            selectedTab === "Details"
              ? "border-b-2 border-b-white text-white"
              : "text-zinc-500 "
          } pb-1 font-semibold hover:text-white`}
        >
          {" "}
          Details
        </p>
        <p
          onClick={() => {
            setSelectedTab("Ingredients");
            scrollToSection("ingredients-section");
          }}
          className={`cursor-pointer ${
            selectedTab === "Ingredients"
              ? "border-b-2 border-b-white text-white"
              : " text-zinc-500"
          } pb-1  font-semibold hover:text-white`}
        >
          {" "}
          Ingredients
        </p>
        <p
          onClick={() => {
            setSelectedTab("Reviews");
            scrollToSection("reviews-section");
          }}
          className={`cursor-pointer ${
            selectedTab === "Reviews"
              ? "border-b-2 border-b-white text-white"
              : "text-zinc-500"
          } pb-1  font-semibold hover:text-white`}
        >
          {" "}
          Reviews
        </p>
      </div>
      <div style={{ height: "0.5px" }} className="w-full bg-white mb-4"></div>

      {/* details */}
      <div id="details-section" className="flex flex-col items-start w-full">
        <p className="font-semibold tracking-wider mt-6 mb-5"> Details </p>
        <div className="flex flex-row justify-between items-center w-full tracking-wider my-2">
          <p className="text-zinc-500"> Brand </p>
          <p className=""> PetCo Brand</p>
        </div>
        <div className="flex flex-row justify-between items-center  w-full tracking-wider my-2">
          <p className="text-zinc-500"> Model </p>
          <p className=""> Adult</p>
        </div>
        <div className="flex flex-row justify-between items-center  w-full tracking-wider my-2">
          <p className="text-zinc-500"> Weight </p>
          <p className=""> 60lb </p>
        </div>
        <div className="flex flex-row justify-between items-center  w-full tracking-wider my-2">
          <p className="text-zinc-500"> Flavour </p>
          <p className=""> Chicken and Brown Rice</p>
        </div>
      </div>

      {/* ingredients */}
      <div
        id="ingredients-section"
        className="flex flex-col items-start w-full"
      >
        <p className="font-semibold tracking-wider mt-6 mb-5"> Ingredients </p>
        <p className="text-start text-sm">
          {" "}
          Deboned chicken, chicken meal, brown rice, barley, oatmeal, chicken
          fat (preserved with mixed tocopherols), flaxseed, natural flavor,
          choline chloride, taurine, dried chicory root, Yucca schidigera
          extract, vitamins (vitamin E supplement, niacin supplement, thiamine
          mononitrate, d-calcium pantothenate, vitamin A supplement, pyridoxine
          hydrochloride, riboflavin supplement, vitamin D3 supplement, biotin,
          vitamin B12 supplement, folic acid), minerals (ferrous sulfate, zinc
          oxide, calcium carbonate, manganous oxide, copper sulfate, iron amino
          acid chelate, manganese amino acid chelate, zinc amino acid chelate,
          copper amino acid chelate, sodium selenite, cobalt carbonate,
          ethylenediamine dihydriodide), potassium chloride, dried Lactobacillus
          plantarum fermentation product, dried Enterococcus faecium
          fermentation product, dried Bacillus subtilis fermentation product,
          dried Bifidobacterium animalis fermentation product, dried
          Lactobacillus casei fermentation product, dried Lactobacillus
          acidophilus fermentation product.
        </p>
      </div>

      {/* reviews */}
      <div id="reviews-section" className="flex flex-col items-start w-full">
        <p className="font-semibold tracking-wider mt-6 mb-5"> Reviews </p>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
      </div>
    </div>
  );
};

export default PetFoodDetails;
