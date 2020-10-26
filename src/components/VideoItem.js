import './VideoItem.css'
import React from 'react';
import DateFormat from '../util/dateFormat'


const VideoItem = ({ video, onVideoSelect }) => {
    if (video.id.kind !== 'youtube#video') {
        return <div></div>;
    }
    const formattedDate = DateFormat(video.snippet.publishedAt)

    return (

        <div onClick={() => { onVideoSelect(video) }}
            className="ui card"
            style={{ 'cursor': 'pointer' ,margin:'10px'}}>
            <img
                alt={video.snippet.title}
                className=" ui image"
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                {video.snippet.title}
                <div className="meta">
                    <span>{formattedDate}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;

