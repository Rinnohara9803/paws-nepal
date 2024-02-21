import React, { useEffect, useState } from "react";
import PetItem, { PetFoodItem } from "../../components/pet-item";
import PetItemShimmer from "../../utilities/shimmers/pet-item-shimmer";
import cat from "../../images/cat-sorry.png";
import LoadError from "./load-error";
import { inventorySliceActions } from "../../slices/inventory-slice";
import { fetchPetFoods } from "../../action-creators/inventory-action";
import { useDispatch, useSelector } from "react-redux";

const PetFoods = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const inventoryState = useSelector((state) => {
    return state.inventory;
  });

  const petFoods = inventoryState.petFoods;

  useEffect(() => {
    const fetchThePetFoods = async () => {
      setIsLoading(true);
      await fetchPetFoods()
        .then((data) => {
          if (data.result === "No product Avialable") {
            dispatch(
              inventorySliceActions.replacePetFoodsList({
                list: [],
              })
            );
          } else {
            console.log("here");
            console.log(data);
            console.log("food");
            dispatch(
              inventorySliceActions.replacePetFoodsList({
                list: data.result,
              })
            );
          }
          setIsLoading(false);
        })
        .catch((e) => {
          setError("Something went wrong.");
          setIsLoading(false);
        });
    };

    fetchThePetFoods();
  }, [dispatch]);
  return (
    <div className="flex flex-col items-start mb-12  w-full">
      <p className="font-bold tracking-wider text-xl mb-5"> Pet Foods</p>
      {isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
        </div>
      )}

      {!isLoading && petFoods.length === 0 && (
        <p className="my-20"> No pet foods available.</p>
      )}
      {!isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          {petFoods.map((petFood) => {
            return (
              <PetFoodItem
                name={petFood.name}
                image={petFood.image}
                brand={petFood.brand}
              ></PetFoodItem>
            );
          })}
        </div>
      )}
      {!isLoading && error !== null && <LoadError></LoadError>}
    </div>
  );
};

export default PetFoods;
