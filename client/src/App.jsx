import Navbar from "./components/nav/Navbar";
import BentoGrid from "./components/ui/BentoGrid";
import ExploreGrid from "./components/ui/ExploreGrid";
import Card from "./components/ui/Card";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import ChannelPage from "./pages/ChannelPage";
import UserProfilePage from "./pages/UserProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import UploadVideoPage from "./pages/UploadVideoPage";
import ChannelsPage from "./pages/ChannelsPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home type="random" />}></Route>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />

          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/explore/trend" element={<Home type="trend" />}></Route>

          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/channel" element={<ChannelPage />} />
          <Route path="/channel-profile" element={<UserProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/upload-video" element={<UploadVideoPage />} />
          <Route path="/channels" element={<ChannelsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
