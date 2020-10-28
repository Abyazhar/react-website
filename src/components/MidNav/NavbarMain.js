import React from 'react';
import '../MidNav/NavbarMain.scss';


export const MainNav = () => {

    return (
        <>
        <nav id="nav">
            <ul>
                <li>
                <a href="#best-seller" className='active' >Best Sellers </a>
                </li>
                <li>
                    <a href="#new-arrival" >New Arrivals</a>
                </li>
                <li>
                    <a href="#joinus">Join Us</a>
                </li>
            </ul>

        </nav>
            
        </>
        
    );
    
}


export default MainNav
