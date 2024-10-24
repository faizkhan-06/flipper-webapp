// import { useEffect, useState } from "react";
// import Navbar from "../components/nav/Navbar";
// import Card from "../components/ui/Card";
// import axios from "axios";
// import SpinnerSquare from "../components/ui/SpinnerSquare";

// const Home = ({ type }) => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Define the error state

//   const fetchRandomVideo = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/videos/${type}`);
//       setVideos(response.data); // Assuming response.data is an array of videos
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error fetching video:", error);
//       setError(error.message); // Set the error message
//     }
//   };

//   useEffect(() => {
//     fetchRandomVideo();
//   }, [type]);

//   return (
//     <>
//       {loading ? (
//         <SpinnerSquare />
//       ) : (
//         // Display error if any
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
//           {Array.isArray(videos) &&
//             videos.map((video) => <Card key={video._id} video={video} />)}
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import Navbar from "../components/nav/Navbar";
// import Card from "../components/ui/Card";
// import axios from "axios";
// import SpinnerSquare from "../components/ui/SpinnerSquare";

// const Home = ({ type }) => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to fetch random (trending) videos
//   const fetchRandomVideos = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/videos/${type}`); // Assuming this endpoint gets random trending videos
//       setVideos(response.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error fetching random videos:", error);
//       setError(error.message);
//     }
//   };

//   // Function to fetch videos by category
//   const fetchVideosByCategory = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/videos/category/${type}`);
//       setVideos(response.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error fetching category videos:", error);
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     if (type === "trend" || type === "random") {
//       fetchRandomVideos(); // Fetch random (trending) videos if type is 'trend'
//     } else {
//       fetchVideosByCategory(); // Fetch category videos for other types
//     }
//   }, [type]);

//   return (
//     <>
//       {loading ? (
//         <SpinnerSquare />
//       ) : error ? (
//         <div className="text-red-500">{error}</div> // Display the error message
//       ) : (
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
//           {Array.isArray(videos) &&
//             videos.map((video) => <Card key={video._id} video={video} />)}
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import Navbar from "../components/nav/Navbar";
import Card from "../components/ui/Card";
import axios from "axios";
import SpinnerSquare from "../components/ui/SpinnerSquare";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch random (trending) videos
  const fetchRandomVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/videos/${type}`); // Assuming this endpoint gets random trending videos
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching random videos:", error);
      setError(error.message);
    }
  };

  // Function to fetch videos by category
  const fetchVideosByCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/videos/category/${type}`);
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching category videos:", error);
      setError(error.message);
    }
  };

  console.log(videos);

  useEffect(() => {
    if (type === "trend" || type === "random") {
      fetchRandomVideos(); // Fetch random (trending) videos if type is 'trend'
    } else {
      fetchVideosByCategory(); // Fetch category videos for other types
    }
  }, [type]);

  return (
    <>
      {loading ? (
        <SpinnerSquare />
      ) : error ? (
        <div className="text-red-500">{error}</div> // Display the error message
      ) : videos.length === 0 ? ( // Check if there are no videos
        <div className="text-white text-center mt-10">No videos found</div> // Display 'No videos found' message
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white">
          {Array.isArray(videos) &&
            videos.map((video) => <Card key={video._id} video={video} />)}
        </div>
      )}
    </>
  );
};

export default Home;
