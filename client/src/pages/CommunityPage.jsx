// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CommunicationOptions from "../components/ui/CommunicationOptions"; // Adjust the path if needed
// import axios from "axios";
// import { useSelector } from "react-redux";

// const CommunityPage = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [subsList, setSubsList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("text");
//   const navigate = useNavigate();

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `/api/users/subscribed/${currentUser._id}`
//         );
//         // console.log(response.data);
//         setSubsList(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     // Call the async function
//     if (currentUser) {
//       fetchData();
//     }
//   }, [currentUser]);
//   //h-[calc(100vh-139px)]
//   return (
//     <div className="text-white mt-2 m-5 h-[calc(100vh-139px)]">
//       {/* Top row for subscribed channels */}
//       <div className="p-4 flex overflow-x-auto space-x-4">
//         <img
//           key={currentUser._id}
//           src={currentUser.image}
//           alt={currentUser.name}
//           className="h-12 w-12 rounded-full object-cover"
//         />
//         {subsList.map(
//           (channel) =>
//             currentUser._id != channel._id && (
//               <img
//                 key={channel._id}
//                 src={channel.image}
//                 alt={channel.name}
//                 className="h-12 w-12 rounded-full object-cover"
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

//       {/* Main content with sliding options */}
//       <div className=" h-full flex md:flex-row flex-col pt-0 p-4 space-x-4">
//         <div className=" h-fit w-full md:h-full md:w-fit flex justify-center  ">
//           <div className={`flex items-center `}>
//             <CommunicationOptions
//               selectedOption={selectedOption}
//               handleOptionClick={handleOptionClick}
//             />
//           </div>
//         </div>
//         <div className="w-full h-full mt-2 p-4  rounded-lg">
//           {selectedOption === "text" && <div>Text Channels Content</div>}
//           {selectedOption === "voice" && <div>Voice Channels Content</div>}
//           {selectedOption === "video" && (
//             <div className="flex flex-col justify-center items-center h-full bg-black border-[0.5px] border-gray-800 p-6 rounded-xl shadow-lg text-center">
//               <h2 className="text-2xl text-white mb-4">Join a Video Chat</h2>
//               <p className="text-gray-300 mb-6">
//                 Connect with others in a video call and collaborate in
//                 real-time.
//               </p>
//               <button className="border border-gray-700 rounded-lg px-4 py-2  text-white hover:bg-gray-900 transition duration-300">
//                 Join
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunicationPanel from "../components/ui/CommunicationPanel";
import axios from "axios";
import { useSelector } from "react-redux";

const CommunityPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [subsList, setSubsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("text");
  const [selectedUser, setSelectedUser] = useState(currentUser);
  const [borderColor, setBorderColor] = useState("");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleUserClick = (channel) => {
    setSelectedUser(channel);
  };

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

  return (
    // h-[calc(100vh-139px)
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

      {/* Main content */}
      <CommunicationPanel
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
        selectedUser={selectedUser}
      />
    </div>
  );
};

export default CommunityPage;
