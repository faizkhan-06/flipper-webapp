import React from "react";
import {
  Player,
  ControlBar,
  PlayToggle,
  ReplayControl,
  ForwardControl,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";

const VideoPlayer = ({ poster, src }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <Player playsInline poster={poster} src={src} className="h-full ">
        <ControlBar autoHide={false} disableDefaultControls={false}>
          <PlayToggle />
          <ReplayControl seconds={10} order={2.1} />
          <ForwardControl seconds={10} order={2.2} />
          <PlaybackRateMenuButton rates={[0.5, 1, 1.5, 2]} order={7.1} />
          <VolumeMenuButton vertical order={7.2} />
        </ControlBar>
      </Player>
    </div>
  );
};

export default VideoPlayer;
