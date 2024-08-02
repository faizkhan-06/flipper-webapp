import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      // Corrected from loginSucess to loginSuccess
      state.loading = false;
      state.currentVideo = action.payload;
      state.error = false; // Resetting error on successful login
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    // like: (state, action) => {
    //   if (!state.currentVideo.likes.includes(action.payload)) {
    //     state.currentVideo.likes.push(action.payload);
    //     state.currentVideo.dislikes.splice(
    //       state.currentVideo.dislikes.findIndex(userId === action.payload),
    //       1
    //     );
    //   }
    // },
    // dislike: (state, action) => {
    //   if (!state.currentVideo.dislikes.includes(action.payload)) {
    //     state.currentVideo.dislikes.push(action.payload);
    //     state.currentVideo.dislikes.splice(
    //       state.currentVideo.likes.findIndex(userId === action.payload),
    //       1
    //     );
    //   }
    // },
    like: (state, action) => {
      const userId = action.payload;
      if (!state.currentVideo.likes.includes(userId)) {
        state.currentVideo.likes.push(userId);
        state.currentVideo.dislikes = state.currentVideo.dislikes.filter(
          (id) => id !== userId
        );
      }
    },
    dislike: (state, action) => {
      const userId = action.payload;
      if (!state.currentVideo.dislikes.includes(userId)) {
        state.currentVideo.dislikes.push(userId);
        state.currentVideo.likes = state.currentVideo.likes.filter(
          (id) => id !== userId
        );
      }
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } =
  videoSlice.actions;
export default videoSlice.reducer;
