import express from "express";
import {
  deleteUser,
  dislike,
  getSubscribedUsers,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get user
router.get("/find/:id", verifyToken, getUser);

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:id", verifyToken, like);

//dislike a vide
router.put("/dislike/:id", verifyToken, dislike);

//get subscribed
router.get("/subscribed/:id", verifyToken, getSubscribedUsers);

export default router;
