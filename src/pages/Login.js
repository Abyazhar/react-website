import React from 'react';
import SigninGoogle from '../components/SigninGoogle/index';
import SigninGoogleElements from '../components/SigninGoogle/SigninGoogleElements';


const Login = props => {
    return (
        <>
           <SigninGoogleElements {...props}/>
           <SigninGoogle/> 
        </>
    )
}

export default Login
