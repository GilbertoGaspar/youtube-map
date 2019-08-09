import React, { Component } from 'react'
import { connect } from 'react-redux'
import YoutubeVideo from './YoutubeVideo'
import YoutubeSideBar from './YoutubeSidebar'
import { addSelectedVideo } from '../actions/selectedVideo'

class YoutubeViewer extends Component {
    handleVideoSelected = (videoId) => {
        this.props.dispatch(addSelectedVideo(videoId))
        document.querySelector('.youtube-video').scrollIntoView()
    }

    render() {
        return (
            <div className='youtube-viewer'>
                <YoutubeVideo id={this.props.selectedVideo} />
                <YoutubeSideBar videos={this.props.videos} selectHandler={this.handleVideoSelected}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { videos, selectedVideo} = state
    return {
        videos,
        selectedVideo
    }
}
export default connect(mapStateToProps)(YoutubeViewer)