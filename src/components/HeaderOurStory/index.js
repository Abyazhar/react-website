import React from 'react'
import '../HeaderSection/HeaderSection.scss'
import Video from '../../videos/videos-8.mp4'

const OurStoryHeader = () => {
    return (
        <>
        <div className="hero-container">
        <video playsInline autoPlay loop muted src={Video} type='video/mp4' />
            <h1>What makes us different?</h1>
            <p>We indulge you personally - <br/>and honestly to nature...</p>
        </div>
        </>
    )
}

export default OurStoryHeader
