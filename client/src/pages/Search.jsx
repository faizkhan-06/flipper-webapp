// import React from "react";

// const Search = () => {
//   const videos = [
//     {
//       id: 1,
//       title: "React Tutorial for Beginners",
//       channelName: "Code Academy",
//       views: "1M views",
//       uploadTime: "1 week ago",
//       thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
//       channelImage: "https://via.placeholder.com/50", // Replace with actual image URL
//     },
//     {
//       id: 2,
//       title: "Advanced JavaScript Concepts",
//       channelName: "Tech with Tim",
//       views: "500K views",
//       uploadTime: "2 days ago",
//       thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
//       channelImage: "https://via.placeholder.com/50", // Replace with actual image URL
//     },
//     {
//       id: 3,
//       title: "Understanding CSS Grid",
//       channelName: "Web Dev Simplified",
//       views: "750K views",
//       uploadTime: "3 weeks ago",
//       thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
//       channelImage: "https://via.placeholder.com/50", // Replace with actual image URL
//     },
//   ];

//   return (
//     <div className="bg-slate-950 min-h-screen text-white p-4 mx-6">
//       <h1 className="text-2xl mb-6 font-sans">Search Results</h1>
//       <div className="space-y-6">
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             className="bg-gray-950 border-[.5px] border-gray-900 rounded-xl overflow-hidden shadow-lg flex items-center p-4 hover:bg-gray-900 transition-colors duration-200"
//           >
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               className="w-48 h-28 object-cover mr-4 rounded-lg"
//             />
//             <div className="flex-1">
//               <h2 className="font-bold mb-2">{video.title}</h2>
//               <div className="flex items-center mb-2">
//                 <img
//                   src={video.channelImage}
//                   alt={video.channelName}
//                   className="w-6 h-6 rounded-full mr-2"
//                 />
//                 <span className="text-sm">{video.channelName}</span>
//               </div>
//               <p className="text-gray-400 text-xs">
//                 {video.views} • {video.uploadTime}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/videos/search?q=${searchQuery}`);
        setVideos(response.data);
      } catch (err) {
        setError("Failed to fetch videos. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchVideos();
    }
  }, [searchQuery]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-slate-950 min-h-screen text-white p-4 mx-6">
      <h1 className="text-2xl mb-6 font-sans">
        Search Results for "{searchQuery}"
      </h1>
      <div className="space-y-6">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Link to={`/video/${video._id}`}>
              <div
                key={video._id}
                className="bg-gray-950 border-[.5px] border-gray-900 rounded-xl overflow-hidden shadow-lg flex items-center p-4 hover:bg-gray-900 transition-colors duration-200"
              >
                <img
                  src={video.imageUrl}
                  alt={video.title}
                  className="w-24 sm:w-48 h-28 object-cover mr-4 rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="font-bold mb-2">{video.title}</h2>
                  <div className="flex items-center mb-2">
                    <img
                      src={video.user.image}
                      alt={video.user.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm">{video.user.name}</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    {video.views} views • {format(video.createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
