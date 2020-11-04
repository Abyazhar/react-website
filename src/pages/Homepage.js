import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import NavbarMain from '../components/MidNav/NavbarMain';
import Card from '../components/Cards/Card';
import CardArrival from '../components/Cards/CardArrival';
import CardJoin from '../components/Cards/CardJoin';
import Footer from '../components/Footer/Footer';

const Homepage = props => {
    return (
        <>
        <Navbar {...props}/>
        <HeaderSection/>
        <NavbarMain/>
        <Card/>
        <CardArrival/>
        <CardJoin/>
        <Footer/>
            
        </>
    )
}

export default Homepage
