import express from "express";
import {
  addComment,
  addSubComment,
  deleteComment,
  dislikeComment,
  getComments,
  likeComment,
  undislikeComment,
  unlikeComment,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComments);

// In comment.js (Router)
router.put("/:id/like", verifyToken, likeComment);
router.put("/:id/unlike", verifyToken, unlikeComment);
router.put("/:id/dislike", verifyToken, dislikeComment);
router.put("/:id/undislike", verifyToken, undislikeComment);

router.post("/:commentId/reply", verifyToken, addSubComment);

export default router;
