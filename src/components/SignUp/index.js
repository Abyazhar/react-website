import React, { Component } from 'react';
import FormInput from '../Form/FormInput/index';
import {auth, handleUserProfile} from '../../firebase/Util'

import '../../components/SignUp/SignUp.scss';
import {Button} from '../Button/Button';

const initialState = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
};

class Regis extends Component {
constructor(props){
    super(props);
    this.state ={
        ...initialState
    };

    this.handleChange = this.handleChange.bind(this);
}

handleChange(e){
    const{name, value} = e.target;
    this.setState({
        [name]: value
    });
}

handleFormSubmit = async e => {
    e.preventDefault();
    
  }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <>
            <div className='Container'>
                <div className='formWrap'>
                    <div className='FormContent'>
                        <form className='Form' onSubmit={this.handleFormSubmit}>
                            <h1>Sign Up for New Account</h1>
                            <FormInput
                               type='text'
                               name='displayName'
                               value={displayName}
                               placeholder='Fullname'
                               className='FormInput'
                               onChange={this.handleChange}
                            />

                             <FormInput
                               type='email'
                               name="email"
                               value={email}
                               placeholder="Your Email"
                               className='FormInput'
                               onChange={this.handleChange}
                            />

                            <FormInput
                               type='password'
                               name="password"
                               value={password}
                               placeholder="Enter Password"
                               className='FormInput'
                               onChange={this.handleChange}
                            />
                             
                             <FormInput
                               type='password'
                               name='confirmPassword'
                               value={confirmPassword}
                               placeholder="Re-enter Your Password"
                               className='FormInput'
                               onChange={this.handleChange}
                            />
                             <Button type='submit'  
                              buttonStyle='FormGoogle' 
                              >Create </Button>
                        </form>
                    </div>
                </div>
    
            </div>
                
            </>
        )
    }
}

export default Regis
