// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": "http://localhost:3000",
//       "/socket.io": {
//         target: "http://localhost:3000", // Proxy to your Socket.IO server
//         ws: true, // Enable WebSocket proxying
//         changeOrigin: true,
//       },
//     },
//   },
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/socket.io": {
        target: "http://localhost:3000", // Proxy to your Socket.IO server
        ws: true, // Enable WebSocket proxying
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
