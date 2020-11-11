import React, { Component } from 'react';
import '../../components/SignUp/SignUp.scss';

class Regis extends Component {

    render(){
        return (
            <>
            <div className='Container'>
                <div className='formWrap'>
                    <div className='FormContent'>
                        <form className='Form'>
                            <h1>Sign Up for New Account</h1>
                             <input type='name' text='Fullname' name="Username" className='FormInput' placeholder="Fullname" ></input>
                             <input type='email' text='Fullname' name="User-email" className='FormInput' placeholder="Your Email"></input>
                             <input type='password' text='Fullname' name="User-Password" className='FormInput' placeholder="Enter Password"></input>
                             <input type='password' text='Fullname' name="User-Password" className='FormInput'placeholder="Re-enter Your Password"></input>
                        </form>
                    </div>
                </div>
    
            </div>
                
            </>
        )
    }
}

export default Regis
