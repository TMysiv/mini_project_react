import React from 'react';
import YouTube from 'react-youtube';
import {useSelector} from "react-redux";

const Youtube = () => {

    const {videos} = useSelector(state => state['cardReducer']);
    const {key} = videos

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        }
    }
    const pause = (e) => {
        e.target.pauseVideo();
    }
    return (
        <div>
            <YouTube videoId={key} opts={opts} onReady={pause} />
        </div>
    );
};

export default Youtube;