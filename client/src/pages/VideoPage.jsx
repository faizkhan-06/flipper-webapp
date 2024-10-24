import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/video_player/VideoPlayer";
import video from "../../videos/video.mp4";
import cover from "../../img/1343656.jpg";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
  dislike,
} from "../redux/videoSlice";
import toast from "react-hot-toast";
import { format } from "timeago.js";
import { subscription } from "../redux/userSlice";
import Comments from "../components/ui/Comments";
import RelevantVideos from "../components/ui/RelevantVideos";

function VideoPage() {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});
  const navigate = useNavigate();
  console.log(currentUser._id);
  useEffect(() => {
    dispatch(fetchStart());
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/api/videos/find/${path}`);

        const channelrRes = await axios.get(
          `/api/users/find/${videoRes.data.userId}`
        );
        setChannel(channelrRes.data);
        dispatch(fetchSuccess(videoRes.data));
        await axios.put(`/api/videos/view/${path}`);
        // console.log(channel);
      } catch (err) {
        toast.error(err.message);
        dispatch(fetchFailure());
      }
    };
    fetchData();
  }, [path, dispatch]);
  // useEffect(() => {
  //   dispatch(fetchStart());

  //   const fetchData = async () => {
  //     try {
  //       console.log(`Fetching video with path: /api/find/${path}`);
  //       const videoRes = await axios.get(`/api/find/${path}`);
  //       if (!videoRes.data || !videoRes.data.userId) {
  //         throw new Error("Video data is missing or userId is not defined");
  //       }

  //       console.log(
  //         `Fetching channel with userId: /api/users/find/${videoRes.data.userId}`
  //       );
  //       const channelRes = await axios.get(
  //         `/api/users/find/${videoRes.data.userId}`
  //       );

  //       setChannel(channelRes.data);
  //       dispatch(fetchSuccess(videoRes.data));
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //       toast.error(err.message);
  //       dispatch(fetchFailure());
  //     }
  //   };

  //   fetchData();
  // }, [path, dispatch]);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  // const handleLike = async () => {
  //   await axios.put(`/api/users/like/${currentVideo._id}`);
  //   dispatch(like(currentUser._id));
  // };
  // const handleDislike = async () => {
  //   await axios.put(`/api/users/dislike/${currentVideo._id}`);
  //   dispatch(dislike(currentUser._id));
  // };
  const handleLike = async () => {
    try {
      await axios.put(`/api/users/like/${currentVideo._id}`);
      dispatch(like(currentUser._id));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDislike = async () => {
    try {
      await axios.put(`/api/users/dislike/${currentVideo._id}`);
      dispatch(dislike(currentUser._id));
    } catch (err) {
      toast.error(err.message);
    }
  };
  // const handleSub = async () => {
  //   try {
  //     if (currentUser.subscribedUsers.include(channel._id)) {
  //       await axios.put(`users/unsub/${channel._id}`);
  //     } else {
  //       await axios.put(`users/sub/${channel._id}`);
  //     }
  //     dispatch(subscription(channel._id));
  //   } catch (err) {
  //     toast.error(err);
  //   }
  // };
  const handleSub = async () => {
    try {
      if (currentUser.subscribedUsers.includes(channel._id)) {
        await axios.put(`/api/users/unsub/${channel._id}`);
      } else {
        await axios.put(`/api/users/sub/${channel._id}`);
      }
      dispatch(subscription(channel._id));
    } catch (err) {
      // Convert the error object to a string and pass it to toast.error
      toast.error(err.message || "An error occurred");
    }
  };

  // return !currentUser ? (
  //   navigate("/sign-in")
  // ) : (
  //   <div className="mx-4 my-2 flex flex-col lg:flex-row gap-4 p-4 text-gray-200">
  //     <div className="flex-1">
  //       <VideoPlayer
  //         src={currentVideo.videoUrl}
  //         poster={currentVideo.imageUrl}
  //       />
  //       <div className="mt-2">
  //         <h1 className="text-2xl font-bold ">{currentVideo.title}</h1>
  //         <div className=" mb-2">
  //           <span className=" text-gray-400 text-sm">
  //             {currentVideo.views} views • {format(currentVideo.createdAt)}
  //           </span>
  //         </div>
  //         <div className="flex flex-wrap items-center space-x-2 mb-2">
  //           <button
  //             className="flex items-center space-x-1 px-3 py-1 text-gray-300 bg-gray-950 rounded-md text-sm border-[.5px] border-gray-800  hover:bg-gray-900"
  //             onClick={handleLike}
  //           >
  //             {currentVideo.likes.includes(currentUser._id) ? (
  //               <FaThumbsUp />
  //             ) : (
  //               <FaRegThumbsUp />
  //             )}
  //             <span>Like</span>
  //             <span>{currentVideo.likes?.length}</span>
  //           </button>
  //           <button
  //             className="flex items-center space-x-1 px-3 py-1 text-gray-300 bg-gray-950 rounded-md text-sm border-[.5px] border-gray-800 hover:bg-gray-900"
  //             onClick={handleDislike}
  //           >
  //             {currentVideo.dislikes?.includes(currentUser._id) ? (
  //               <FaThumbsDown />
  //             ) : (
  //               <FaRegThumbsDown />
  //             )}

  //             <span>Dislike</span>
  //           </button>
  //           <button className="flex items-center space-x-1 px-3 py-1 text-gray-300 bg-gray-950 rounded-md text-sm border-[.5px] border-gray-800 hover:bg-gray-900">
  //             <FaShare />
  //             <span>Share</span>
  //           </button>
  //         </div>
  //         <div className="flex items-center space-x-2 mb-2">
  //           <img
  //             src={channel.image} // Replace with the channel image
  //             alt="image"
  //             className="w-10 h-10 object-cover rounded-full"
  //           />
  //           <div>
  //             <div className="text-lg font-semibold">{channel.name}</div>
  //             <div className="text-sm text-gray-400">
  //               {channel.subscribers} subscribers
  //             </div>
  //           </div>
  //           {/* <button
  //             className="px-3 py-1 bg-blue-900 text-white rounded-md text-sm"
  //             onClick={handleSub}
  //           >
  //             {currentUser.subscribedUsers?.includes(channel._id)
  //               ? "SUBSCRIBED"
  //               : "SUBSCRIBE"}
  //           </button> */}
  //           <button
  //             className={`px-3 py-1  rounded-md text-sm ${
  //               currentUser.subscribedUsers?.includes(channel._id)
  //                 ? "bg-gray-950 border-[.5px] border-gray-700"
  //                 : "bg-slate-200 text-black"
  //             }`}
  //             onClick={handleSub}
  //           >
  //             {currentUser.subscribedUsers?.includes(channel._id)
  //               ? "SUBSCRIBED"
  //               : "SUBSCRIBE"}
  //           </button>
  //         </div>
  //         <div className="mt-2">
  //           <div
  //             className="text-lg font-bold cursor-pointer flex items-center space-x-2"
  //             onClick={toggleDescriptionVisibility}
  //           >
  //             <span>Description</span>
  //             {isDescriptionVisible ? <FaChevronUp /> : <FaChevronDown />}
  //           </div>
  //           {isDescriptionVisible && (
  //             <div className="mt-2 bg-gray-950 p-2 rounded-md">
  //               {currentVideo.desc}
  //             </div>
  //           )}
  //         </div>
  //         {/* <div className="mt-2">
  //           <h2 className="text-xl font-bold mb-2 flex items-center space-x-2">
  //             <span>Comments</span>
  //             <span className="text-gray-400 text-sm">
  //               ({comments.length} comments)
  //             </span>
  //           </h2>
  //           <div className="p-3 rounded-md">
  //             <div className="mb-2">
  //               <textarea
  //                 className="w-full bg-slate-950 border-[.5px] border-gray-700 text-gray-300 p-2 rounded-md"
  //                 rows="3"
  //                 placeholder="Add a comment..."
  //               />
  //               <button className="mt-2 px-3 py-1 bg-slate-950 border-[.5px] border-gray-700 text-white rounded-md text-sm">
  //                 Comment
  //               </button>
  //             </div>
  //             <div>
  //               {comments.map((comment) => (
  //                 <div key={comment.id} className="mb-2">
  //                   <div className="flex items-start space-x-2">
  //                     <img
  //                       src={comment.profileImage} // Replace with user profile image
  //                       alt="User"
  //                       className="w-8 h-8 object-cover rounded-full"
  //                     />
  //                     <div>
  //                       <div className="font-semibold text-gray-300">
  //                         {comment.user}
  //                       </div>
  //                       <div className="text-gray-400">{comment.comment}</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div> */}
  //         {/* <div className="mt-2">
  //           <h2 className="text-xl font-bold mb-2 flex items-center space-x-2">
  //             <span>Comments</span>
  //             <span className="text-gray-400 text-sm">
  //               ({comments.length} comments)
  //             </span>
  //           </h2>
  //           <div className=" rounded-md">
  //             <div className="mb-2 flex items-start space-x-2">
  //               <img
  //                 src={cover} // Use the current user's profile image
  //                 alt="User"
  //                 className="w-8 h-8 object-cover rounded-full"
  //               />
  //               <div className="flex-1">
  //                 <textarea
  //                   className="w-full bg-slate-950 border-[.5px] border-gray-700 text-gray-300 p-2 rounded-md"
  //                   rows="3"
  //                   placeholder="Add a comment..."
  //                 />
  //                 <button className="mt-2 px-3 py-1 bg-slate-950 border-[.5px] border-gray-700 text-white rounded-md text-sm">
  //                   Comment
  //                 </button>
  //               </div>
  //             </div>
  //             <div>
  //               {comments.map((comment) => (
  //                 <div key={comment.id} className="mb-2">
  //                   <div className="flex items-start space-x-2">
  //                     <img
  //                       src={comment.profileImage} // Replace with user profile image
  //                       alt="User"
  //                       className="w-8 h-8 object-cover rounded-full"
  //                     />
  //                     <div>
  //                       <div className="font-semibold text-gray-300">
  //                         {comment.user}
  //                       </div>
  //                       <div className="text-gray-400">{comment.comment}</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div> */}
  //         <Comments videoId={currentVideo._id} />
  //       </div>
  //     </div>
  //     <div className="lg:w-1/3">
  //       <h2 className="text-xl font-bold mb-2">Relevant Videos</h2>
  //       {/* <ul className="space-y-2">
  //         {relevantVideos.map((video) => (
  //           <li
  //             key={video.id}
  //             className="flex items-center space-x-2 p-2 border border-gray-900 rounded-lg hover:bg-gray-900 transition duration-300 bg-gray-950"
  //           >
  //             <img
  //               src={video.thumbnail}
  //               alt={video.title}
  //               className="w-20 h-12 object-cover rounded-lg"
  //             />
  //             <div>
  //               <span className="font-semibold text-gray-300">
  //                 {video.title}
  //               </span>
  //               <div className="text-xs text-gray-600">
  //                 <div>{video.channel}</div>
  //                 <div className="flex gap-1">
  //                   <div>{video.views}</div>
  //                   <div>{video.uploaded}</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </li>
  //         ))}
  //       </ul> */}
  //       <RelevantVideos tags={currentVideo.tags} />
  //     </div>
  //   </div>
  // );

  return !currentUser ? (
    navigate("/sign-in")
  ) : !currentVideo ? (
    <div>Loading video...</div>
  ) : (
    <div className="mx-4 my-2 flex flex-col lg:flex-row gap-4 p-4 text-gray-200">
      <div className="flex-1">
        <VideoPlayer
          src={currentVideo.videoUrl}
          poster={currentVideo.imageUrl}
        />
        <div className="mt-2">
          <h1 className="text-2xl font-bold ">{currentVideo.title}</h1>
          <div className="mb-2">
            <span className="text-gray-400 text-sm">
              {currentVideo.views} views • {format(currentVideo.createdAt)}
            </span>
          </div>
          <div className="flex flex-wrap items-center space-x-2 mb-2">
            <button
              className="flex items-center space-x-1 px-3 py-1 text-gray-300 bg-gray-950 rounded-md text-sm border-[.5px] border-gray-800 hover:bg-gray-900"
              onClick={handleLike}
            >
              {currentVideo.likes.includes(currentUser._id) ? (
                <FaThumbsUp />
              ) : (
                <FaRegThumbsUp />
              )}
              <span>Like</span>
              <span>{currentVideo.likes?.length}</span>
            </button>
            <button
              className="flex items-center space-x-1 px-3 py-1 text-gray-300 bg-gray-950 rounded-md text-sm border-[.5px] border-gray-800 hover:bg-gray-900"
              onClick={handleDislike}
            >
              {currentVideo.dislikes?.includes(currentUser._id) ? (
                <FaThumbsDown />
              ) : (
                <FaRegThumbsDown />
              )}

              <span>Dislike</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-1 text-gray-300 bg-gray-950 rounded-md text-sm border-[.5px] border-gray-800 hover:bg-gray-900">
              <FaShare />
              <span>Share</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={channel.image}
              alt="Channel avatar"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <div className="text-lg font-semibold">{channel.name}</div>
              <div className="text-sm text-gray-400">
                {channel.subscribers} subscribers
              </div>
            </div>
            <button
              className={`px-3 py-1  rounded-md text-sm ${
                currentUser.subscribedUsers?.includes(channel._id)
                  ? "bg-gray-950 border-[.5px] border-gray-700"
                  : "bg-slate-200 text-black"
              }`}
              onClick={handleSub}
            >
              {currentUser.subscribedUsers?.includes(channel._id)
                ? "SUBSCRIBED"
                : "SUBSCRIBE"}
            </button>
          </div>
          <div className="mt-2">
            <div
              className="text-lg font-bold cursor-pointer flex items-center space-x-2"
              onClick={toggleDescriptionVisibility}
            >
              <span>Description</span>
              {isDescriptionVisible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isDescriptionVisible && (
              <div className="mt-2 bg-gray-950 p-2 rounded-md">
                {currentVideo.desc}
              </div>
            )}
          </div>
          <Comments videoId={currentVideo._id} />
        </div>
      </div>
      <div className="lg:w-1/3">
        <h2 className="text-xl font-bold mb-2">Relevant Videos</h2>
        <RelevantVideos tags={currentVideo.tags} />
      </div>
    </div>
  );
}

export default VideoPage;
