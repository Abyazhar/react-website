import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Mainlayout = props => {
    return (
        <>
            <Navbar {...props}/>
                {props.children}
            <Footer/>   
        </>
    )
}

export default Mainlayout
