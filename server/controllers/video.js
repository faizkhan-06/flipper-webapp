import { createError } from "../error.js";
import Video from "../models/Video.js";
import User from "../models/User.js";
export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.params.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You can update only your video!"));
    }
  } catch (err) {
    next(err);
  }
};
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.params.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("Video has been deleted!");
    } else {
      return next(createError(403, "You can delete only your video!"));
    }
  } catch (err) {
    next(err);
  }
};
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};
export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("View has been increased!");
  } catch (err) {
    next(err);
  }
};
export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
export const trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subChannels = user.subscribedUsers;

    const list = await Promise.all(
      subChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt)); //remove nested array
  } catch (err) {
    next(err);
  }
};
export const getByTags = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  console.log(tags);
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
// export const search = async (req, res, next) => {
//   const query = req.query.q;
//   try {
//     const videos = await Video.find({
//       title: { $regex: query, $options: "i" },
//     }).limit(40);
//     res.status(200).json(videos);
//   } catch (err) {
//     next(err);
//   }
// };

// export const search = async (req, res) => {
//   const query = req.query.q;
//   try {
//     // Step 1: Fetch videos that match the search query
//     const videos = await Video.find({
//       title: { $regex: query, $options: "i" },
//     });

//     // Step 2: Map over videos and fetch user details for each one
//     const videosWithUserData = await Promise.all(
//       videos.map(async (video) => {
//         const user = await User.findById(video.userId).select("name image");
//         return {
//           ...video._doc, // Spread video data
//           user: user, // Add user data
//         };
//       })
//     );

//     res.status(200).json(videosWithUserData);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching videos", error });
//   }
// };
export const search = async (req, res) => {
  const query = req.query.q;
  try {
    // Step 1: Fetch videos that match the search query by title
    const videosByTitle = await Video.find({
      title: { $regex: query, $options: "i" },
    });

    // Step 2: Fetch users that match the search query by username
    const users = await User.find({
      name: { $regex: query, $options: "i" },
    }).select("_id name image");

    // Step 3: Fetch videos uploaded by matching users
    const videosByUser = await Video.find({
      userId: { $in: users.map((user) => user._id) },
    });

    // Step 4: Combine the two sets of videos
    const combinedVideos = [...videosByTitle, ...videosByUser];

    // Step 5: Map over combined videos and fetch user details for each one
    const videosWithUserData = await Promise.all(
      combinedVideos.map(async (video) => {
        const user = await User.findById(video.userId).select("name image");
        return {
          ...video._doc, // Spread video data
          user: user, // Add user data
        };
      })
    );

    res.status(200).json(videosWithUserData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos", error });
  }
};

// Add this to your video.js controller file
export const getUserVideos = async (req, res, next) => {
  try {
    const videos = await Video.find({ userId: req.params.userId });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const getVideosByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const videos = await Video.find({ category: category });
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching category videos", err });
  }
};
