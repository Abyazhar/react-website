import React from 'react';
import AboutUs from '../components/AboutUs';
import Parenthood from '../components/AboutUs/storyelements1';
import OurStoryHeader from '../components/HeaderOurStory/index';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';



const Ourstory = () => {
    return (
        <>
            <Navbar/>
            <OurStoryHeader/>
            <AboutUs/>
            <Parenthood/>
            <Footer/>
        </>
    )
}

export default Ourstory
