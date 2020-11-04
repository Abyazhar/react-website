import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SigninGoogle from '../components/SigninGoogle/index';



const Login  = props => {
    return (
        <>
           <Navbar {...props}/>
           <SigninGoogle/> 
        </>
    )
}

export default Login
