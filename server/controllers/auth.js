import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(body.password, salt);
    const newUser = new User({ ...body, password: hash });
    await newUser.save();
    // res.status(200).send("user has been created ")
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
    next(err);
    // Handle different error types appropriately (e.g., validation errors, duplicate keys)
    // if (err.name === 'ValidationError') {
    //     const validationErrors = Object.values(err.errors).map((error) => error.message);
    //     return res.status(400).json({
    //         success: false,
    //         message: "Validation errors:",
    //         errors: validationErrors,
    //     });
    // } else if (err.name === 'MongoServerError' && err.code === 11000) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Duplicate key error. This record already exists.",
    //     });
    // } else {
    //     // Catch-all handler for other errors
    //     return res.status(500).json({
    //         success: false,
    //         message: "An error occurred. Please try again later.",
    //     });
    // }
  }
};
export const signin = async (req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    const user = await User.findOne({ name: body.name });
    if (!user) return next(createError(404, "User not found!"));
    // if (!user) {
    //     return res.status(404).json({ success: false, message: "User not found" });
    //   }
    const { password, ...details } = user._doc;
    const isCorrect = await bcrypt.compare(body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(details);
  } catch (err) {
    next(err);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({ ...req.body, fromGoogle: true });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};
