import React from 'react';
import Video from '../../videos/videos-7.mp4'

function HouseplantsElements() {
    return (
        <>
        <div className='hero-container'>
           <video playsInline autoPlay loop muted src={Video} type='video/mp4' /> 
           <h1>Houseplants</h1>
           <p>Living in urban with greens</p>
        </div>
        </>
    )
}

export default HouseplantsElements
