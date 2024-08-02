import { useEffect, useState } from "react";
import Navbar from "../components/nav/Navbar";
import Card from "../components/ui/Card";
import axios from "axios";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // Define the error state

  const fetchRandomVideo = async () => {
    try {
      const response = await axios.get(`/api/videos/${type}`);
      setVideos(response.data); // Assuming response.data is an array of videos
    } catch (error) {
      console.error("Error fetching video:", error);
      setError(error.message); // Set the error message
    }
  };

  useEffect(() => {
    fetchRandomVideo();
  }, [type]);

  return (
    <>
      {/* Display error if any */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
        {Array.isArray(videos) &&
          videos.map((video, index) => <Card key={video._id} video={video} />)}
      </div>
    </>
  );
};

export default Home;
