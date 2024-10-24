import React, { useState, useEffect } from "react";
import CommunicationOptions from "./CommunicationOptions";
import { useNavigate } from "react-router-dom";

const CommunicationPanel = ({
  selectedOption,
  handleOptionClick,
  selectedUser,
}) => {
  const [gradient, setGradient] = useState("");
  const navigate = useNavigate();

  const handleVideoRoomJoin = () => {
    navigate(`/video-room/${selectedUser.name}`);
  };
  const handleTextChannelClick = () => {
    navigate(`/text-room/${selectedUser.name}`);
  };
  const handleVoiceRoomJoin = () => {
    navigate(`/voice-room/${selectedUser.name}`);
  };

  useEffect(() => {
    // Generate color stops for darker gradients
    const colors = [
      "from-gray-800 to-gray-900",
      "from-blue-800 to-purple-900",
      "from-teal-900 to-blue-800",
      "from-indigo-900 to-gray-800",
      "from-black to-gray-800",
      "from-green-800 to-green-900",
      "from-purple-800 to-pink-900",
      "from-blue-900 to-cyan-900",
      "from-brown-800 to-gray-700",
      "from-gray-600 to-gray-800",
      "from-teal-800 to-teal-900",
      "from-purple-700 to-blue-800",
    ];

    // Select a random gradient whenever the selectedUser changes
    const randomGradient = colors[Math.floor(Math.random() * colors.length)];
    setGradient(randomGradient);
  }, [selectedUser]); // Change gradient when selectedUser changes

  return (
    <div className="h-full flex md:flex-row flex-col pt-0 p-4 space-x-4">
      <div className="h-fit w-full md:h-full md:w-fit flex justify-center">
        <div className="flex items-center">
          <CommunicationOptions
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
        </div>
      </div>
      <div className="w-full h-full mt-2 p-4 rounded-lg">
        {/* Display the selected user's name */}
        <h3
          className={`font-mono text-4xl font-extrabold text-white bg-gradient-to-r ${gradient} p-6 rounded-xl shadow-xl text-center transform hover:scale-105 hover:rotate-1 transition-transform duration-500 ease-out mb-6 backdrop-blur-lg bg-opacity-70`}
        >
          {selectedUser ? selectedUser.name : "No Channel Selected"}
        </h3>

        {selectedOption === "text" && (
          <div className="flex flex-col justify-center items-center h-full bg-black border-[0.5px] border-gray-800 p-6 rounded-xl shadow-lg text-center backdrop-blur-lg bg-opacity-50">
            <h2 className="text-2xl text-white mb-4">Text Channels</h2>
            <p className="text-gray-300 mb-6">
              Discuss topics, share ideas, and collaborate through text channel.
            </p>
            <button
              className="border border-gray-700 rounded-lg px-4 py-2 text-white hover:bg-gray-900 transition duration-300"
              onClick={handleTextChannelClick}
            >
              Join Text Channel
            </button>
          </div>
        )}

        {selectedOption === "voice" && (
          <div className="flex flex-col justify-center items-center h-full bg-black border-[0.5px] border-gray-800 p-6 rounded-xl shadow-lg text-center backdrop-blur-lg bg-opacity-50">
            <h2 className="text-2xl text-white mb-4">Join a Voice Chat</h2>
            <p className="text-gray-300 mb-6">
              Start a voice conversation and connect with others in real-time.
            </p>
            <button
              className="border border-gray-700 rounded-lg px-4 py-2 text-white hover:bg-gray-900 transition duration-300"
              onClick={handleVoiceRoomJoin}
            >
              Join Voice Channel
            </button>
          </div>
        )}

        {selectedOption === "video" && (
          <div className="flex flex-col justify-center items-center h-full bg-black border-[0.5px] border-gray-800 p-6 rounded-xl shadow-lg text-center backdrop-blur-lg bg-opacity-50">
            <h2 className="text-2xl text-white mb-4">Join a Video Chat</h2>
            <p className="text-gray-300 mb-6">
              Connect with others in a video call and collaborate in real-time.
            </p>
            <button
              className="border border-gray-700 rounded-lg px-4 py-2 text-white hover:bg-gray-900 transition duration-300"
              onClick={handleVideoRoomJoin}
            >
              Join Video Channel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationPanel;
