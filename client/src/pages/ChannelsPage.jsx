// import React from "react";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import ChannelsVideos from "../components/ChannelsVideos";

// const ChannelsPage = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [subsList, setSubsList] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(currentUser);
//   const [borderColor, setBorderColor] = useState("");

//   const handleUserClick = (channel) => {
//     setSelectedUser(channel);
//   };

//   useEffect(() => {
//     const border = [
//       "border-yellow-300",
//       "border-lime-300",
//       "border-green-300",
//       "border-cyan-300",
//       "border-purple-300",
//       "border-fuchsia-300",
//       "border-pink-300",
//       "border-rose-300",
//     ];
//     const randomBorderColor = border[Math.floor(Math.random() * border.length)];
//     setBorderColor(randomBorderColor);
//   }, [selectedUser]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `/api/users/subscribed/${currentUser._id}`
//         );
//         setSubsList(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (currentUser) {
//       fetchData();
//     }
//   }, [currentUser]);

//   return (
//     <div className="text-white mt-2 m-5 h-screen">
//       {/* Top row for subscribed channels */}
//       <div className="p-4 flex overflow-x-auto space-x-4 hover:cursor-pointer">
//         <img
//           key={currentUser._id}
//           src={currentUser.image}
//           alt={currentUser.name}
//           className={`h-12 w-12 rounded-full object-cover ${
//             selectedUser === currentUser ? `${borderColor} border-[3px]` : ""
//           }`}
//           onClick={() => handleUserClick(currentUser)}
//         />
//         {subsList.map(
//           (channel) =>
//             currentUser._id !== channel._id && (
//               <img
//                 key={channel._id}
//                 src={channel.image}
//                 alt={channel.name}
//                 className={`h-12 w-12 rounded-full object-cover ${
//                   selectedUser === channel ? `${borderColor} border-[3px]` : ""
//                 }`}
//                 onClick={() => handleUserClick(channel)}
//               />
//             )
//         )}
//         {/* 'All' button */}
//         <button
//           onClick={() => navigate("/subscribed-channels")}
//           className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center"
//         >
//           All
//         </button>
//       </div>

//       <ChannelsVideos userId={currentUser._id} />
//     </div>
//   );
// };

// export default ChannelsPage;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ChannelsVideos from "../components/ChannelsVideos";

const ChannelsPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [subsList, setSubsList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(currentUser); // Initialize with currentUser
  const [borderColor, setBorderColor] = useState("");

  const handleUserClick = (channel) => {
    setSelectedUser(channel); // Update the selectedUser when another user is clicked
  };

  useEffect(() => {
    const border = [
      "border-yellow-300",
      "border-lime-300",
      "border-green-300",
      "border-cyan-300",
      "border-purple-300",
      "border-fuchsia-300",
      "border-pink-300",
      "border-rose-300",
    ];
    const randomBorderColor = border[Math.floor(Math.random() * border.length)];
    setBorderColor(randomBorderColor);
  }, [selectedUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/users/subscribed/${currentUser._id}`
        );
        setSubsList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (currentUser) {
      fetchData();
    }
  }, [currentUser]);

  return (
    <div className="text-white mt-2 m-5 h-screen">
      {/* Top row for subscribed channels */}
      <div className="p-4 flex overflow-x-auto space-x-4 hover:cursor-pointer">
        <img
          key={currentUser._id}
          src={currentUser.image}
          alt={currentUser.name}
          className={`h-12 w-12 rounded-full object-cover ${
            selectedUser === currentUser ? `${borderColor} border-[3px]` : ""
          }`}
          onClick={() => handleUserClick(currentUser)}
        />
        {subsList.map(
          (channel) =>
            currentUser._id !== channel._id && (
              <img
                key={channel._id}
                src={channel.image}
                alt={channel.name}
                className={`h-12 w-12 rounded-full object-cover ${
                  selectedUser === channel ? `${borderColor} border-[3px]` : ""
                }`}
                onClick={() => handleUserClick(channel)}
              />
            )
        )}
        {/* 'All' button */}
        <button
          onClick={() => navigate("/subscribed-channels")}
          className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center"
        >
          All
        </button>
      </div>

      {/* Pass the selectedUser._id instead of currentUser._id */}
      <ChannelsVideos userId={selectedUser._id} />
    </div>
  );
};

export default ChannelsPage;
