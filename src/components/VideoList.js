import React from 'react'
import './VideoList.css'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                video={video}
                key={video.snippet.title}
                onVideoSelect={onVideoSelect} />
        )
    })
    return (
        <div className="video-list-items">
            {renderedList}
        </div>
    )
}


export default VideoList;