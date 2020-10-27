import React from 'react';
import '../App.css';
import HeaderSection from '../layout/HeaderSection';
import Card from '../components/Card';
import NavbarMain from '../layout/NavbarMain';
import CardArrival from '../components/CardArrival';
import Footer from '../layout/Footer';
import CardJoin from '../components/CardJoin';

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