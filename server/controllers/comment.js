import { createError } from "../error.js";
import Comment from "../models/Comment.js";
import Video from "../models/Video.js";
export const addComment = async (req, res, next) => {
  try {
    const newComment = new Comment({ ...req.body, userId: req.user.id });
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};
// export const deleteComment = async (req, res, next) => {
//   try {
//     const comment = await Comment.findById(res.params.id);
//     const video = await Video.findById(res.params.id);
//     if (req.user.id === comment.userId || req.user.id === video.userId) {
//       await Comment.findByIdAndDelete(req.params.id);
//       res.status(200).json("The comment has been deleted!");
//     } else {
//       return next(createError(403, "You can delete only your comment!"));
//     }
//   } catch (err) {
//     next(err);
//   }
// };
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id); // Fixed to req.params.id
    const video = await Video.findById(comment.videoId); // Get the video using the comment's videoId
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted!");
    } else {
      return next(createError(403, "You can delete only your comment!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
// In comment.js (Controller)
export const likeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.dislikes.includes(req.user.id)) {
      comment.dislikes = comment.dislikes.filter((id) => id !== req.user.id);
    }
    if (!comment.likes.includes(req.user.id)) {
      comment.likes.push(req.user.id);
    }
    await comment.save();
    res.status(200).json("Comment liked!");
  } catch (err) {
    next(err);
  }
};

export const unlikeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    comment.likes = comment.likes.filter((id) => id !== req.user.id);
    await comment.save();
    res.status(200).json("Like removed!");
  } catch (err) {
    next(err);
  }
};

export const dislikeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.likes.includes(req.user.id)) {
      comment.likes = comment.likes.filter((id) => id !== req.user.id);
    }
    if (!comment.dislikes.includes(req.user.id)) {
      comment.dislikes.push(req.user.id);
    }
    await comment.save();
    res.status(200).json("Comment disliked!");
  } catch (err) {
    next(err);
  }
};

export const undislikeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    comment.dislikes = comment.dislikes.filter((id) => id !== req.user.id);
    await comment.save();
    res.status(200).json("Dislike removed!");
  } catch (err) {
    next(err);
  }
};

export const addSubComment = async (req, res, next) => {
  try {
    const newSubComment = new Comment({
      ...req.body,
      userId: req.user.id,
      parentCommentId: req.params.commentId,
    });
    const savedComment = await newSubComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};
