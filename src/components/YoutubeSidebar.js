import React from 'react'

function YoutubeSidebar(props) {
    if(props.videos.length === 0) {
        return (
            <h3>No videos!</h3>
        )
    }
    else {
        return (
        <ul className='youtube-sidebar'>
            {props.videos.map(video => <li className='youtube-sidebar-video' key={video.id.videoId} onClick={() => {props.selectHandler(video.id.videoId)}}>
            <img className='youtube-sidebar-video-thumbnail' src={video.snippet.thumbnails.default.url} alt={video.snippet.title}></img>
            <div className='youtube-sidebar-video-info'>
                <h4 className='youtube-sidebar-video-title' dangerouslySetInnerHTML={{__html: video.snippet.title}}></h4>
                <p className='youtube-sidebar-video-channel'>{video.snippet.channelTitle}</p>
            </div>
            </li>)}
        </ul>
        )
    }
}


export default YoutubeSidebar
