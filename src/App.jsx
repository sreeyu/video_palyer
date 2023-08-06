import React from "react";
import Menu from "./component/Menu";
import Video from "./component/Video";

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos);

function App() {
  
  return (
    <div className="App">
    <h1>Video Player</h1>
    <Menu options={videoNames} />
    <Video />
    </div>
  );
}

export default App;
