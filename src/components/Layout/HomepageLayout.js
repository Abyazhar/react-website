import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const HomepageLayout = props => {
    return (
        <div>
            <Navbar {...props}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default HomepageLayout
