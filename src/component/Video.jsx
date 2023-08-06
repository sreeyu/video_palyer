import React from "react";

function Video(props){

    return(
        <video width="700px" height="500px" controls="controls" >
            <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4" type="video/mp4" />
        </video>
    );
};

export default Video;