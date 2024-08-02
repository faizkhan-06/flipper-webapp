// import React from "react";
// import { useState } from "react";
// import ChannelHeader from "../components/ui/ChannelHeader";
// import VideoList from "../components/ui/VideoList";
// import AboutPopup from "../components/ui/AboutPopup";

// function ChannelPage() {
//   const [showAboutPopup, setShowAboutPopup] = useState(false);

//   const handleAboutClick = () => {
//     setShowAboutPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowAboutPopup(false);
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <ChannelHeader onAboutClick={handleAboutClick} />
//       <div className="container mx-auto px-4 py-6">
//         <VideoList />
//       </div>
//       {showAboutPopup && <AboutPopup onClose={handleClosePopup} />}
//     </div>
//   );
// }

// export default ChannelPage;
import React, { useState } from "react";
import { HiHome, HiVideoCamera, HiUser } from "react-icons/hi";
import cover from "../../img/1343656.jpg";
import profile from "../../img/profile.jpg";

const ChannelPage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [videos] = useState([
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: { cover },
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    {
      title: "Assassin's Creed: Legacy of the Brotherhood",
      thumbnail: "https://via.placeholder.com/150",
      uploadTime: "1 month ago",
      views: "100k views",
      channel: {
        name: "Assassin's Master",
        logo: "https://via.placeholder.com/50",
        subscribers: "200K subs",
      },
    },
    // Add more dummy video data here
  ]);
  const [filter, setFilter] = useState("latest");

  const filteredVideos = filter === "latest" ? [...videos].reverse() : videos;

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <VideoGrid videos={videos} />;
      case "videos":
        return <VideosSection videos={filteredVideos} setFilter={setFilter} />;
      case "about":
        return <AboutSection />;
      default:
        return <VideoGrid videos={videos} />;
    }
  };

  return (
    <div className="p-4 text-gray-200">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <img
          src={profile}
          alt="Channel Logo"
          className="sm:h-12 sm:w-12 h-16 rounded-full mb-2 sm:mb-0"
        />
        <div className="flex flex-col sm:ml-4">
          <h1 className="text-xl font-bold">Channel Name</h1>
          <span className="text-gray-600 text-xs text-center sm:text-left">
            1.23M subscribers
          </span>
        </div>
        <button className="mt-2 sm:mt-0 sm:ml-12 bg-blue-900 text-white px-3 py-1 rounded-md">
          Subscribe
        </button>
      </div>
      <nav className="flex space-x-4 mb-4 text-sm">
        <button
          onClick={() => setActiveSection("home")}
          className={`flex items-center ${
            activeSection === "home"
              ? "text-gray-200 border-b-2 border-gray-200"
              : "text-gray-600"
          }`}
        >
          <HiHome className="mr-1" /> Home
        </button>
        <button
          onClick={() => setActiveSection("videos")}
          className={`flex items-center ${
            activeSection === "videos"
              ? "text-gray-200 border-b-2 border-gray-200"
              : "text-gray-600"
          }`}
        >
          <HiVideoCamera className="mr-1" /> Videos
        </button>
        <button
          onClick={() => setActiveSection("about")}
          className={`flex items-center ${
            activeSection === "about"
              ? "text-gray-200 border-b-2 border-gray-200"
              : "text-gray-600"
          }`}
        >
          <HiUser className="mr-1" /> About
        </button>
      </nav>
      {renderSection()}
    </div>
  );
};

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
      {videos.map((video, index) => (
        <div key={index} className="p-0.5 h-96 rounded-2xl bg-gray-900">
          <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-96 p-4 rounded-lg overflow-hidden">
              <img src={cover} alt={video.title} className="rounded-lg" />
            </div>
            <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
              {video.title}
            </span>
            <div className="flex justify-start items-center w-96 pl-4 pr-4 space-x-5">
              <span className="w-10 rounded-full border-2 border-gray-900">
                <img
                  src={video.channel.logo}
                  alt="profile pic"
                  className="rounded-full"
                />
              </span>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span>{video.channel.name}</span>
                  <span className="text-xs text-gray-400">
                    {video.channel.subscribers}
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-400">{video.views} |</span>
                  <span className="text-xs text-gray-400">
                    {video.uploadTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const VideosSection = ({ videos, setFilter }) => {
  return (
    <div>
      <div className="mb-4 ">
        <label htmlFor="filter" className="mr-2">
          Filter by:
        </label>
        <select
          id="filter"
          className="border-[.5px] border-gray-600 text-gray-200 p-2 rounded-lg bg-gray-950"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <VideoGrid videos={videos} />
    </div>
  );
};

const AboutSection = () => {
  return (
    <div>
      <p>
        This is the description of the channel. Here you can add more details
        about the content, the creator, and other relevant information.
      </p>
    </div>
  );
};

export default ChannelPage;
