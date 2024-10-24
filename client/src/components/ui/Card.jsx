// import React from "react";
// import { format } from "timeago.js";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Card = ({ video }) => {
//   const [channel, setChannel] = useState({});
//   const [error, setError] = useState(null); // Define the error state

//   const fetchChannel = async () => {
//     try {
//       const response = await axios.get(`/api/users/find/${video.userId}`);
//       setChannel(response.data); // Assuming response.data is an array of videos
//     } catch (error) {
//       console.error("Error fetching video:", error);
//       setError(error.message); // Set the error message
//     }
//   };
//   useEffect(() => {
//     fetchChannel();
//   }, [video.userId]);

//   return (
//     <>
//       <Link to={`/video/${video._id}`}>
//         <div className="p-0.5 h-96 rounded-2xl bg-gray-900">
//           <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
//             <div className="max-w-96 p-4 rounded-lg overflow-hidden">
//               <img
//                 src={video.imageUrl}
//                 alt="../img/1343656.jpg"
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="  min-w-96 p-3 ">
//               <span className=" p-3 text-lg text-justify overflow-hidden">
//                 {/* Assassin's Creed: Legacy of the Brotherhood */}
//                 {video.title}
//               </span>
//             </div>
//             <div className="flex justify-start items-center  min-w-96 pl-4 pr-4 space-x-5">
//               <span className="rounded-full border-2 border-gray-900">
//                 <img
//                   src={channel.image}
//                   // alt="../img/profile.jpg"
//                   className=" w-10 h-10 rounded-full"
//                 />
//               </span>
//               <div className="flex flex-col">
//                 <div className="flex flex-col">
//                   {/* <span>Assasin's Master</span> */}
//                   <span className=" text-sm">{channel.name}</span>
//                   <span className="text-xs text-gray-400">200K subs</span>
//                 </div>
//                 <div className="flex gap-1">
//                   <span className="text-xs text-gray-400">
//                     {video.views}views |
//                   </span>
//                   <span className="text-xs text-gray-400">
//                     {format(video.createdAt)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default Card;

import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ video }) => {
  const [channel, setChannel] = useState({});
  const [error, setError] = useState(null);

  const fetchChannel = async () => {
    try {
      const response = await axios.get(`/api/users/find/${video.userId}`);
      setChannel(response.data);
    } catch (error) {
      console.error("Error fetching video:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchChannel();
  }, [video.userId]);

  return (
    <div className="p-0.5 h-96 rounded-2xl bg-gray-900">
      <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Link to={`/video/${video._id}`}>
          <div className="max-w-96 p-4 rounded-lg overflow-hidden">
            <img
              src={video.imageUrl}
              alt="Video Thumbnail"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <div className="min-w-96 p-3">
            <span className="p-3 text-lg text-justify overflow-hidden">
              {video.title}
            </span>
          </div>
        </Link>
        <Link to={`/channel-profile/${channel._id}`}>
          <div className="flex justify-start items-center min-w-96 pl-4 pr-4 space-x-5">
            <span className="rounded-full border-2 border-gray-900">
              <img
                src={channel.image}
                alt="Channel Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </span>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-sm">{channel.name}</span>
                <span className="text-xs text-gray-400">
                  {channel.subscribers} subscribers
                </span>
              </div>
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
