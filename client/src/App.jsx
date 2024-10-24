import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/nav/Navbar";
const Navbar = lazy(() => import("./components/nav/Navbar"));
import BentoGrid from "./components/ui/BentoGrid";
import ExploreGrid from "./components/ui/ExploreGrid";
import Card from "./components/ui/Card";
// import Explore from "./pages/Explore";
const Explore = lazy(() => import("./pages/Explore"));
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
// import VideoPage from "./pages/VideoPage";
const VideoPage = lazy(() => import("./pages/VideoPage"));
// import ChannelPage from "./pages/ChannelPage";
const ChannelPage = lazy(() => import("./pages/ChannelPage"));
// import UserProfilePage from "./pages/UserProfilePage";
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
// import EditProfilePage from "./pages/EditProfilePage";
const EditProfilePage = lazy(() => import("./pages/EditProfilePage"));
// import UploadVideoPage from "./pages/UploadVideoPage";
const UploadVideoPage = lazy(() => import("./pages/UploadVideoPage"));
// import ChannelsPage from "./pages/ChannelsPage";
const ChannelsPage = lazy(() => import("./pages/ChannelsPage"));
// import Signup from "./pages/Signup";
const Signup = lazy(() => import("./pages/Signup"));
import Signin from "./pages/Signin";
// const Signin = lazy(() => import("./pages/Signin"));
import Test from "./pages/Test";
const Search = lazy(() => import("./pages/Search"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const VideoRoom = lazy(() => import("./pages/VideoRoom"));
const VoiceRoom = lazy(() => import("./pages/VoiceRoom"));
import AgoraRTC from "agora-rtc-sdk-ng";
import { AgoraRTCProvider } from "agora-rtc-react";
import SpinnerSquare from "./components/ui/SpinnerSquare";
import PageNotFound from "./components/PageNotFound ";
const TextRoom = lazy(() => import("./pages/TextRoom"));

function App() {
  // const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  return (
    <>
      <Suspense fallback={<SpinnerSquare />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home type="random" />}></Route>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />

            <Route path="/explore" element={<Explore />}></Route>
            <Route
              path="/explore/trend"
              element={<Home type="trend" />}
            ></Route>
            <Route path="/explore/music" element={<Home type="Music" />} />
            <Route path="/explore/gaming" element={<Home type="Gaming" />} />
            <Route
              path="/explore/learning"
              element={<Home type="Learning" />}
            />
            <Route path="/explore/art" element={<Home type="Art" />} />
            <Route path="/explore/fashion" element={<Home type="Fashion" />} />

            <Route path="/search" element={<Search />} />

            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/channel" element={<ChannelPage />} />
            <Route
              path="/channel-profile/:userId"
              element={<UserProfilePage />}
            />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/upload-video" element={<UploadVideoPage />} />
            <Route path="/channels" element={<ChannelsPage />} />

            <Route path="/community" element={<CommunityPage />} />
            <Route path="/video-room/:videoRoomId" element={<VideoRoom />} />
            <Route path="/voice-room/:voiceRoomId" element={<VoiceRoom />} />
            <Route path="/text-room/:textRoomId" element={<TextRoom />} />
            {/* <Route path="/test" element={<Test />} /> */}

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
