// import React, { useState, useEffect } from "react";
// import {
//   useJoin,
//   useIsConnected,
//   useLocalMicrophoneTrack,
//   usePublish,
//   useRemoteUsers,
//   LocalUser,
//   RemoteUser,
// } from "agora-rtc-react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const VoiceRoom = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { voiceRoomId } = useParams(); // Room ID from URL params
//   const appId = import.meta.env.VITE_AGORA_APPID; // Provide your app ID here
//   const token = null; // Token is set to null

//   const [calling, setCalling] = useState(false);
//   const [micOn, setMic] = useState(true);

//   // Join the channel with appId and roomId (used as channel name)
//   useJoin({ appid: appId, channel: voiceRoomId, token: token }, calling);

//   // Local microphone track
//   const { localMicrophoneTrack, isSpeaking } = useLocalMicrophoneTrack(micOn);
//   usePublish([localMicrophoneTrack]);

//   // Get remote users
//   const remoteUsers = useRemoteUsers();
//   const isConnected = useIsConnected();

//   return (
//     <div className="min-h-screen bg-black text-white p-4">
//       <div className="flex justify-center">
//         {isConnected ? (
//           <div className="space-y-4">
//             {/* Local User */}
//             <div
//               className={`p-4 rounded-lg transition-all ${
//                 isSpeaking
//                   ? "border-4 border-purple-500"
//                   : "border-2 border-gray-400"
//               }`}
//             >
//               <LocalUser
//                 audioTrack={localMicrophoneTrack}
//                 micOn={micOn}
//                 cover={currentUser.image}
//               >
//                 <span className="text-lg">You</span>
//               </LocalUser>
//             </div>

//             {/* Remote Users */}
//             {remoteUsers.map((user) => (
//               <div
//                 key={user.uid}
//                 className="p-4 rounded-lg border-2 border-gray-400"
//               >
//                 <RemoteUser user={user} cover={user.image}>
//                   <span className="text-lg">User {user.uid}</span>
//                 </RemoteUser>
//               </div>
//             ))}

//             {/* Control buttons */}
//             <div className="flex space-x-4 mt-4">
//               <button
//                 className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
//                 onClick={() => setMic((prev) => !prev)}
//               >
//                 {micOn ? "Turn Off Mic" : "Turn On Mic"}
//               </button>

//               <button
//                 className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500"
//                 onClick={() => setCalling((prev) => !prev)}
//               >
//                 {calling ? "Leave Channel" : "Join Channel"}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center space-y-4">
//             <h2 className="text-2xl">Join Voice Room</h2>
//             <button
//               className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500"
//               onClick={() => setCalling(true)}
//               disabled={!voiceRoomId || !appId}
//             >
//               Join Channel
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Initialize Agora client
// // const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

// // const App = () => (
// //   <AgoraRTCProvider client={client}>
// //     <VoiceRoom />
// //   </AgoraRTCProvider>
// // );

// export default VoiceRoom;

// // import React, { useState, useEffect } from "react";
// // import {
// //   useJoin,
// //   useIsConnected,
// //   useLocalMicrophoneTrack,
// //   usePublish,
// //   useRemoteUsers,
// //   LocalUser,
// //   RemoteUser,
// // } from "agora-rtc-react";
// // import { useParams } from "react-router-dom";

// // const VoiceRoom = () => {
// //   const { voiceRoomId } = useParams(); // Room ID from URL params
// //   const appId = import.meta.env.VITE_AGORA_APPID; // Provide your app ID here
// //   const token = null; // Token is set to null

// //   const [calling, setCalling] = useState(false);
// //   const [micOn, setMic] = useState(true);

// //   useEffect(() => {
// //     console.log("VoiceRoom ID: ", voiceRoomId);
// //     console.log("Agora App ID: ", appId);
// //   }, [voiceRoomId, appId]);

// //   // Join the channel with appId and roomId (used as channel name)
// //   const joinStatus = useJoin(
// //     { appid: appId, channel: voiceRoomId, token: token },
// //     calling
// //   );

// //   // Local microphone track
// //   const { localMicrophoneTrack, isSpeaking } = useLocalMicrophoneTrack(micOn);
// //   usePublish([localMicrophoneTrack]);

// //   // Get remote users
// //   const remoteUsers = useRemoteUsers();
// //   const isConnected = useIsConnected();

// //   // Check connection status
// //   useEffect(() => {
// //     console.log("Connection status: ", isConnected);
// //     console.log("Remote users: ", remoteUsers);
// //   }, [isConnected, remoteUsers]);

// //   return (
// //     <div className="min-h-screen bg-black text-white p-4">
// //       <div className="flex justify-center">
// //         {isConnected ? (
// //           <div className="space-y-4">
// //             {/* Local User */}
// //             <div
// //               className={`p-4 rounded-lg transition-all ${
// //                 isSpeaking
// //                   ? "border-4 border-purple-500"
// //                   : "border-2 border-gray-400"
// //               }`}
// //             >
// //               <LocalUser
// //                 audioTrack={localMicrophoneTrack}
// //                 micOn={micOn}
// //                 cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
// //               >
// //                 <span className="text-lg">You</span>
// //               </LocalUser>
// //             </div>

// //             {/* Remote Users */}
// //             {remoteUsers.map((user) => (
// //               <div
// //                 key={user.uid}
// //                 className="p-4 rounded-lg border-2 border-gray-400"
// //               >
// //                 <RemoteUser
// //                   user={user}
// //                   cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
// //                 >
// //                   <span className="text-lg">User {user.uid}</span>
// //                 </RemoteUser>
// //               </div>
// //             ))}

// //             {/* Control buttons */}
// //             <div className="flex space-x-4 mt-4">
// //               <button
// //                 className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
// //                 onClick={() => setMic((prev) => !prev)}
// //               >
// //                 {micOn ? "Turn Off Mic" : "Turn On Mic"}
// //               </button>

// //               <button
// //                 className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500"
// //                 onClick={() => setCalling((prev) => !prev)}
// //               >
// //                 {calling ? "Leave Channel" : "Join Channel"}
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="flex flex-col items-center space-y-4">
// //             <h2 className="text-2xl">Join Voice Room</h2>
// //             <button
// //               className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500"
// //               onClick={() => setCalling(true)}
// //               disabled={!voiceRoomId || !appId}
// //             >
// //               Join Channel
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VoiceRoom;
// import React, { useState } from "react";
// import {
//   useJoin,
//   useIsConnected,
//   useLocalMicrophoneTrack,
//   usePublish,
//   useRemoteUsers,
//   LocalUser,
//   RemoteUser,
// } from "agora-rtc-react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
// import { FaPhone, FaPhoneSlash } from "react-icons/fa6";

// const VoiceRoom = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { voiceRoomId } = useParams(); // Room ID from URL params
//   const appId = import.meta.env.VITE_AGORA_APPID; // Provide your app ID here
//   const token = null; // Token is set to null

//   const [calling, setCalling] = useState(false);
//   const [micOn, setMic] = useState(true);

//   // Join the channel with appId and roomId (used as channel name)
//   useJoin({ appid: appId, channel: voiceRoomId, token: token }, calling);

//   // Local microphone track
//   const { localMicrophoneTrack, isSpeaking } = useLocalMicrophoneTrack(micOn);
//   usePublish([localMicrophoneTrack]);

//   // Get remote users
//   const remoteUsers = useRemoteUsers();
//   const isConnected = useIsConnected();

//   return (
//     <div className="min-h-screen bg-black text-white p-4">
//       <div className="flex justify-center">
//         {isConnected ? (
//           //   <div className="space-y-4">
//           //     {/* Local User */}
//           //     <div
//           //       className={`p-4 rounded-lg transition-all ${
//           //         isSpeaking
//           //           ? "border-4 border-purple-500"
//           //           : "border-2 border-gray-400"
//           //       }`}
//           //     >
//           //       <LocalUser
//           //         audioTrack={localMicrophoneTrack}
//           //         micOn={micOn}
//           //         cover={currentUser?.image || "default-avatar.png"} // Use currentUser.image for avatar
//           //       >
//           //         <span className="text-lg">You</span>
//           //       </LocalUser>
//           //     </div>

//           //     {/* Remote Users */}
//           //     {remoteUsers.map((user) => (
//           //       <div
//           //         key={user.uid}
//           //         className="p-4 rounded-lg border-2 border-gray-400"
//           //       >
//           //         <RemoteUser
//           //           user={user}
//           //           cover={user.image || "default-avatar.png"} // Set default avatar if user image is not available
//           //         >
//           //           <span className="text-lg">User {user.uid}</span>
//           //         </RemoteUser>
//           //       </div>
//           //     ))}

//           //     {/* Control icons */}
//           //     <div className="flex space-x-8 mt-4 text-3xl">
//           //       {/* Toggle microphone */}
//           //       <div
//           //         className="cursor-pointer hover:text-gray-300"
//           //         onClick={() => setMic((prev) => !prev)}
//           //       >
//           //         {micOn ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
//           //       </div>

//           //       {/* Join/Leave channel */}
//           //       <div
//           //         className="cursor-pointer hover:text-gray-300"
//           //         onClick={() => setCalling((prev) => !prev)}
//           //       >
//           //         {calling ? <FaPhoneSlash /> : <FaPhone />}
//           //       </div>
//           //     </div>
//           //   </div>
//           <div className="min-h-screen bg-black text-white p-4">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
//               {/* Local User */}
//               <div
//                 className={` w-32 h-32 flex items-center justify-center rounded-full transition-all ${
//                   isSpeaking
//                     ? "border-4 border-purple-500"
//                     : "border-2 border-gray-400"
//                 }`}
//               >
//                 <LocalUser
//                   audioTrack={localMicrophoneTrack}
//                   micOn={micOn}
//                   cover={currentUser?.image || "default-avatar.png"} // Use currentUser.image for avatar
//                   className=" rounded-full"
//                 >
//                   <div className="flex px-3 py-1 rounded-full">
//                     {/* <img
//                       src={currentUser?.image || "default-avatar.png"}
//                       alt="You"
//                       className="w-24 h-24 rounded-full object-cover mb-2"
//                     /> */}
//                     <span className="text-lg text-center">You</span>
//                   </div>
//                 </LocalUser>
//               </div>

//               {/* Remote Users */}
//               {remoteUsers.map((user) => (
//                 <div
//                   key={user.uid}
//                   className="w-48 h-48 flex items-center justify-center rounded-lg border-2 border-gray-400"
//                 >
//                   <RemoteUser
//                     user={user}
//                     cover={user.image || "default-avatar.png"}
//                   >
//                     <div className="flex flex-col items-center">
//                       <img
//                         src={user.image || "default-avatar.png"}
//                         alt={`User ${user.uid}`}
//                         className="w-24 h-24 rounded-full object-cover mb-2"
//                       />
//                       <span className="text-lg">User {user.uid}</span>
//                     </div>
//                   </RemoteUser>
//                 </div>
//               ))}
//             </div>

//             {/* Control icons */}
//             <div className="flex justify-center space-x-8 mt-8 text-3xl">
//               {/* Toggle microphone */}
//               <div
//                 className="cursor-pointer hover:text-gray-300"
//                 onClick={() => setMic((prev) => !prev)}
//               >
//                 {micOn ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
//               </div>

//               {/* Join/Leave channel */}
//               <div
//                 className="cursor-pointer hover:text-gray-300"
//                 onClick={() => setCalling((prev) => !prev)}
//               >
//                 {calling ? <FaPhoneSlash /> : <FaPhone />}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center space-y-4">
//             <h2 className="text-2xl">Join Voice Room</h2>
//             <div
//               className="cursor-pointer bg-green-600 p-4 rounded-full text-3xl hover:bg-green-500"
//               onClick={() => setCalling(true)}
//               disabled={!voiceRoomId || !appId}
//             >
//               <FaPhone />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VoiceRoom;

// import React, { useState } from "react";
// import {
//   useJoin,
//   useIsConnected,
//   useLocalMicrophoneTrack,
//   usePublish,
//   useRemoteUsers,
//   LocalUser,
//   RemoteUser,
// } from "agora-rtc-react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
// import { FaPhone, FaPhoneSlash } from "react-icons/fa6";

// const VoiceRoom = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { voiceRoomId } = useParams(); // Room ID from URL params
//   const appId = import.meta.env.VITE_AGORA_APPID; // Provide your app ID here
//   const token = null; // Token is set to null

//   const [calling, setCalling] = useState(false);
//   const [micOn, setMic] = useState(true);

//   // Join the channel with appId and roomId (used as channel name)
//   useJoin({ appid: appId, channel: voiceRoomId, token: token }, calling);

//   // Local microphone track
//   const { localMicrophoneTrack, isSpeaking } = useLocalMicrophoneTrack(micOn);
//   usePublish([localMicrophoneTrack]);

//   // Get remote users
//   const remoteUsers = useRemoteUsers();
//   const isConnected = useIsConnected();

//   return (
//     <div className="min-h-screen bg-black text-white p-4 flex flex-col justify-between">
//       <div className="flex justify-center">
//         {isConnected ? (
//           <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
//             {/* Local User */}
//             <div className=" flex flex-col justify-center items-center gap-2">
//               <div
//                 className={`w-32 h-32 flex flex-col items-center justify-center rounded-full transition-all ${
//                   isSpeaking
//                     ? "border-4 border-purple-500"
//                     : "border-2 border-gray-400"
//                 }`}
//               >
//                 <LocalUser
//                   audioTrack={localMicrophoneTrack}
//                   micOn={micOn}
//                   cover={currentUser?.image || "default-avatar.png"}
//                   className=" rounded-full"
//                 ></LocalUser>
//               </div>
//               <h3 className="text-lg text-center w-full">You</h3>
//             </div>

//             {/* Remote Users */}
//             {/* {remoteUsers.map((user) => (
//               <div
//                 key={user.uid}
//                 className="w-32 h-32 flex flex-col items-center justify-center rounded-lg border-2 border-gray-400"
//               >
//                 <RemoteUser
//                   user={user}
//                   cover={user.image || "default-avatar.png"}
//                 >
//                   <img
//                     src={user.image || "default-avatar.png"}
//                     alt={`User ${user.uid}`}
//                     className="w-24 h-24 rounded-full object-cover mb-2"
//                   />
//                   <span className="text-lg">User {user.uid}</span>
//                 </RemoteUser>
//                 {console.log(remoteUsers)}
//               </div>
//             ))} */}
//             {remoteUsers.map((user) => (
//               <div
//                 key={user.uid}
//                 className="w-32 h-32 flex flex-col items-center justify-center rounded-lg border-2 border-gray-400"
//               >
//                 <RemoteUser user={user}>
//                   {user.hasVideo ? (
//                     <video
//                       autoPlay
//                       playsInline
//                       className="w-24 h-24 rounded-full object-cover mb-2"
//                       ref={(ref) => {
//                         if (ref) {
//                           user.videoTrack?.play(ref);
//                         }
//                       }}
//                     />
//                   ) : (
//                     <img
//                       src={user.image || "default-avatar.png"}
//                       alt={`User ${user.uid}`}
//                       className="w-24 h-24 rounded-full object-cover mb-2"
//                     />
//                   )}
//                   <span className="text-lg">User {user.uid}</span>
//                 </RemoteUser>
//               </div>
//             ))}

//             {/* Control icons */}
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-8 flex justify-center space-x-8 text-3xl">
//               {/* Toggle microphone */}
//               <div
//                 className="cursor-pointer hover:text-gray-300"
//                 onClick={() => setMic((prev) => !prev)}
//               >
//                 {micOn ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
//               </div>

//               {/* Join/Leave channel */}
//               <div
//                 className="cursor-pointer hover:text-gray-300"
//                 onClick={() => setCalling((prev) => !prev)}
//               >
//                 {calling ? <FaPhoneSlash /> : <FaPhone />}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center space-y-4">
//             <h2 className="text-2xl">Join Voice Room</h2>
//             <div
//               className="cursor-pointer bg-green-600 p-4 rounded-full text-3xl hover:bg-green-500"
//               onClick={() => setCalling(true)}
//               disabled={!voiceRoomId || !appId}
//             >
//               <FaPhone />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default VoiceRoom;

// import React, { useEffect, useState } from "react";
// import AgoraRTM from "agora-rtm-sdk";
// import {
//   useJoin,
//   useIsConnected,
//   useLocalMicrophoneTrack,
//   usePublish,
//   useRemoteUsers,
//   LocalUser,
//   RemoteUser,
// } from "agora-rtc-react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
// import { FaPhone, FaPhoneSlash } from "react-icons/fa6";

// const VoiceRoom = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { voiceRoomId } = useParams();
//   const appId = import.meta.env.VITE_AGORA_APPID;
//   const token = null;

//   const [calling, setCalling] = useState(false);
//   const [micOn, setMic] = useState(true);
//   const [users, setUsers] = useState([]);

//   // const rtm = AgoraRTM.createInstance(appId);
//   // const userId = Math.floor(Math.random() * 2032);
//   const userId = Math.floor(Math.random() * 2032).toString();

//   const rtm = new AgoraRTM.RTM(appId, userId);

//   useEffect(() => {
//     const login = async () => {
//       try {
//         await rtm.login({ uid: userId, token });
//         console.log("RTM login successful");
//       } catch (error) {
//         console.error("RTM login failed", error);
//       }
//     };

//     login();

//     return () => {
//       rtm.logout();
//     };
//   }, [rtm, userId, token]);

//   const sendUserInfo = async () => {
//     const message = JSON.stringify({
//       username: currentUser.name,
//       image: currentUser.image || "default-avatar.png",
//     });

//     try {
//       await rtm.sendMessage({
//         text: message,
//         channel: voiceRoomId,
//       });
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   useEffect(() => {
//     const handleMessage = (message) => {
//       const userInfo = JSON.parse(message.text);
//       setUsers((prevUsers) => [...prevUsers, userInfo]);
//     };

//     rtm.on("ChannelMessageReceived", handleMessage);

//     return () => {
//       rtm.off("ChannelMessageReceived", handleMessage);
//     };
//   }, [rtm]);

//   useEffect(() => {
//     if (calling) {
//       sendUserInfo();
//     }
//   }, [calling]);

//   useJoin({ appid: appId, channel: voiceRoomId, token: token }, calling);
//   const { localMicrophoneTrack, isSpeaking } = useLocalMicrophoneTrack(micOn);
//   usePublish([localMicrophoneTrack]);
//   const remoteUsers = useRemoteUsers();
//   const isConnected = useIsConnected();

//   console.log("Agora RTM SDK: ", AgoraRTM);
//   return (
//     <div className="min-h-screen bg-black text-white p-4 flex flex-col justify-between">
//       <div className="flex justify-center">
//         {isConnected ? (
//           <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
//             {/* Local User */}
//             <div className="flex flex-col justify-center items-center gap-2">
//               <div
//                 className={`w-32 h-32 flex flex-col items-center justify-center rounded-full transition-all ${
//                   isSpeaking
//                     ? "border-4 border-purple-500"
//                     : "border-2 border-gray-400"
//                 }`}
//               >
//                 <LocalUser
//                   audioTrack={localMicrophoneTrack}
//                   micOn={micOn}
//                   cover={currentUser?.image || "default-avatar.png"}
//                   className="rounded-full"
//                 />
//               </div>
//               <h3 className="text-lg text-center w-full">You</h3>
//             </div>

//             {/* Remote Users */}
//             {remoteUsers.map((user) => (
//               <div
//                 key={user.uid}
//                 className="w-32 h-32 flex flex-col items-center justify-center rounded-lg border-2 border-gray-400"
//               >
//                 <RemoteUser user={user}>
//                   {user.hasVideo ? (
//                     <video
//                       autoPlay
//                       playsInline
//                       className="w-24 h-24 rounded-full object-cover mb-2"
//                       ref={(ref) => {
//                         if (ref) {
//                           user.videoTrack?.play(ref);
//                         }
//                       }}
//                     />
//                   ) : (
//                     <img
//                       src={user.image || "default-avatar.png"}
//                       alt={`User ${user.uid}`}
//                       className="w-24 h-24 rounded-full object-cover mb-2"
//                     />
//                   )}
//                   <span className="text-lg">User {user.uid}</span>
//                 </RemoteUser>
//               </div>
//             ))}

//             {/* Control icons */}
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-8 flex justify-center space-x-8 text-3xl">
//               <div
//                 className="cursor-pointer hover:text-gray-300"
//                 onClick={() => setMic((prev) => !prev)}
//               >
//                 {micOn ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
//               </div>

//               <div
//                 className="cursor-pointer hover:text-gray-300"
//                 onClick={() => setCalling((prev) => !prev)}
//               >
//                 {calling ? <FaPhoneSlash /> : <FaPhone />}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center space-y-4">
//             <h2 className="text-2xl">Join Voice Room</h2>
//             <div
//               className="cursor-pointer bg-green-600 p-4 rounded-full text-3xl hover:bg-green-500"
//               onClick={() => setCalling(true)}
//               disabled={!voiceRoomId || !appId}
//             >
//               <FaPhone />
//             </div>
//           </div>
//         )}
//       </div>
//       {/* Display user info */}
//       <div className="flex flex-col items-center">
//         {users.map((user) => (
//           <div key={user.username} className="flex flex-col items-center">
//             <img
//               src={user.image}
//               alt={user.username}
//               className="w-24 h-24 rounded-full"
//             />
//             <span>{user.username}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VoiceRoom;

// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { io } from "socket.io-client";

// const VoiceRoom = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { voiceRoomId } = useParams();
//   const [stream, setStream] = useState(null);
//   const [peers, setPeers] = useState([]);
//   const socketRef = useRef();
//   const userStream = useRef();
//   const peerConnections = useRef({});

//   useEffect(() => {
//     // Connect to the Socket.IO server
//     socketRef.current = io("http://localhost:6000"); // replace with your server address

//     // Get audio stream from the user
//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//       setStream(stream);
//       userStream.current.srcObject = stream;

//       // Notify the server of the current user joining
//       socketRef.current.emit("join-voice-room", {
//         roomId: voiceRoomId,
//         userId: currentUser._id,
//       });

//       // Receive all users from the server
//       socketRef.current.on("all-users", (users) => {
//         const peers = [];
//         users.forEach((userId) => {
//           if (userId !== currentUser._id) {
//             const peerConnection = createPeerConnection(userId, stream);
//             peerConnections.current[userId] = peerConnection;
//             peers.push(peerConnection);
//           }
//         });
//         setPeers(peers);
//       });

//       // When a new user joins
//       socketRef.current.on("user-joined", (userId) => {
//         const peerConnection = createPeerConnection(userId, stream);
//         peerConnections.current[userId] = peerConnection;
//         setPeers((prevPeers) => [...prevPeers, peerConnection]);
//       });

//       // Handle receiving the audio stream
//       socketRef.current.on("receive-signal", ({ userId, signal }) => {
//         peerConnections.current[userId].signal(signal);
//       });

//       // Remove a user when they disconnect
//       socketRef.current.on("user-left", (userId) => {
//         if (peerConnections.current[userId]) {
//           peerConnections.current[userId].destroy();
//         }
//         setPeers((prevPeers) =>
//           prevPeers.filter((peer) => peer.userId !== userId)
//         );
//       });
//     });

//     return () => {
//       // Clean up on component unmount
//       stream?.getTracks().forEach((track) => track.stop());
//       socketRef.current.disconnect();
//     };
//   }, [voiceRoomId, currentUser]);

//   // Create a peer connection
//   const createPeerConnection = (userId, stream) => {
//     const peer = new window.SimplePeer({
//       initiator: true,
//       trickle: false,
//       stream,
//     });

//     peer.on("signal", (signal) => {
//       socketRef.current.emit("send-signal", {
//         userId,
//         roomId: voiceRoomId,
//         signal,
//       });
//     });

//     peer.on("stream", (remoteStream) => {
//       const audio = document.getElementById(`audio-${userId}`);
//       if (audio) {
//         audio.srcObject = remoteStream;
//       }
//     });

//     return peer;
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
//       <h1 className="text-3xl font-bold mb-4">Voice Room: {voiceRoomId}</h1>
//       <div className="flex flex-col items-center gap-4">
//         <audio ref={userStream} autoPlay muted className="hidden" />
//         {peers.map((peer, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <audio
//               id={`audio-${peer.userId}`}
//               autoPlay
//               className="rounded-md"
//             />
//             <p className="mt-2">{peer.userId}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VoiceRoom;
import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaMicrophone, FaMicrophoneSlash, FaSignOutAlt } from "react-icons/fa";

const socket = io("http://localhost:3000");

const VoiceRoom = () => {
  const { voiceRoomId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [peers, setPeers] = useState({});
  const audioRef = useRef({});
  const localStream = useRef(null);

  useEffect(() => {
    // Join the audio room
    socket.emit("joinAudioRoom", {
      roomId: voiceRoomId,
      username: currentUser.name,
    });

    // Handle updates to the user list
    socket.on("updateUserList", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    // Handle active speaker updates
    socket.on("userSpeaking", ({ userId, isSpeaking }) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isSpeaking } : user
        )
      );
    });

    // Get local audio stream
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      localStream.current = stream;
      localStream.current.getTracks()[0].enabled = !isMuted;

      // Set up peer connections when a new user joins
      socket.on("existingUsers", (otherUsers) => {
        otherUsers.forEach(({ id: userId }) => {
          createPeerConnection(userId, localStream.current, true);
        });
      });

      socket.on("newUserJoined", ({ userId }) => {
        createPeerConnection(userId, localStream.current, false);
      });

      // Handle received offers and answers
      socket.on("receiveOffer", ({ fromUserId, offer }) => {
        const peerConnection = createPeerConnection(fromUserId, stream, false);
        peerConnection
          .setRemoteDescription(new RTCSessionDescription(offer))
          .then(() => peerConnection.createAnswer())
          .then((answer) => {
            peerConnection.setLocalDescription(answer);
            socket.emit("sendAnswer", { answer, toUserId: fromUserId });
          })
          .catch((error) => console.error("Error handling offer:", error));
      });

      socket.on("receiveAnswer", ({ fromUserId, answer }) => {
        const peerConnection = peers[fromUserId];
        if (peerConnection) {
          peerConnection.setRemoteDescription(
            new RTCSessionDescription(answer)
          );
        }
      });

      // Handle ICE candidate exchanges
      socket.on("receiveIceCandidate", ({ fromUserId, candidate }) => {
        const peerConnection = peers[fromUserId];
        if (peerConnection) {
          peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        }
      });

      // Helper function to create a peer connection and add it to the state
      const createPeerConnection = (userId, stream, isInitiator) => {
        const peerConnection = new RTCPeerConnection();
        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit("sendIceCandidate", {
              candidate: event.candidate,
              toUserId: userId,
            });
          }
        };

        peerConnection.ontrack = (event) => {
          audioRef.current[userId] = new Audio();
          audioRef.current[userId].srcObject = event.streams[0];
          audioRef.current[userId].play();
        };

        stream
          .getTracks()
          .forEach((track) => peerConnection.addTrack(track, stream));

        if (isInitiator) {
          peerConnection
            .createOffer()
            .then((offer) => {
              peerConnection.setLocalDescription(offer);
              socket.emit("sendOffer", { offer, toUserId: userId });
            })
            .catch((error) => console.error("Error creating offer:", error));
        }

        setPeers((prev) => ({ ...prev, [userId]: peerConnection }));
        return peerConnection;
      };
    });

    // Cleanup on unmount
    return () => {
      socket.emit("leaveAudioRoom", {
        roomId: voiceRoomId,
        username: currentUser.name,
      });
      Object.values(audioRef.current).forEach((audio) => audio.pause());
      localStream.current.getTracks().forEach((track) => track.stop());
      socket.disconnect();
    };
  }, [voiceRoomId, currentUser.name, isMuted]);

  const handleToggleMute = () => {
    const newMuteStatus = !isMuted;
    setIsMuted(newMuteStatus);
    if (localStream.current)
      localStream.current.getTracks()[0].enabled = !newMuteStatus;
    socket.emit("toggleMute", { roomId: voiceRoomId, isMuted: newMuteStatus });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-4 mb-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={`w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center ring-4 
              ${user.isSpeaking ? "ring-purple-500" : "ring-gray-500"}`}
          >
            <span>{user.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 flex space-x-4">
        <button
          onClick={handleToggleMute}
          className="bg-blue-600 p-3 rounded-full text-white"
        >
          {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
        </button>
        <button
          onClick={() =>
            socket.emit("leaveAudioRoom", {
              roomId: voiceRoomId,
              username: currentUser.name,
            })
          }
          className="bg-red-600 p-3 rounded-full text-white"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default VoiceRoom;
