// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRoute from "./routes/users.js";
// import videoRoute from "./routes/videos.js";
// import commentRoute from "./routes/comments.js";
// import authRoute from "./routes/auth.js";
// import cookieParser from "cookie-parser";

// const app = express();
// const PORT = 6000 || process.env.PORT;
// dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(`connected to db...`);
//   } catch (err) {
//     throw err;
//   }
// };

// app.use(cookieParser());
// app.use(express.json());
// // app.use((err,req,res,next)=>{
// //     const status = err.status || 500;
// //     const message = err.message || "somthing went wrong!";
// //     return res.status(status).json({ //need to work
// //         success : false,
// //         status,
// //         message
// //     });
// // });

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/videos", videoRoute);
// app.use("/api/comments", commentRoute);

// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong!";

//   if (err.name === "ValidationError") {
//     // Handle validation errors specifically
//     const validationErrors = Object.values(err.errors).map(
//       (error) => error.message
//     );
//     return res.status(400).json({
//       success: false,
//       status,
//       message: "Validation errors:",
//       errors: validationErrors,
//     });
//   } else if (err.name === "MongoServerError" && err.code === 11000) {
//     // Handle duplicate key errors
//     return res.status(400).json({
//       success: false,
//       status,
//       message: "Duplicate key error. This record already exists.",
//     });
//   } else {
//     // Unhandled errors
//     return res.status(status).json({ success: false, status, message });
//   }
// });

// // app.use((err, req, res, next) => {
// //     const status = err.status || 500;

// //     // Create a new object to construct the error response
// //     const errorResponse = {
// //       success: false,
// //       status,
// //     };

// //     if (err.name === 'MongoServerError' && err.code === 11000) {
// //       errorResponse.message = "Duplicate key error. This record already exists.";
// //     } else {
// //       // Provide a generic error message for other errors
// //       errorResponse.message = err.message || "Something went wrong!";
// //     }

// //     res.status(status).json(errorResponse);
// // });

// app.listen(PORT, () => {
//   connect();
//   console.log(`listning on ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import http from "http";
// import { Server } from "socket.io";
// import userRoute from "./routes/users.js";
// import videoRoute from "./routes/videos.js";
// import commentRoute from "./routes/comments.js";
// import authRoute from "./routes/auth.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: true,
// });
// const PORT = 3000 || process.env.PORT;
// dotenv.config();

// app.use(cors());

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(`connected to db...`);
//   } catch (err) {
//     throw err;
//   }
// };

// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/videos", videoRoute);
// app.use("/api/comments", commentRoute);

// // Socket.IO events
// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("joinRoom", (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} joined room: ${roomId}`);
//   });

//   socket.on("sendMessage", (message) => {
//     io.to(message.roomId).emit("message", message);
//   });

//   socket.on("leaveRoom", (roomId) => {
//     socket.leave(roomId);
//     console.log(`User ${socket.id} left room: ${roomId}`);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// app.listen(PORT, () => {
//   connect();
//   console.log(`Listening on ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRoute from "./routes/users.js";
// import videoRoute from "./routes/videos.js";
// import commentRoute from "./routes/comments.js";
// import authRoute from "./routes/auth.js";
// import cookieParser from "cookie-parser";
// import { Server } from "socket.io";
// import http from "http";

// dotenv.config();

// const app = express();
// const PORT = 6000 || process.env.PORT;

// // Set up HTTP server and Socket.IO
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: true,
// });

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(`connected to db...`);
//   } catch (err) {
//     throw err;
//   }
// };

// app.use(cookieParser());
// app.use(express.json());

// // API routes
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/videos", videoRoute);
// app.use("/api/comments", commentRoute);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong!";

//   if (err.name === "ValidationError") {
//     const validationErrors = Object.values(err.errors).map(
//       (error) => error.message
//     );
//     return res.status(400).json({
//       success: false,
//       status,
//       message: "Validation errors:",
//       errors: validationErrors,
//     });
//   } else if (err.name === "MongoServerError" && err.code === 11000) {
//     return res.status(400).json({
//       success: false,
//       status,
//       message: "Duplicate key error. This record already exists.",
//     });
//   } else {
//     return res.status(status).json({ success: false, status, message });
//   }
// });

// // WebRTC signaling and room handling with Socket.IO
// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);

//   // Join a voice room
//   socket.on("join-voice-room", ({ roomId, userId }) => {
//     socket.join(roomId);
//     console.log(`User ${userId} joined room ${roomId}`);

//     // Get all other users in the room except the current user
//     const otherUsers = Array.from(
//       io.sockets.adapter.rooms.get(roomId) || []
//     ).filter((id) => id !== socket.id);

//     // Send all existing users to the new user
//     socket.emit("all-users", otherUsers);

//     // Notify all other users about the new user
//     socket.to(roomId).emit("user-joined", userId);
//   });

//   // Handle WebRTC signaling (sending and receiving signals)
//   socket.on("send-signal", ({ userId, roomId, signal }) => {
//     socket.to(roomId).emit("receive-signal", { userId: socket.id, signal });
//   });

//   // Handle user leaving the room
//   socket.on("disconnect", () => {
//     const rooms = Array.from(socket.rooms);
//     rooms.forEach((roomId) => {
//       socket.to(roomId).emit("user-left", socket.id);
//     });
//     console.log(`User disconnected: ${socket.id}`);
//   });
// });

// // Start the server
// server.listen(PORT, () => {
//   connect();
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import userRoute from "./routes/users.js";
import videoRoute from "./routes/videos.js";
import commentRoute from "./routes/comments.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow Vite dev server
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);

const rooms = {}; // Store users by room

// Socket.IO events
// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("joinRoom", (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} joined room: ${roomId}`);
//   });

//   socket.on("sendMessage", (message) => {
//     io.to(message.roomId).emit("message", message);
//   });

//   socket.on("leaveRoom", (roomId) => {
//     socket.leave(roomId);
//     console.log(`User ${socket.id} left room: ${roomId}`);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", ({ roomId, username }) => {
    socket.join(roomId);
    console.log(`User ${username} joined room: ${roomId}`);

    const message = {
      type: "system",
      content: `${username} has joined the room`,
      timestamp: new Date(),
    };
    io.to(roomId).emit("userJoined", message);
  });

  socket.on("sendMessage", (message) => {
    io.to(message.roomId).emit("message", message);
  });

  // socket.on("joinRoom", ({ roomId, username }) => {
  //   socket.join(roomId);
  //   console.log(`User ${username} joined room: ${roomId}`);

  //   const message = {
  //     type: "system",
  //     content: `${username} has joined the room`,
  //     timestamp: new Date(),
  //   };
  //   io.to(roomId).emit("userJoined", message);
  // });

  socket.on("leaveRoom", ({ roomId, username }) => {
    socket.leave(roomId);

    // Only emit the leave message once
    const leaveMessage = {
      type: "system",
      content: `${username} has left the room`,
      timestamp: new Date(),
    };

    // Broadcast to everyone in the room
    socket.to(roomId).emit("userLeft", leaveMessage);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("joinAudioRoom", ({ roomId, username }) => {
    socket.join(roomId);
    if (!rooms[roomId]) rooms[roomId] = [];

    // Add user to the room
    rooms[roomId].push({ id: socket.id, name: username, isMuted: false });

    // Notify existing users about the new user
    socket.broadcast.to(roomId).emit("newUserJoined", { userId: socket.id });

    // Notify the new user about existing users
    const otherUsers = rooms[roomId].filter((user) => user.id !== socket.id);
    socket.emit("existingUsers", otherUsers);

    io.to(roomId).emit("updateUserList", rooms[roomId]);
    console.log(`User ${username} joined audio room: ${roomId}`);
  });

  socket.on("leaveAudioRoom", ({ roomId }) => {
    if (rooms[roomId]) {
      rooms[roomId] = rooms[roomId].filter((user) => user.id !== socket.id);
      io.to(roomId).emit("updateUserList", rooms[roomId]);
    }
    socket.leave(roomId);
  });

  socket.on("toggleMute", ({ roomId, isMuted }) => {
    const user = rooms[roomId]?.find((user) => user.id === socket.id);
    if (user) user.isMuted = isMuted;
    io.to(roomId).emit("updateUserList", rooms[roomId]);
  });

  socket.on("voiceActivity", ({ roomId, isSpeaking }) => {
    io.to(roomId).emit("userSpeaking", { userId: socket.id, isSpeaking });
  });

  socket.on("disconnect", () => {
    for (const roomId in rooms) {
      rooms[roomId] = rooms[roomId].filter((user) => user.id !== socket.id);
      io.to(roomId).emit("updateUserList", rooms[roomId]);
    }
    socket.on("sendOffer", ({ offer, toUserId }) => {
      io.to(toUserId).emit("receiveOffer", {
        fromUserId: socket.id,
        offer,
      });
    });

    socket.on("sendAnswer", ({ answer, toUserId }) => {
      io.to(toUserId).emit("receiveAnswer", {
        fromUserId: socket.id,
        answer,
      });
    });

    socket.on("sendIceCandidate", ({ candidate, toUserId }) => {
      io.to(toUserId).emit("receiveIceCandidate", {
        fromUserId: socket.id,
        candidate,
      });
    });
  });
});

server.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error(err));
  console.log(`Server running on port ${PORT}`);
});
