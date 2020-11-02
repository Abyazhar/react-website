import React, {Component} from 'react';
import '../../components/SigninGoogle/SiginGoogle.scss';
import {Link} from 'react-router-dom';
import {GiThreeLeaves} from 'react-icons/gi'
import { Button } from '../Button/Button';
import {SignInWithGoogle} from '../../firebase/Util';


class SigninGoogle extends Component {

    handleSubmit = async e => {
        e.preventDefault();//grab event prevent default
    }
    render(){
        return (
            <>
                <div className='Container'>
                        <Link to="/" className='Icon'>
                        <GiThreeLeaves/>Urban Garden
                        </Link>
                    <div className ='formWrap'>
                    <div className='Formcontent'>
                        <form className='Form' onSubmit={this.handleSubmit}>
                            <h1>Login to your account</h1>
                            <label htmlFor='for'className='FormLabel'>Email</label>
                            <input type='email' className='FormInput' required></input>
                            <label htmlFor='for' className='FormLabel'>Password</label>
                            <input type='password' className='FormInput' required></input>
                            <Button type='submit'buttonStyle='FormButton' >Continue</Button>
                            <text className='Text'>Forget password</text>
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

