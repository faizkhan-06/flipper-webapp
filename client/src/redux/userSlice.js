import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      // Corrected from loginSucess to loginSuccess
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false; // Resetting error on successful login
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    subscription: (state, action) => {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUsers =
          state.currentUser.subscribedUsers.filter(
            (channelId) => channelId !== action.payload
          );
      } else {
        state.currentUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
//   loading: false,
//   error: false,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//     },
//     loginSuccess: (state, action) => {
//       state.loading = false;
//       state.currentUser = action.payload;
//       state.error = false;
//       localStorage.setItem("currentUser", JSON.stringify(action.payload));
//     },
//     loginFailure: (state) => {
//       state.loading = false;
//       state.error = true;
//     },
//     logout: (state) => {
//       state.currentUser = null;
//       state.loading = false;
//       state.error = false;
//       localStorage.removeItem("currentUser");
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } =
//   userSlice.actions;
// export default userSlice.reducer;
