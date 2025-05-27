import React from "react";
import logo from "../assets/logos/Group 1.png";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
      <img
        src={logo}
        alt="Loading..."
        className="h-[50px] w-auto animate-bounce"
      />
    </div>
  );
};

export default Spinner;
