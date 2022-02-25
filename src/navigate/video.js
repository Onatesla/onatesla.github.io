import ReactPlayer from "react-player"
const Video = () =>{

  return(<ReactPlayer
    url="https://www.youtube.com/watch?v=7cN5Spqfddw"
    controls
    playbackRate = {2}
    width = "100%"
    height = "800px"
    className="video"
/>)

}
export default Video;