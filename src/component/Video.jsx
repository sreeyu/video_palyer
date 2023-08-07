import React, { useRef, useEffect } from "react";

function Video(props){

    const videoRef = useRef();

    useEffect(() => {
        videoRef.current?.load();
    },[props.source])

    return(
        <video width="700px" height="500px" controls="controls" ref={videoRef} loop autoPlay muted >
            <source src={props.source} type="video/mp4" />
        </video>
    );
};

export default Video;