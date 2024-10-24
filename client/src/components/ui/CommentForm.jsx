import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CommentForm = ({ currentUser, videoId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure the payload has videoId and desc as required by the backend
      await axios.post(`/api/comments`, {
        // userId: currentUser._id,
        videoId: videoId,
        desc: comment,
      });
      toast.success("Comment posted successfully!");
      setComment("");
    } catch (error) {
      toast.error("Failed to post comment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 flex items-start space-x-2">
        <img
          src={currentUser.image}
          alt="User profile"
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex-1">
          <textarea
            className="w-full bg-slate-950 border-[.5px] border-gray-700 text-gray-300 p-2 rounded-md"
            rows="3"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 px-3 py-1 bg-slate-950 border-[.5px] border-gray-700 text-white rounded-md text-sm"
          >
            Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
