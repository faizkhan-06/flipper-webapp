// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useSelector } from "react-redux";

// function Comments({ videoId }) {
//   const { currentUser } = useSelector((state) => state.user);
//   const [comments, setComments] = useState([]);
//   const [channel, setChannel] = useState({});

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const res = await axios.get(`/api/comments/${videoId}`);
//         setComments(res.data);
//       } catch (err) {
//         toast.error(err);
//       }
//       fetchComments();
//     };
//   }, [videoId]);
//   useEffect(()=>{
//     const fetchComment = async () => {
//         try {
//           const res = await axios.get(`/api/users/find/${comments.userId}`);
//           setChannel(res.data);
//         } catch (err) {
//           toast.error(err);
//         }
//         fetchComments();
//   },[]);
//   return (
//     <>
//       <div className="mt-2">
//         <h2 className="text-xl font-bold mb-2 flex items-center space-x-2">
//           <span>Comments</span>
//           <span className="text-gray-400 text-sm">
//             ({comments.length} comments)
//           </span>
//         </h2>
//         <div className=" rounded-md">
//           <div className="mb-2 flex items-start space-x-2">
//             <img
//               src={currentUser.image} // Use the current user's profile image
//               alt="img"
//               className="w-8 h-8 object-cover rounded-full"
//             />
//             <div className="flex-1">
//               <textarea
//                 className="w-full bg-slate-950 border-[.5px] border-gray-700 text-gray-300 p-2 rounded-md"
//                 rows="3"
//                 placeholder="Add a comment..."
//               />
//               <button className="mt-2 px-3 py-1 bg-slate-950 border-[.5px] border-gray-700 text-white rounded-md text-sm">
//                 Comment
//               </button>
//             </div>
//           </div>
//           <div>
//             {comments.map((comment) => (
//               <div key={comment._id} className="mb-2">
//                 <div className="flex items-start space-x-2">
//                   <img
//                     src={channel.image} // Replace with user profile image
//                     alt="User"
//                     className="w-8 h-8 object-cover rounded-full"
//                   />
//                   <div>
//                     <div className="font-semibold text-gray-300">
//                       {channel.name}
//                     </div>
//                     <div className="text-gray-400">{comment.desc}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Comments;
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { format } from "timeago.js";
// import CommentForm from "./CommentForm";
// import ReplyForm from "./ReplyForm";
// import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaReply } from "react-icons/fa";

// // import {
// //   fetchCommentsStart,
// //   fetchCommentsFailure,
// //   fetchCommentsSuccess,
// //   likeComment,
// //   dislikeComment,
// // } from "../../redux/commentSlice";

// function Comments({ videoId }) {
//   const { currentUser } = useSelector((state) => state.user);
//   const [comments, setComments] = useState([]);
//   const [isReplyingTo, setIsReplyingTo] = useState(null);
//   const dispatch = useDispatch();

//   const fetchComments = async () => {
//     try {
//       const res = await axios.get(`/api/comments/${videoId}`);
//       const commentsWithUserData = await Promise.all(
//         res.data.map(async (comment) => {
//           const userRes = await axios.get(`/api/users/find/${comment.userId}`);
//           return { ...comment, user: userRes.data };
//         })
//       );
//       setComments(commentsWithUserData);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   // const toggleLikeComment = async (commentId, likedByUser) => {
//   //   try {
//   //     if (likedByUser) {
//   //       await axios.put(`/api/comments/${commentId}/unlike`);
//   //     } else {
//   //       await axios.put(`/api/comments/${commentId}/like`);
//   //     }
//   //     fetchComments(); // Refresh comments to update likes
//   //   } catch (err) {
//   //     toast.error("Failed to toggle like on the comment.");
//   //   }
//   // };
//   const handleLike = async (commentId, likedByUser) => {
//     try {
//       if (likedByUser) {
//         await axios.put(`/api/comments/${commentId}/unlike`);
//       } else {
//         await axios.put(`/api/comments/${commentId}/like`);
//       }
//       fetchComments(); // Refresh comments to update likes
//     } catch (err) {
//       toast.error("Failed to toggle like on the comment.");
//     }
//   };

//   const handleDislike = async (commentId, dislikedByUser) => {
//     try {
//       if (dislikedByUser) {
//         await axios.put(`/api/comments/${commentId}/undislike`);
//       } else {
//         await axios.put(`/api/comments/${commentId}/dislike`);
//       }
//       fetchComments(); // Refresh comments to update dislikes
//     } catch (err) {
//       toast.error("Failed to toggle dislike on the comment.");
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(`/api/comments/${commentId}`);
//       fetchComments(); // Refresh comments after deletion
//     } catch (err) {
//       toast.error("Failed to delete the comment.");
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, [videoId]);

//   return (
//     <div className="mt-2">
//       <h2 className="text-xl font-bold mb-2 flex items-center space-x-2">
//         <span>Comments</span>
//         <span className="text-gray-400 text-sm">
//           ({comments.length} comments)
//         </span>
//       </h2>
//       <div className="rounded-md">
//         <CommentForm videoId={videoId} currentUser={currentUser} />
//         <div>
//           {comments.map((comment) => {
//             const likedByUser =
//               Array.isArray(comment.likes) &&
//               comment.likes.includes(currentUser._id);

//             return (
//               <div key={comment._id} className="p-2 border-b border-gray-700">
//                 <div className="flex items-start space-x-2">
//                   <img
//                     src={comment.user.image}
//                     alt="User profile"
//                     className="w-8 h-8 object-cover rounded-full"
//                   />
//                   <div>
//                     <div className="flex items-center space-x-2">
//                       <span className="font-semibold text-gray-300">
//                         {comment.user.name}
//                       </span>
//                       <span className="text-gray-500 text-xs">
//                         {format(comment.createdAt)}
//                       </span>
//                     </div>
//                     <div className="text-gray-400">{comment.desc}</div>
//                     <div className="flex space-x-4 mt-2 text-gray-500">
//                       <button
//                         onClick={() => handleLike(comment._id, likedByUser)}
//                         className={`flex items-center space-x-1 ${
//                           likedByUser ? "bg-white text-black" : ""
//                         }`}
//                       >
//                         <AiOutlineLike />
//                         <span>{comment.likes.length || 0}</span>
//                       </button>
//                       <button
//                         onClick={() =>
//                           handleDislike(comment._id, dislikedByUser)
//                         }
//                         className={`flex items-center space-x-1 ${
//                           dislikedByUser ? "bg-white text-black" : ""
//                         }`}
//                       >
//                         <AiOutlineDislike />
//                         <span>{comment.dislikes.length || 0}</span>
//                       </button>

//                       <button
//                         onClick={() => setIsReplyingTo(comment._id)}
//                         className="flex items-center space-x-1"
//                       >
//                         <FaReply />
//                         <span>Reply</span>
//                       </button>
//                       {comment.userId === currentUser._id && (
//                         <button
//                           onClick={() => deleteComment(comment._id)}
//                           className="flex items-center space-x-1 text-red-500"
//                         >
//                           <RiDeleteBin6Line />
//                           <span>Delete</span>
//                         </button>
//                       )}
//                     </div>
//                     {comment.replies?.map((reply) => (
//                       <div
//                         key={reply._id}
//                         className="ml-8 mt-2 border-l border-gray-600 pl-4"
//                       >
//                         <div className="flex items-start space-x-2">
//                           <img
//                             src={reply.user.image}
//                             alt="User profile"
//                             className="w-6 h-6 object-cover rounded-full"
//                           />
//                           <div>
//                             <span className="font-semibold text-gray-300">
//                               {reply.user.name}
//                             </span>
//                             <div className="text-gray-400">{reply.desc}</div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     {isReplyingTo === comment._id && (
//                       <ReplyForm
//                         parentId={comment._id}
//                         videoId={videoId}
//                         onReply={fetchComments}
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Comments;
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import CommentForm from "./CommentForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function Comments({ videoId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/comments/${videoId}`);
      const commentsWithUserData = await Promise.all(
        res.data.map(async (comment) => {
          const userRes = await axios.get(`/api/users/find/${comment.userId}`);
          return { ...comment, user: userRes.data };
        })
      );
      // Sort comments to put the current user's comments at the top
      const sortedComments = commentsWithUserData.sort((a, b) =>
        a.userId === currentUser._id ? -1 : b.userId === currentUser._id ? 1 : 0
      );
      setComments(sortedComments);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/comments/${commentId}`);
      fetchComments(); // Refresh comments after deletion
      toast.success("Comment deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete the comment.");
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold mb-2 flex items-center space-x-2">
        <span>Comments</span>
        <span className="text-gray-400 text-sm">
          ({comments.length} comments)
        </span>
      </h2>
      <div className="rounded-md">
        <CommentForm videoId={videoId} currentUser={currentUser} />
        <div>
          {comments.map((comment) => (
            <div key={comment._id} className="p-2 border-b border-gray-700">
              <div className="flex items-start space-x-2">
                <img
                  src={comment.user.image}
                  alt="User profile"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-300">
                        {comment.user.name}
                      </span>
                      <span className="text-gray-500 text-xs ml-2">
                        {format(comment.createdAt)}
                      </span>
                    </div>
                    {comment.userId === currentUser._id && (
                      <div className="relative">
                        <button
                          onClick={() =>
                            setIsMenuOpen((prev) =>
                              prev === comment._id ? null : comment._id
                            )
                          }
                        >
                          <BiDotsHorizontalRounded className="text-gray-500" />
                        </button>
                        {isMenuOpen === comment._id && (
                          <div className="absolute right-0 mt-2 w-28 bg-gray-800 rounded-md shadow-lg">
                            <button
                              onClick={() => deleteComment(comment._id)}
                              className="w-full flex items-center px-4 py-2 text-red-500 hover:bg-gray-700"
                            >
                              <RiDeleteBin6Line className="mr-2" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="text-gray-400">{comment.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
