import React,{Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';
import './firebase/Util';
import {auth} from './firebase/Util'

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
  currentUser:null
};

class App extends Component {  

  constructor(props)
  {
    super(props);
    this.state= {
       ...initialState
    }
  }

 
  componentDidMount()
  {
    this.authListener = auth.onAuthStateChanged(user => {
      if (user) {

        console.log("Sign In Successful");
        console.log(user.displayName + '\n' + user.email);
        this.setState = {
          currentUser:user,
          name:user.displayName,
          photo:user.photoURL
        }; //User is Signed 
      } else {
          // No user is signed in.
        this.setState= {...initialState};
        console.log("No User is Signed In");
        return;
      }
    });
  }

componentWillUnmount()
{
  this.authListener();
  console.log("User Sign Out")
}

  render (){ 
    const {currentUser} = this.state;
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} currentUser={currentUser}/>
          <Route path='/login' exact component = {Login} currentUser={currentUser}/>
          <Route path='/signup' exact component={SignUp} />
          <Route path='/whyus' exact component={Whyus}/>
          <Route path='/community' exact component={Community} />
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
