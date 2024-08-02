import React from "react";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ video }) => {
  const [channel, setChannel] = useState({});
  const [error, setError] = useState(null); // Define the error state

  const fetchChannel = async () => {
    try {
      const response = await axios.get(`/users/find/${video.userId}`);
      setChannel(response.data); // Assuming response.data is an array of videos
    } catch (error) {
      console.error("Error fetching video:", error);
      setError(error.message); // Set the error message
    }
  };
  useEffect(() => {
    fetchChannel();
  }, [video.userId]);
  return (
    <>
      <Link to={`/video/${video._id}`}>
        <div className="p-0.5 h-96 rounded-2xl bg-gray-900">
          <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-96 p-4 rounded-lg overflow-hidden">
              <img
                src={video.imageUrl}
                alt="../img/1343656.jpg"
                className="rounded-lg"
              />
            </div>
            <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
              {/* Assassin's Creed: Legacy of the Brotherhood */}
              {video.title}
            </span>
            <div className="flex justify-start items-center w-96 pl-4 pr-4 space-x-5">
              <span className="w-10 rounded-full border-2 border-gray-900">
                <img
                  src={channel.image}
                  // alt="../img/profile.jpg"
                  className="rounded-full"
                />
              </span>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  {/* <span>Assasin's Master</span> */}
                  <span>{channel.name}</span>
                  <span className="text-xs text-gray-400">200K subs</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-400">
                    {video.views}views |
                  </span>
                  <span className="text-xs text-gray-400">
                    {format(video.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
