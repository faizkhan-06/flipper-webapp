import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/lib/integration/react.js";
import { AgoraRTCProvider } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
import AgoraRTM from "agora-rtm-sdk"; // Import RTM SDK

// const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <AgoraRTCProvider client={client}> */}
      <App />
      {/* </AgoraRTCProvider> */}
      <Toaster position="top-center" />
    </PersistGate>
  </Provider>
  // {/* </React.StrictMode> */}
);
