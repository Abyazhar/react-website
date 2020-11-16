import React, {Component} from 'react';
import '../../components/SigninGoogle/SiginGoogle.scss';

import FormInput from '../Form/FormInput/index';
import {Text} from '../../components/Form/Text';
import { Button } from '../Button/Button';
import {Link} from 'react-router-dom';

import {SignInWithGoogle,auth} from '../../firebase/Util';


const initialState = {
    email:'',
    password:''
};
class SigninGoogle extends Component{
    constructor(props){
        super(props);
        this.state ={
            ...initialState
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const{name,value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();// handleSubmit event for onSubmit 
        const {email, password} = this.state;

        try{
             await auth.signInWithEmailAndPassword(email,password);
             this.setState({
                 ...initialState
             });
        }
        catch (err){

        }
    }


    render(){
        const { email, password } = this.state;
        return (
            <>
                <div className='Container'>
                    <div className ='formWrap'>
                    <div className='Formcontent'>
                        <form className='Form' onSubmit={this.handleSubmit}>
                            <h1>Login to your account</h1>
                            <label htmlFor='for'className='FormLabel'>Email</label>
                            <FormInput
                              type='email'
                              name="email"
                              value={email}
                              placeholder="Your Email"
                              className='FormInput'
                              onChange={this.handleChange}
                            />
                            <label htmlFor='for' className='FormLabel'>Password</label>
                            <FormInput
                              type='password'
                              name="password"
                              value={password}
                              placeholder="Enter Password"
                              className='FormInput'
                              onChange={this.handleChange}
                            />
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

