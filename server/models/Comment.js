import mongoose from "mongoose";

// const CommentSchema = new mongoose.Schema({
//     userId : {
//         type : String,
//         required : true
//     },
//     videoId : {
//         type : String,
//         required : true
//     },
//     desc : {
//         type : String,
//         required : true
//     }
// },{timestamps: true});

// export default mongoose.model("comment",CommentSchema);

const CommentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    videoId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    parentCommentId: { type: String, default: null }, // For replies
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
