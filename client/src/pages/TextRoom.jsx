// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { io } from "socket.io-client";

// const TextRoom = () => {
//   const { textRoomId } = useParams();
//   const { currentUser } = useSelector((state) => state.user);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const socket = io("http://localhost:3000"); // Adjust the URL as needed

//   useEffect(() => {
//     // Join the room
//     socket.emit("joinRoom", textRoomId);

//     // Listen for incoming messages
//     socket.on("message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.emit("leaveRoom", textRoomId);
//       socket.off();
//     };
//   }, [textRoomId, socket]);

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       const message = {
//         roomId: textRoomId,
//         userId: currentUser.id,
//         username: currentUser.name,
//         content: input,
//         timestamp: new Date(),
//       };
//       socket.emit("sendMessage", message);
//       setInput("");
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen p-4">
//       <div className="flex-1 overflow-auto border border-gray-300 rounded-md p-4">
//         {messages.map((msg, index) => (
//           <div key={index} className="mb-2">
//             <strong>{msg.username}: </strong>
//             <span>{msg.content}</span>
//             <span className="text-gray-400 text-sm">
//               {" "}
//               {new Date(msg.timestamp).toLocaleTimeString()}
//             </span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSend} className="mt-4">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//           className="border border-gray-300 rounded-md p-2 w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white rounded-md p-2 mt-2"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TextRoom;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { io } from "socket.io-client";
// import { FaCrown } from "react-icons/fa6";
// import EmojiPicker from "emoji-picker-react"; // Example: You can use this library for emoji picking
// import { FaSmile } from "react-icons/fa"; // Emoji icon

// // Initialize socket outside the component to prevent reinitialization
// const socket = io("http://localhost:3000");

// const TextRoom = () => {
//   const { textRoomId } = useParams();
//   const { currentUser } = useSelector((state) => state.user);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState("");

//   useEffect(() => {
//     // Join the room when component mounts
//     socket.emit("joinRoom", textRoomId);

//     // Listen for incoming messages
//     socket.on("message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Cleanup when component unmounts
//     return () => {
//       socket.emit("leaveRoom", textRoomId);
//       socket.off("message"); // Only remove the specific event listener
//     };
//   }, [textRoomId]);

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       const message = {
//         roomId: textRoomId,
//         userId: currentUser.id,
//         username: currentUser.name,
//         content: input,
//         timestamp: new Date(),
//       };
//       socket.emit("sendMessage", message);
//       setInput("");
//     }
//   };

//   return (
//     <div className="flex flex-col h-[91vh] p-4 text-white">
//       <div className="flex-1 overflow-auto rounded-md p-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 p-2 rounded-xl max-w-xs break-words ${
//               msg.username === currentUser.name // Check if the message was sent by the current user
//                 ? "ml-auto bg-gray-950 text-right border-[.5px] border-gray-800" // Sent messages on the right with gray-950 background
//                 : "mr-auto bg-gradient-to-r from-purple-900 to-pink-800 text-left" // Received messages on the left with purple-pink gradient
//             }`}
//           >
//             {/* First line with the username, crown (if applicable), and timestamp */}
//             <div className="flex items-center justify-between font-mono">
//               <div className="flex items-center">
//                 <strong>{msg.username}</strong>
//                 {textRoomId === msg.username && (
//                   <FaCrown className="ml-1 text-yellow-500" /> // Display crown if textRoomId matches currentUser.name
//                 )}
//               </div>
//               <span className="text-gray-400 text-xs">
//                 {new Date(msg.timestamp).toLocaleTimeString()}
//               </span>
//             </div>

//             {/* Second line with the message content */}
//             <span className="block">{msg.content}</span>
//           </div>
//         ))}
//       </div>

//       {/* Input and Send Button Section */}
//       <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
//         {/* Emoji Picker Button */}
//         <button
//           type="button"
//           className="p-2 text-gray-700 bg-gray-900 rounded-md"
//           onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//         >
//           <FaSmile className="text-xl text-white" />
//         </button>

//         {/* Emoji Picker Component (Toggle visibility based on state) */}
//         {showEmojiPicker && (
//           <div className="absolute bottom-16">
//             <EmojiPicker
//               onEmojiClick={(emoji, event) => setInput(input + emoji.emoji)}
//             />
//           </div>
//         )}

//         {/* Input Field */}
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-grow border-[.5px] border-gray-700 rounded-md p-2 bg-slate-950 text-white "
//         />

//         {/* Send Button */}
//         <button
//           type="submit"
//           className=" border-[.5px] border-gray-700 hover:bg-gray-800 text-white rounded-md p-2"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TextRoom;

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { FaCrown, FaSmile } from "react-icons/fa"; // FaSmile for emoji picker icon
import EmojiPicker from "emoji-picker-react"; // Emoji picker library

// Initialize socket outside the component to prevent reinitialization
const socket = io("http://localhost:3000");

const TextRoom = () => {
  const { textRoomId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState("");

  const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   // Join the room when component mounts
  //   socket.emit("joinRoom", textRoomId);

  //   // Listen for incoming messages
  //   socket.on("message", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   // Cleanup when component unmounts
  //   return () => {
  //     socket.emit("leaveRoom", textRoomId);
  //     socket.off("message");
  //   };
  // }, [textRoomId]);

  // useEffect(() => {
  //   // Join the room when component mounts
  //   socket.emit("joinRoom", { roomId: textRoomId, username: currentUser.name });

  //   // Listen for incoming messages
  //   socket.on("message", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   // Listen for user join and leave events
  //   socket.on("userJoined", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   socket.on("userLeft", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   // Cleanup when component unmounts
  //   return () => {
  //     socket.emit("leaveRoom", {
  //       roomId: textRoomId,
  //       username: currentUser.name,
  //     });
  //     socket.off("message");
  //     socket.off("userJoined");
  //     socket.off("userLeft");
  //   };
  // }, [textRoomId]);

  useEffect(() => {
    // Join the room when the component mounts
    socket.emit("joinRoom", { roomId: textRoomId, username: currentUser.name });

    // Listen for incoming messages
    const messageHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Listen for user join and leave events
    const userJoinedHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    const userLeftHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Register socket event listeners
    socket.on("message", messageHandler);
    socket.on("userJoined", userJoinedHandler);
    socket.on("userLeft", userLeftHandler);

    // Cleanup when component unmounts
    return () => {
      socket.emit("leaveRoom", {
        roomId: textRoomId,
        username: currentUser.name,
      });

      // Remove the event listeners
      socket.off("message", messageHandler);
      socket.off("userJoined", userJoinedHandler);
      socket.off("userLeft", userLeftHandler);
    };
  }, [textRoomId, currentUser.name]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const message = {
        roomId: textRoomId,
        userId: currentUser.id,
        username: currentUser.name,
        profileImage: currentUser.image, // Add the profile image here
        content: input,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", message);
      setInput("");
    }
  };
  console.log(currentUser);

  return (
    <div className="flex flex-col h-[91vh] p-4 text-white">
      <div className="flex-1 overflow-auto rounded-md p-4 scrollbar-hide">
        {messages.map((msg, index) =>
          msg.type === "system" ? (
            <div key={index} className="text-center text-gray-400 italic my-2">
              {msg.content}
            </div>
          ) : (
            <div
              key={index}
              className={`mb-2 p-2 rounded-xl max-w-xs break-words ${
                msg.username === currentUser.name
                  ? "ml-auto bg-gray-950 text-right border-[.5px] border-gray-800"
                  : "mr-auto bg-gradient-to-r from-purple-900 to-pink-800 text-left"
              }`}
            >
              {/* First line with profile image, username, crown (if applicable), and timestamp */}
              <div className="flex items-center justify-between font-mono">
                <div className="flex items-center space-x-2">
                  {/* Profile Image */}
                  <img
                    src={msg.profileImage || "/default-avatar.png"} // Fallback to default avatar if no image
                    className="w-8 h-8 rounded-full"
                  />
                  {/* Username */}
                  <strong>{msg.username}</strong>
                  {textRoomId === msg.username && (
                    <FaCrown className="ml-1 text-yellow-500" />
                  )}
                </div>
                {/* Timestamp */}
                <span className="text-gray-400 text-xs">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              {/* Second line with the message content */}
              <span className="block mt-2">{msg.content}</span>
            </div>
          )
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input and Send Button Section */}
      <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2">
        {/* Emoji Picker Button */}
        <button
          type="button"
          className="p-2 text-gray-700 bg-gray-900 rounded-md"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <FaSmile className="text-xl text-white" />
        </button>

        {/* Emoji Picker Component (Toggle visibility based on state) */}
        {showEmojiPicker && (
          <div className="absolute bottom-16">
            <EmojiPicker
              onEmojiClick={(emoji) => setInput(input + emoji.emoji)}
            />
          </div>
        )}

        {/* Input Field */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border-[.5px] border-gray-700 rounded-md p-2 bg-slate-950 text-white"
        />

        {/* Send Button */}
        <button
          type="submit"
          className="border-[.5px] border-gray-700 hover:bg-gray-800 text-white rounded-md p-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TextRoom;
