import React from 'react';
import DateFormat from '../util/dateFormat'


const CommentsList = ({ comments }) => {

    if (comments === null) {
        return <div className="ui row">
            Comments disabled
            </div>
    }

    if (comments && comments.length === 0) {
        return <div className="ui row">
            There is no comments yet
            </div>

    }

    const commentsRender = comments.map(comment =>

        <div className="comment" key={comment.textOriginal}>
            <span className="avatar" >
                <img src={comment.authorProfileImageUrl}
                    alt={comment.authorDisplayName}
                    loading='lazy' />
            </span>
            <div className="content">
                <span className="author">{comment.authorDisplayName}</span>
                <div className="metadata">
                    <span className="date">{DateFormat(comment.publishedAt)}</span>
                </div>
                <div className="text">
                    {comment.textOriginal}
                </div>

            </div>
        </div>
    );
    
    const commentsContainerRender = <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {commentsRender }
    </div>

    return (
        <div style={{marginTop:'40px'}}>
            {commentsContainerRender}
        </div>
    )
}


export default CommentsList;
