import React from 'react'

export default function YoutubeVideo(props) {
    const { id } = props

    return (
        <iframe className='youtube-video' width="560" height="315" src={`https://www.youtube.com/embed/${id}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}
