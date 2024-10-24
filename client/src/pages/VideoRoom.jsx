import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";
import { useSelector } from "react-redux";

const VideoRoom = () => {
  const { videoRoomId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  async function meetingUI(element) {
    const appId = parseInt(import.meta.env.VITE_ZEGOCLOUD_APPID);
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVERSECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      videoRoomId,
      v4(),
      currentUser.name
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);
    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }
  return (
    <>
      <div className=" w-full h-screen" ref={meetingUI}></div>
    </>
  );
};

export default VideoRoom;
