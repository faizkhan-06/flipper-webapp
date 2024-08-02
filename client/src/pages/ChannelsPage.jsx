import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import cover from "../../img/1343656.jpg"; // Placeholder image

const subscribedChannels = [
  {
    id: 1,
    name: "Channel 1",
    profileImage: cover,
    subscribers: "1.2M",
    videos: [
      {
        id: 1,
        title: "Video 1",
        thumbnail: cover,
        views: "1.2M",
        uploaded: "1 month ago",
      },
      {
        id: 2,
        title: "Video 2",
        thumbnail: cover,
        views: "800K",
        uploaded: "2 months ago",
      },
    ],
  },
  {
    id: 2,
    name: "Channel 2",
    profileImage: cover,
    subscribers: "800K",
    videos: [
      {
        id: 1,
        title: "Video 1",
        thumbnail: cover,
        views: "2.3M",
        uploaded: "3 weeks ago",
      },
    ],
  },
  // Add more channels and videos as needed
];

const ChannelsPage = () => {
  const [selectedChannelId, setSelectedChannelId] = useState(null);

  const handleChannelClick = (channelId) => {
    setSelectedChannelId(channelId);
  };

  const getVideosToDisplay = () => {
    if (selectedChannelId) {
      return subscribedChannels.find(
        (channel) => channel.id === selectedChannelId
      ).videos;
    }
    return subscribedChannels.flatMap((channel) => channel.videos);
  };

  return (
    <div className="p-4 text-gray-200 min-h-screen bg-gray-950">
      <h1 className="text-3xl font-bold mb-4">Subscribed Channels</h1>

      <div className="flex overflow-x-auto mb-4 space-x-4 p-2 bg-gray-950 border-[.5px] border-gray-700 rounded-lg">
        <button
          className={`flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 ${
            selectedChannelId === null
              ? "border-blue-500"
              : "border-transparent"
          }`}
          onClick={() => handleChannelClick(null)}
        >
          <FaList className="w-full h-full text-gray-400 p-2 bg-gray-950 rounded-full" />
        </button>
        {subscribedChannels.map((channel) => (
          <button
            key={channel.id}
            className={`flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 ${
              selectedChannelId === channel.id
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => handleChannelClick(channel.id)}
          >
            <img
              src={channel.profileImage}
              alt={channel.name}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {selectedChannelId ? (
          subscribedChannels
            .filter((channel) => channel.id === selectedChannelId)
            .map((channel) => (
              <div key={channel.id}>
                <div className="flex items-center mb-4">
                  <img
                    src={channel.profileImage}
                    alt={channel.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">{channel.name}</h2>
                    <p className="text-sm text-gray-400">
                      {channel.subscribers} subscribers
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
                  {channel.videos.map((video) => (
                    <div
                      key={video.id}
                      className="p-0.5 h-96 rounded-2xl bg-gray-900"
                    >
                      <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="w-96 p-4 rounded-lg overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="rounded-lg"
                          />
                        </div>
                        <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
                          {video.title}
                        </span>
                        <div className="flex justify-start items-center w-96 pl-4 pr-4 space-x-5">
                          <span className="w-10 rounded-full border-2 border-gray-900">
                            <img
                              src={channel.profileImage}
                              alt="profile pic"
                              className="rounded-full"
                            />
                          </span>
                          <div className="flex flex-col">
                            <div className="flex flex-col">
                              <span>{channel.name}</span>
                              <span className="text-xs text-gray-400">
                                {channel.subscribers} subs
                              </span>
                            </div>
                            <div className="flex gap-1">
                              <span className="text-xs text-gray-400">
                                {video.views} views |
                              </span>
                              <span className="text-xs text-gray-400">
                                {video.uploaded}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getVideosToDisplay().map((video) => (
              <div
                key={video.id}
                className="p-0.5 h-96 rounded-2xl bg-gray-900"
              >
                <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="w-96 p-4 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="rounded-lg"
                    />
                  </div>
                  <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
                    {video.title}
                  </span>
                  <div className="flex justify-start items-center w-96 pl-4 pr-4 space-x-5">
                    <span className="w-10 rounded-full border-2 border-gray-900">
                      <img
                        src={video.thumbnail}
                        alt="profile pic"
                        className="rounded-full"
                      />
                    </span>
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <span>Channel Name</span>
                        <span className="text-xs text-gray-400">Subs info</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-xs text-gray-400">
                          {video.views} views |
                        </span>
                        <span className="text-xs text-gray-400">
                          {video.uploaded}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelsPage;
