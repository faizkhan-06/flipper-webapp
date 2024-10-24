// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { format } from "timeago.js";

// const ChannelsVideos = ({ userId }) => {
//   const [videos, setVideos] = useState([]);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`/api/users/find/${userId}`);
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     const fetchUserVideos = async () => {
//       try {
//         const response = await axios.get(`/api/videos/user/${userId}`);
//         setVideos(response.data);
//         setVideos(response.data);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchUserData();
//     fetchUserVideos();
//   }, [userId]);
//   return <VideoGrid channel={userData} videos={videos} />;
// };

// const VideoGrid = ({ channel, videos }) => {
//   return (
//     <>
//       {videos.length === 0 ? (
//         <div className="flex justify-center items-center h-96">
//           <span className="text-gray-400 text-lg">No videos available</span>
//         </div>
//       ) : (
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
//           {videos.map((video, index) => (
//             <div key={index} className="p-0.5 h-96 rounded-2xl bg-gray-900">
//               <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                 <div className="w-96 p-4 rounded-lg overflow-hidden">
//                   <img
//                     src={video.imageUrl}
//                     alt={video.title}
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
//                   {video.title}
//                 </span>
//                 <div className="flex justify-between items-center w-96 pl-4 pr-4 space-x-5">
//                   <span className="rounded-full border-2 border-gray-900">
//                     <img
//                       src={channel.image}
//                       alt="Channel Profile"
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                   </span>
//                   <div className="flex flex-col flex-1">
//                     <div className="flex flex-col">
//                       <span>{channel.name}</span>
//                       <span className="text-xs text-gray-400">
//                         {channel.subscribers} subscribers
//                       </span>
//                     </div>
//                     <div className="flex gap-1">
//                       <span className="text-xs text-gray-400">
//                         {video.views} views |
//                       </span>
//                       <span className="text-xs text-gray-400">
//                         {format(video.createdAt)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default ChannelsVideos;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const ChannelsVideos = ({ userId }) => {
  const [videos, setVideos] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/find/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchUserVideos = async () => {
      try {
        const response = await axios.get(`/api/videos/user/${userId}`);
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchUserData();
    fetchUserVideos();
  }, [userId]);

  return (
    <>
      {userData && (
        <div className="flex justify-center mt-5">
          <h2 className="text-2xl font-semibold">{userData.name}'s Channel</h2>
        </div>
      )}
      <VideoGrid channel={userData} videos={videos} />
    </>
  );
};

const VideoGrid = ({ channel, videos }) => {
  return (
    <>
      {videos.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <span className="text-gray-400 text-lg">No videos available</span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
          {videos.map((video, index) => (
            <Link to={`/video/${video._id}`}>
              <div key={index} className="p-0.5 h-96 rounded-2xl bg-gray-900">
                <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="w-96 p-4 rounded-lg overflow-hidden">
                    <img
                      src={video.imageUrl}
                      alt={video.title}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
                    {video.title}
                  </span>
                  <div className="flex justify-between items-center w-96 pl-4 pr-4 space-x-5">
                    <span className="rounded-full border-2 border-gray-900">
                      <img
                        src={channel?.image}
                        alt="Channel Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </span>
                    <div className="flex flex-col flex-1">
                      <span className="font-semibold">{channel?.name}</span>{" "}
                      {/* Channel name */}
                      <span className="text-xs text-gray-400">
                        {channel?.subscribers} subscribers{" "}
                        {/* Subscribers count */}
                      </span>
                      <div className="flex gap-1">
                        <span className="text-xs text-gray-400">
                          {video.views} views |
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
          ))}
        </div>
      )}
    </>
  );
};

export default ChannelsVideos;
