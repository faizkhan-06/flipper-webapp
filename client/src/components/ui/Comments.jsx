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
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

function Comments({ videoId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/comments/${videoId}`);
        const commentsWithUserData = await Promise.all(
          res.data.map(async (comment) => {
            const userRes = await axios.get(
              `/api/users/find/${comment.userId}`
            );
            return { ...comment, user: userRes.data };
          })
        );
        setComments(commentsWithUserData);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchComments();
  }, [videoId, comments.userId]);

  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold mb-2 flex items-center space-x-2">
        <span>Comments</span>
        <span className="text-gray-400 text-sm">
          ({comments.length} comments)
        </span>
      </h2>
      <div className="rounded-md">
        <div className="mb-2 flex items-start space-x-2">
          <img
            src={currentUser.profileImage} // Use the current user's profile image
            alt="img"
            className="w-8 h-8 object-cover rounded-full"
          />
          <div className="flex-1">
            <textarea
              className="w-full bg-slate-950 border-[.5px] border-gray-700 text-gray-300 p-2 rounded-md"
              rows="3"
              placeholder="Add a comment..."
            />
            <button className="mt-2 px-3 py-1 bg-slate-950 border-[.5px] border-gray-700 text-white rounded-md text-sm">
              Comment
            </button>
          </div>
        </div>
        <div>
          {comments.map((comment) => (
            <div key={comment._id} className="mb-2">
              <div className="flex items-start space-x-2">
                <img
                  src={comment.user.image} // Replace with user profile image
                  alt="User"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-300">
                      {comment.user.name}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {format(comment.createdAt)}
                    </span>
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
