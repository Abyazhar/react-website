import React from 'react'
import '../AboutUs/Ourstory.scss'
import OurStoryHeader from '../HeaderOurStory'

const AboutUs = () => {
    return (
        <>
        <OurStoryHeader/>
            <div className="story-container">
                <div className="wrap">
                    <div className="content">
                        <h3>Our Story</h3>
                        <p><span><img className='image1' alt=""/>.....etc</span></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs
