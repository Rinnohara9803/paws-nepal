import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header";
import PetDetailsPage from "./pages/pet-details/pet-details";
import PetFoodDetails from "./pages/pet-details/pet-food-details";
import CartPage from "./pages/cart/cart";

function App() {
  return (
    <div className="text-white bg-zinc-900">
      <Header></Header>
      <div className=" py-4 md:py-12 bg-zinc-900 w-full">
        <Routes>
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
        </Routes>
      </div>
    </div>
  );
}

export default App;

// px-10 md:px-36
