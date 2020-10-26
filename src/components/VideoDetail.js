import React from 'react';
import DateFormat from '../util/dateFormat'


const VideoDetail = ({ video }) => {
    //props.video ->video
    if (!video) {
        return <div>Loading ...</div>
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    const formattedDate = DateFormat(video.snippet.publishedAt)
    return (
        <div >

            <div className="ui embed">
                <div className="embedtool">

                    <iframe src={videoSrc} title="Video Player" frameBorder="0" allowFullScreen autoPlay></iframe>
                </div>
            </div>
            <div className="ui segment ">
                <h3>{video.snippet.title}</h3>
                <p>{formattedDate}</p>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    )
}


export default VideoDetail;
