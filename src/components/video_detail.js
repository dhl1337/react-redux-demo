import React from 'react';

const VideoDetail  = ({video}) => {

    const videoId = video.id.video.Id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snipeet.description}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;