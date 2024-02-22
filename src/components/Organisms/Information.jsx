import ReactPlayer from "react-player";
import video from "../../img/move/info_video.mp4";

export const Information = () => {
  return (
    <div className="text-center m-8">
      <p className="text-xl font-bold mb-8">テレビにて放映中</p>
      <div className="flex justify-center">
        <ReactPlayer url={video} playing volume={0}/>
      </div>
    </div>
  );
};
