import React from "react";
import "./css/SpinnerSquare.css"; // Import the CSS file

const SpinnerSquare = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row gap-5 w-24 h-30">
        <div className="w-4 h-20 bg-blue-400 rounded animate-square-1"></div>
        <div className="w-4 h-20 bg-blue-400 rounded animate-square-2"></div>
        <div className="w-4 h-20 bg-blue-400 rounded animate-square-3"></div>
      </div>
    </div>
  );
};

export default SpinnerSquare;
