import React from 'react'
import '../HeaderSection/HeaderSection.scss'
import Video from '../../videos/videos-8.mp4'

const OurStoryHeader = () => {
    return (
        <>
        <div className="story-container">
        <video playsInline autoPlay loop muted src={Video} type='video/mp4' />
            <h3>What makes us different?</h3>
            <p>We indulge you personally -- <br/>and honestly to nature...</p>
        </div>
        </>
    )
}

export default OurStoryHeader
