import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loading: false,
  error: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    fetchCommentsStart: (state) => {
      state.loading = true;
    },
    fetchCommentsSuccess: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      state.error = false;
    },
    fetchCommentsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
    likeComment: (state, action) => {
      const { commentId, userId } = action.payload;
      const comment = state.comments.find((c) => c._id === commentId);
      if (comment && !comment.likes.includes(userId)) {
        comment.likes.push(userId);
        comment.dislikes = comment.dislikes.filter((id) => id !== userId);
      }
    },
    dislikeComment: (state, action) => {
      const { commentId, userId } = action.payload;
      const comment = state.comments.find((c) => c._id === commentId);
      if (comment && !comment.dislikes.includes(userId)) {
        comment.dislikes.push(userId);
        comment.likes = comment.likes.filter((id) => id !== userId);
      }
    },
  },
});

export const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  addComment,
  deleteComment,
  likeComment,
  dislikeComment,
} = commentSlice.actions;

export default commentSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async actions
// export const fetchComments = createAsyncThunk(
//   "comments/fetchComments",
//   async (videoId) => {
//     const response = await axios.get(`/api/comments/${videoId}`);
//     return response.data;
//   }
// );

// export const toggleLikeComment = createAsyncThunk(
//   "comments/toggleLikeComment",
//   async ({ commentId, likedByUser }) => {
//     if (likedByUser) {
//       await axios.put(`/api/comments/${commentId}/unlike`);
//     } else {
//       await axios.put(`/api/comments/${commentId}/like`);
//     }
//     return { commentId, likedByUser };
//   }
// );

// export const dislikeComment = createAsyncThunk(
//   "comments/dislikeComment",
//   async (commentId) => {
//     await axios.put(`/api/comments/${commentId}/dislike`);
//     return commentId;
//   }
// );

// export const deleteComment = createAsyncThunk(
//   "comments/deleteComment",
//   async (commentId) => {
//     await axios.delete(`/api/comments/${commentId}`);
//     return commentId;
//   }
// );

// const commentSlice = createSlice({
//   name: "comments",
//   initialState: {
//     comments: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchComments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchComments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.comments = action.payload;
//       })
//       .addCase(toggleLikeComment.fulfilled, (state, action) => {
//         const { commentId, likedByUser } = action.payload;
//         const comment = state.comments.find((c) => c._id === commentId);
//         if (comment) {
//           if (likedByUser) {
//             comment.likes = comment.likes.filter(
//               (id) => id !== action.meta.arg.userId
//             );
//           } else {
//             comment.likes.push(action.meta.arg.userId);
//           }
//         }
//       })
//       .addCase(dislikeComment.fulfilled, (state, action) => {
//         const comment = state.comments.find((c) => c._id === action.payload);
//         if (comment) {
//           comment.dislikes += 1; // Update logic as necessary
//         }
//       })
//       .addCase(deleteComment.fulfilled, (state, action) => {
//         state.comments = state.comments.filter((c) => c._id !== action.payload);
//       })
//       .addCase(fetchComments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default commentSlice.reducer;
