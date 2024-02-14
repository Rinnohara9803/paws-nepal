import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleDate = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed bg-zinc-950 overflow-y-auto overflow-hidden h-full w-3/4 md:w-1/2 z-10 top-0 right-0 transition-transform duration-1000 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start justify-start py-10 gap-y-3 px-5 mt-16 w-full">
        <div className="flex flex-row justify-between items-center w-full mb-2">
          <p className="font-bold tracking-wider text-xl">
            {" "}
            Schedule an Appointment
          </p>
          <FontAwesomeIcon
            className="text-xl bg-zinc-800"
            icon={faClose}
          ></FontAwesomeIcon>{" "}
        </div>
        <p className="text-start font-semibold text-zinc-500">
          {" "}
          Select a date and time below. If you don't see a time that works for
          you, please reach out to your vet.{" "}
        </p>
        <p className="text-start font-semibold text-lg">
          {" "}
          Choose a date
        </p>
      </div>
    </div>
  );
};

export default ScheduleDate;
