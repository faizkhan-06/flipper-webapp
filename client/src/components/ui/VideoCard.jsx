import React from "react";
import icon from "../../../img/1343656.jpg";

function VideoCard({ video }) {
  return (
    <div className="bg-gray-800 p-4 rounded mb-4">
      <img
        src={icon}
        alt={video.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{video.title}</h2>
      <p className="text-gray-400">
        {video.views} • {video.date}
      </p>
    </div>
  );
}

export default VideoCard;
