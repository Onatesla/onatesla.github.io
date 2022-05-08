import ReactPlayer from 'react-player';
import React from 'react';

function Video() {
  return (
    <ReactPlayer
      url="https://youtu.be/au8a4V23zno"
      controls
      playbackRate={2}
      width="100%"
      height="800px"
      className="video"
    />
  );
}
export default Video;
