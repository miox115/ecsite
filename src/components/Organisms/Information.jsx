import React from "react";
import ReactPlayer from "react-player";
import video from "../../img/move/info_video.mp4";

export const Information = () => {
  return (
    <div className="text-center">
      <p>TV放映中</p>
      <div>
        <ReactPlayer url={video} playing />
      </div>
    </div>
  );
};
