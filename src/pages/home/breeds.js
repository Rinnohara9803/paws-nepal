import React, { useEffect, useState } from "react";
import PetItem from "../../components/pet-item";
import PetItemShimmer from "../../utilities/shimmers/pet-item-shimmer";
import LoadError from "./load-error";
import { fetchPets } from "../../action-creators/inventory-action";
import { useDispatch, useSelector } from "react-redux";
import { inventorySliceActions } from "../../slices/inventory-slice";

const Breeds = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const inventoryState = useSelector((state) => {
    return state.inventory;
  });

  const pets = inventoryState.pets;

  useEffect(() => {
    const fetchThePets = async () => {
      setIsLoading(true);
      await fetchPets()
        .then((data) => {
          dispatch(
            inventorySliceActions.replacePetsList({
              list: data.result,
            })
          );
          setIsLoading(false);
        })
        .catch((e) => {
          setError("Something went wrong.");
          setIsLoading(false);
        });
    };

    fetchThePets();

    return () => {
    };

  }, [dispatch]);

  return (
    <div className="flex flex-col items-start mb-12  w-full">
      <p className="font-bold tracking-wider text-xl mb-5"> Explore by Breed</p>
      {isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
          <PetItemShimmer></PetItemShimmer>
        </div>
      )}
      {!isLoading && pets.length === 0 && (
        <p className="my-20"> No pets available.</p>
      )}
      {!isLoading && error === null && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full">
          {pets.map((pet) => {
            return <PetItem name={pet.name} image={pet.image} breed={pet.breed}></PetItem>;
          })}
        </div>
      )}
      {!isLoading && error !== null && <LoadError></LoadError>}
    </div>
  );
};

export default Breeds;
