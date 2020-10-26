import './App.css'

import React from 'react'

import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

import CommentsList from './CommentsList';
import FooterAvatar from './FooterAvatar'


class App extends React.Component {

    async componentDidMount() {
         await this.onSearchBar_submit('zerphank');
        this.myRefApp = React.createRef()
    }

    state = { videos: [], selectedVideo: null, comments: [] }

    onSearchBar_submit = async (query) => {
        console.log(query)
        const response = await youtube.get('/search', {
            params: {
                q: query
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: (response.data.items[0].id.kind === 'youtube#video') ? response.data.items[0] : response.data.items[1]
        });
        this.searchComments_videoSelected(this.state.selectedVideo.id.videoId)

    }

    searchComments_videoSelected = async (videoId) => {
        try {
            const response = await youtube.get('/commentThreads', {
                params: {
                    videoId: videoId
                }
            });
            const comments = response.data.items.map(item => { return item.snippet.topLevelComment.snippet });
            this.setState({ comments: comments })

        } catch (error) {
            this.setState({ comments: null })
        }
    }

    onVideoSelect = (video) => {
        const idVideo = video.id.videoId;
        this.searchComments_videoSelected(idVideo)
        this.setState({ selectedVideo: video })
        if (this.myRefApp && this.myRefApp.current) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    render() {

        return (
            <div ref={this.myRefApp}
                className="ui container"
            >
                <h3 className="header-youtube">Youtube API Client</h3>
                <div style={{ 'marginTop': '110px' }} />
                <SearchBar onFormSubmit={this.onSearchBar_submit} />
                <div className="ui grid ">
                    <div className="ui row">
                        <div className="video-list-container">
                            <VideoDetail video={this.state.selectedVideo} />
                            <div className="ui horizontal divider">

                            </div>
                            <CommentsList comments={this.state.comments} />

                        </div>
                        <div className="video-detail-container">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>

                    </div>
                    <div className="ui row" style={{ marginTop: '100px' }}>
                        < FooterAvatar />
                    </div>

                </div>
            </div>)
    }
}

export default App;