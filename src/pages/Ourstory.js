import React from 'react';
import AboutUs from '../components/AboutUs';
import Parenthood from '../components/AboutUs/storyelements1';
import OurStoryHeader from '../components/HeaderOurStory/index';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import CardJoin from '../components/Cards/CardJoin';
import Beall from '../components/AboutUs/storyelm2';



const Ourstory = () => {
    return (
        <>
            <Navbar/>
            <OurStoryHeader/>
            <AboutUs/>
            <Beall/>
            <Parenthood/>
            <CardJoin/>
            <Footer/>
        </>
    )
}

export default Ourstory
