import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/users.js";
import videoRoute from "./routes/videos.js";
import commentRoute from "./routes/comments.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 6000 || process.env.PORT;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to db...`);
  } catch (err) {
    throw err;
  }
};

app.use(cookieParser());
app.use(express.json());
// app.use((err,req,res,next)=>{
//     const status = err.status || 500;
//     const message = err.message || "somthing went wrong!";
//     return res.status(status).json({ //need to work
//         success : false,
//         status,
//         message
//     });
// });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";

  if (err.name === "ValidationError") {
    // Handle validation errors specifically
    const validationErrors = Object.values(err.errors).map(
      (error) => error.message
    );
    return res.status(400).json({
      success: false,
      status,
      message: "Validation errors:",
      errors: validationErrors,
    });
  } else if (err.name === "MongoServerError" && err.code === 11000) {
    // Handle duplicate key errors
    return res.status(400).json({
      success: false,
      status,
      message: "Duplicate key error. This record already exists.",
    });
  } else {
    // Unhandled errors
    return res.status(status).json({ success: false, status, message });
  }
});

// app.use((err, req, res, next) => {
//     const status = err.status || 500;

//     // Create a new object to construct the error response
//     const errorResponse = {
//       success: false,
//       status,
//     };

//     if (err.name === 'MongoServerError' && err.code === 11000) {
//       errorResponse.message = "Duplicate key error. This record already exists.";
//     } else {
//       // Provide a generic error message for other errors
//       errorResponse.message = err.message || "Something went wrong!";
//     }

//     res.status(status).json(errorResponse);
// });

app.listen(PORT, () => {
  connect();
  console.log(`listning on ${PORT}`);
});
