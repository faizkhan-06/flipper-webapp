import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";
export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    const updatedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
//check
// export const subscribe = async (req, res, next) => {
//   try {
//     await User.findByIdAndUpdate(req.user.id, {
//       $push: { subscribedUsers: req.params.id },
//     });
//     await User.findById(req.params.id, {
//       $inc: { subscribers: 1 },
//     });
//     res.status(200).json("Subscribed!");
//   } catch (err) {
//     next(err);
//   }
// };
export const subscribe = async (req, res, next) => {
  try {
    // Update current user's subscribedUsers array using $push
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });

    // Update targeted user's subscribers field using $inc
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("Subscribed!");
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscribed!");
  } catch (err) {
    next(err);
  }
};
export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.id;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    res.status(200).json("Liked a video");
  } catch (err) {
    next(err);
  }
};
export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.id;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json("Disliked a video");
  } catch (err) {
    next(err);
  }
};

export const getSubscribedUsers = async (req, res, next) => {
  try {
    // Find the user by ID and get the subscribedUsers array (list of IDs)
    const user = await User.findById(req.params.id);

    if (!user) return next(createError(404, "User not found!"));

    // Fetch full details of each subscribed user using their IDs
    const subscribedUsers = await User.find({
      _id: { $in: user.subscribedUsers },
    });

    // Return the full list of subscribed users
    res.status(200).json(subscribedUsers);
  } catch (err) {
    next(err);
  }
};
