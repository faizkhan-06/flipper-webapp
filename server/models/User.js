import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      //   required: true,
    },
    image: {
      type: String,
      default:
        "https://cloud.appwrite.io/v1/storage/buckets/66b45df6000693a24338/files/66bce380001c0c8a13ab/view?project=66b45ac600368273baf8&mode=admin",
    },
    about: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
