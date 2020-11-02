import React from 'react'
import Video from '../../videos/videos-5.mp4'
import '../../components/HeaderSection/HeaderSection.scss'
import Navbar from '../../components/Navbar/Navbar';


function HerbsElement() {
    return (
        <>
        <Navbar/>
        <div className='hero-container'>
           <video playsInline autoPlay loop muted src={Video} type='video/mp4' /> 
           <h1>Herbs</h1>
           <p>Fill your Kitchen & Garden with herbs!</p>
        </div>
           
        </>
    );
}

export default HerbsElement
