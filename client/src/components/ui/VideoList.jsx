import React from "react";
import VideoCard from "./VideoCard";

function VideoList() {
  // Placeholder data for videos
  const videos = [
    { id: 1, title: "Video Title 1", views: "1M views", date: "1 week ago" },
    { id: 2, title: "Video Title 2", views: "500K views", date: "2 weeks ago" },
    { id: 3, title: "Video Title 3", views: "2M views", date: "1 month ago" },
    { id: 4, title: "Video Title 4", views: "1M views", date: "1 week ago" },
    { id: 5, title: "Video Title 5", views: "500K views", date: "2 weeks ago" },
    { id: 6, title: "Video Title 6", views: "2M views", date: "1 month ago" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoList;
