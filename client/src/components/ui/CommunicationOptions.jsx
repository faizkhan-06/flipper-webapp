import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { RiVoiceprintFill } from "react-icons/ri";
import { PiVideoConference } from "react-icons/pi";

const CommunicationOptions = ({ selectedOption, handleOptionClick }) => {
  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-0 md:flex-col md:space-y-4">
      <button
        className={`w-14 h-14 flex items-center justify-center border-[0.5px] border-gray-700 rounded-full ${
          selectedOption === "text" && "bg-slate-800"
        }`}
        onClick={() => handleOptionClick("text")}
      >
        <AiOutlineMessage size={24} className="text-center" />{" "}
        {/* Icon for text */}
      </button>
      <button
        className={`w-14 h-14 flex items-center justify-center border-[0.5px] border-gray-700 rounded-full ${
          selectedOption === "voice" && "bg-slate-800"
        }`}
        onClick={() => handleOptionClick("voice")}
      >
        <RiVoiceprintFill size={24} className="text-center" />{" "}
        {/* Icon for voice */}
      </button>
      <button
        className={`w-14 h-14 flex items-center justify-center border-[0.5px] border-gray-700 rounded-full ${
          selectedOption === "video" && "bg-slate-800"
        }`}
        onClick={() => handleOptionClick("video")}
      >
        <PiVideoConference size={24} className="text-center" />{" "}
        {/* Icon for video */}
      </button>
    </div>
  );
};

export default CommunicationOptions;
