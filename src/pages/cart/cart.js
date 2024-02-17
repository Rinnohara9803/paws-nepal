import React, {useEffect, useRef} from "react";
import CartItem from "../../components/cart-item";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(0);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current);
  });

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
      <div className="flex flex-col items-start md:flex-row md:justify-end md:items-center mt-5 w-full gap-x-4 gap-y-4">
        <div className="bg-zinc-700 font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-red-800 transition-all ease-out duration-700">
          {" "}
          Continue Shopping
        </div>

        <div
          onClick={() => {
            navigate("/home/my-cart/check-out");
          }}
          className="bg-red-600 font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-red-800 transition-all ease-out duration-700"
        >
          {" "}
          Proceed to Checkout
        </div>
      </div>
    </div>
  );
};

export default CartPage;
