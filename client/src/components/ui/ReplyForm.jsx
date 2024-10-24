import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function ReplyForm({ parentId, videoId, onReplyAdded }) {
  const { currentUser } = useSelector((state) => state.user);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) {
      toast.error("Reply cannot be empty!");
      return;
    }

    try {
      const newReply = {
        parentId,
        videoId,
        desc: replyText,
        userId: currentUser._id,
      };

      await axios.post(`/api/comments/${parentId}/reply`, newReply);

      toast.success("Reply added successfully!");
      setReplyText(""); // Clear the input after submission
      onReplyAdded(); // Refresh comments after adding a reply
    } catch (err) {
      toast.error("Failed to add reply.");
    }
  };

  return (
    <form onSubmit={handleReplySubmit} className="flex mt-2 space-x-2">
      <img
        src={currentUser.image}
        alt="Your profile"
        className="w-6 h-6 object-cover rounded-full"
      />
      <input
        type="text"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Add a reply..."
        className="flex-1 bg-slate-950 border-[.5px] border-gray-700 text-gray-300 p-2 rounded-md text-sm"
      />
      <button
        type="submit"
        className="px-3 py-1 bg-slate-950 border-[.5px] border-gray-700 text-white rounded-md text-sm"
      >
        Reply
      </button>
    </form>
  );
}

export default ReplyForm;
