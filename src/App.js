import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header";
import PetDetailsPage from "./pages/pet-details/pet-details";
import PetFoodDetails from "./pages/pet-details/pet-food-details";
import CartPage from "./pages/cart/cart";
import AddInventory from "./pages/add-inventory/add-inventory";
import CheckOut from "./pages/check-out/check-out";
import PetAccessoryDetails from "./pages/pet-details/pet-accessory-details";
import Register from "./pages/register/register";
import Login from "./pages/login/login";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App text-white">
      <Header></Header>
      <div className=" py-4 md:py-12 bg-zinc-900 w-full">
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route
            exact
            path="/"
            element={<Navigate replace to="/home" />}
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/home/my-cart" element={<CartPage />}></Route>
          <Route
            exact
            path="/home/pets/fido"
            element={<PetDetailsPage />}
          ></Route>
          <Route
            exact
            path="/home/pets/foods/chicken"
            element={<PetFoodDetails />}
          ></Route>
          <Route
            exact
            path="/home/pets/accessories/chew-toy"
            element={<PetAccessoryDetails />}
          ></Route>
          <Route
            exact
            path="/inventory/add-inventory"
            element={<AddInventory />}
          ></Route>
          <Route
            exact
            path="/home/my-cart/check-out"
            element={<CheckOut />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

// px-10 md:px-36
