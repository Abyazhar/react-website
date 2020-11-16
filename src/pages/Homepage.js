import React from 'react'

import HeaderSection from '../components/HeaderSection/HeaderSection';
import NavbarMain from '../components/MidNav/NavbarMain';
import Card from '../components/Cards/Card';
import CardArrival from '../components/Cards/CardArrival';
import CardJoin from '../components/Cards/CardJoin';


const Homepage = props => {
    return (
        <>
        <HeaderSection/>
        <NavbarMain/>
        <Card/>
        <CardArrival/>
        <CardJoin/>
        
        </>
    )
}

export default Homepage
