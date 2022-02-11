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
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const x = (e) => {
        e.target.pauseVideo();
    }
    return (
        <div>
            <YouTube videoId={key} opts={opts} onReady={x} />
        </div>
    );
};

export default Youtube;