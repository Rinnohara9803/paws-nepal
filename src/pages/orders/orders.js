import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { faBell, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Orders = () => {
  const orders = [
    {
      title: "Order #1",
      time: "4 June, 2024",
    },
    {
      title: "Order #2",
      time: "4 June, 2024",
    },
    {
      title: "Order #3",
      time: "4 June, 2024",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 mx-10 items-start">
      <p className="font-bold text-xl tracking-wider"> Orders </p>
      {orders.map((notification) => {
        return (
          <OrderItem notification={notification}></OrderItem>
        );
      })}
    </div>
  );
};

export default Orders;

const OrderItem = ({ notification: order }) => {
  return (
    <div className="w-full flex flex-row items-center bg-zinc-800 rounded-lg px-4 py-3 gap-x-8 cursor-pointer hover:bg-red-500 duration-700 ease-in-out transition-all">
      <FontAwesomeIcon icon={faBook} className="text-xl"></FontAwesomeIcon>

      <div className="flex flex-col items-start gap-y-1.5">
        <p className="font-semibold tracking-wider"> {order.title} </p>
        {/* <p className="tracking-wider"> {order.message}</p> */}
        <p className="text-sm"> {order.time}</p>
      </div>
    </div>
  );
};
