import React from "react";
import CartItem from "../../components/cart-item";

const CartPage = () => {
  return (
    <div className="flex flex-col items-start justify-start px-10 md:px-36">
      <p className="text-lg tracking-wider font-semibold text-zinc-500 mb-5">
        {" "}
        Home / <span className="text-white"> Cart </span>
      </p>
      <div className="flex flex-col items-start justify-start w-full">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
      <div className="flex flex-row justify-between items-center mt-5 w-full">
        <p className="text-zinc-500"> Subtotal</p>
        <p className="font-semibold"> Rs. 250 </p>
      </div>
      <div className="flex flex-row justify-between items-center mt-5 mb-6 w-full">
        <p className="text-zinc-500"> Total</p>
        <p className="font-semibold"> Rs. 250 </p>
      </div>
      <div className="flex flex-row justify-end items-center mt-5 w-full gap-x-4">
        <div className="bg-zinc-700 font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-red-800 transition-all ease-out duration-700">
          {" "}
          Continue Shopping
        </div>
        <div className="bg-red-600 font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-red-800 transition-all ease-out duration-700">
          {" "}
          Proceed to Checkout
        </div>
      </div>
    </div>
  );
};

export default CartPage;