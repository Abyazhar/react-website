import React,{Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch,Route, Redirect}from 'react-router-dom';
import {auth} from './firebase/Util';//Login authentication from firebase

import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import  Community from './pages/Community';
import Whyus from './pages/Whyus';
//Pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Houseplants from './pages/Houseplants/Houseplants'
import Herbs from './pages/Herb/Herbs'
import Flowers from './pages/Flowers'
import Petfriendly from './pages/Pet-friendly'

const initialState ={
  currentUser:null                //currentUser empty by default
};
class App extends Component {    //change func component => class
  constructor(props){
    super(props);
    this.state = {              //set initial state
      ...initialState          //spread operator to pass initial state
    }; 
  }
  
                              //life cycle hooks;mount && unmount to config login 
                              //auth listener e? subscribe 'a'func on auth object:: determine user is sign in
 authListener = null;
  componentDidMount(){ 
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        this.setState
          ( ...initialState
            )
        
     
      };                                   //user not sign in = return null 

      this.setState({
        currentUser: userAuth
      }                                   // bring currentuser to  the result of userAuth
      
      );

    })
  }
  
  componentWillUnmount(){  // unsubscribe user: no memory leaks in application 
    this.authListener();

  }

  render (){ //will allow to work with lifecycle hooks
    const { currentUser} = this.state; //de=structure user frm state

    return (
      <Router>
        <Switch>
          <Route path='/' exact render ={() => (<Homepage currentUser={currentUser}/> )} /> 

          <Route path='/login' exact  render ={() => currentUser ? <Redirect to ='/'/> : (
          <Login currentUser={currentUser}/> )}/>
          <Route path='/signup' exact component={SignUp} render currentUser={currentUser}/>
          <Route path='/whyus' exact component={Whyus}/>
          <Route path='/community' exact component={Community} currentUser = {currentUser}/>
          <Route path='/shop' exact component={Shop}/>
          <Route path='/houseplants' exact component={Houseplants}/>
          <Route path='/herbs' exact component={Herbs}/>
          <Route path='/flowers' exact component={Flowers}/>
          <Route path='/pet-friendly' exact component={Petfriendly}/>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
