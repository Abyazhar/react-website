import React, {Component} from 'react';
import '../../components/SigninGoogle/SiginGoogle.scss';
import {Text} from '../../components/Form/Text';
import { Button } from '../Button/Button';
import {SignInWithGoogle} from '../../firebase/Util';
import {Link} from 'react-router-dom';



class SigninGoogle extends Component{

    handleSubmit = async e => {
        e.preventDefault();// handleSubmit event for onSubmit 
    }


    render(){
        return (
            <>
                <div className='Container'>
                    <div className ='formWrap'>
                    <div className='Formcontent'>
                        <form className='Form' onSubmit={this.handleSubmit}>
                            <h1>Login to your account</h1>
                            <label htmlFor='for'className='FormLabel'>Email</label>
                            <input type='email' className='FormInput' required></input>
                            <label htmlFor='for' className='FormLabel'>Password</label>
                            <input type='password' className='FormInput' required></input>
                            <Button type='submit'buttonStyle='FormButton' >Continue</Button>
                            <Text className='Text'>Forget password</Text>
                            <Link className='link' to='/signup'>Sign Up</Link>
                            <div className='socialSignIn'>
                                <div className='row'> 
                                    <Button buttonStyle='FormGoogle' onClick={SignInWithGoogle}>
                                        Sign in with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                         
                    </div>
                    </div>   
                </div>
                
            </>
        );
    }
    
}

export default SigninGoogle;

