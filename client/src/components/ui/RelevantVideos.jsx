import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const RelevantVideos = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  const [channels, setChannels] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/api/videos/tags?tags=${tags}`);
        const videos = res.data;

        // Fetch channel information for each video
        const channelRequests = videos.map(async (video) => {
          const response = await axios.get(`/api/users/find/${video.userId}`);
          return { videoId: video._id, channel: response.data };
        });

        const channelsData = await Promise.all(channelRequests);
        const channelsMap = channelsData.reduce((acc, { videoId, channel }) => {
          acc[videoId] = channel;
          return acc;
        }, {});

        setVideos(videos);
        setChannels(channelsMap);
      } catch (error) {
        console.error("Error fetching videos or channels:", error);
        setError(error.message);
      }
    };

    fetchVideos();
  }, [tags]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <ul className="space-y-2">
        {videos.map((video) => (
          <li
            key={video._id}
            className="flex items-center space-x-2 p-2 border border-gray-900 rounded-lg hover:bg-gray-900 transition duration-300 bg-gray-950 hover:cursor-pointer"
          >
            <img
              src={video.imageUrl}
              alt={video.title}
              className="w-20 h-12 object-cover rounded-lg"
            />
            <div>
              <Link to={`/video/${video._id}`}>
                <span className="font-semibold text-gray-300 truncate max-w-xs block">
                  {video.title}
                </span>
              </Link>
              <div className="text-xs text-gray-600">
                <div>{channels[video._id]?.name}</div>
                <div className="flex gap-1">
                  <div>{video.views} views</div>
                  <div>{format(video.createdAt)}</div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RelevantVideos;
