import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Notifications = () => {
  const notifications = [
    {
      title: "Appointment Booked",
      message: "You have booked your appointment with Dr. Prakash Shrestha.",
      time: "4 June, 2024",
    },
    {
      title: "Medical Report",
      message: "Your pet's medical report has been posted.",
      time: "4 June, 2024",
    },
    {
      title: "Appointment Booked",
      message: "You have booked your appointment with Dr. Sagar Karki.",
      time: "4 June, 2024",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 mx-10 items-start">
      <p className="font-bold text-xl tracking-wider"> Notifications </p>
      {notifications.map((notification) => {
        return (
          <NotificationItem notification={notification}></NotificationItem>
        );
      })}
    </div>
  );
};

export default Notifications;

const NotificationItem = ({ notification }) => {
  return (
    <div className="w-full flex flex-row items-center bg-zinc-800 rounded-lg px-4 py-3 gap-x-8 cursor-pointer hover:bg-red-500 duration-700 ease-in-out transition-all">
      <FontAwesomeIcon icon={faBell} className="text-xl"></FontAwesomeIcon>

      <div className="flex flex-col items-start gap-y-1.5">
        <p className="font-semibold tracking-wider"> {notification.title} </p>
        <p className="tracking-wider"> {notification.message}</p>
        <p className="text-sm"> {notification.time}</p>
      </div>
    </div>
  );
};
