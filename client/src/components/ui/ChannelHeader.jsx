import React from "react";
import icon from "../../../img/1343656.jpg";

function ChannelHeader({ onAboutClick }) {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Channel Avatar"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Channel Name</h1>
          <p className="text-gray-400">1M subscribers</p>
          <p className="text-gray-400">
            This is a sample description of the channel. It can include...{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={onAboutClick}
            >
              more
            </span>
          </p>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-red-600 px-4 py-2 rounded text-white">
          Subscribe
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded text-white">
          Join
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded text-white">
          Share
        </button>
      </div>
    </div>
  );
}

export default ChannelHeader;
