import React from 'react';
import '../App.css';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import Card from '../components/Cards/Card';
import NavbarMain from '../components/MidNav/NavbarMain';
import CardArrival from '../components/Cards/CardArrival';
import Footer from '../components/Footer/Footer';
import CardJoin from '../components/Cards/CardJoin';

function Homepage(){
    return(
        <>
        <HeaderSection/>
        <NavbarMain/>
        <Card/>
        <CardArrival/>
        <CardJoin/>
        <Footer/>
        </>
    )
} 
export default Homepage;