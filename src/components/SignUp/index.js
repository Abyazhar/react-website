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
                             <input type='name' text='Fullname' className='FormInput'></input>
                             <input type='email' text='Fullname' className='FormInput'></input>
                             <input type='password' text='Fullname' className='FormInput'></input>
                             <input type='confirm-password' text='Fullname' className='FormInput'></input>
                        </form>
                    </div>
                </div>
    
            </div>
                
            </>
        )
    }
}

export default Regis
