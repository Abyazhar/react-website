import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';

//Firebase
import './firebase/Util';
import {auth, handleUserProfile} from './firebase/Util'

//Pages
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import  Community from './pages/Community';
import ContactUs from './pages/Contact';
import Ourstory from './pages/Ourstory';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Recovery from './pages/Recovery/index';
import Houseplants from './pages/Houseplants';
import Herbs from './pages/Herbs'
import Flowers from './pages/Flowers';
import Petfriendly from './pages/Pet-friendly'
import HomepageLayout from './components/Layout/HomepageLayout';
import Mainlayout from './components/Layout/Mainlayout';

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

 authListener = null;
  componentDidMount()
  {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        console.log("Sign In Successful");
        console.log(userAuth.displayName + '\n' + userAuth.email);
        this.setState = {
          currentUser:userAuth,
          name:userAuth.displayName,
          photo:userAuth.photoURL
        }; //User is Signed 
      } else {
          // No user is signed in.
        this.setState= ({...initialState});
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
          <Route path='/' render={() => (
            <HomepageLayout>
              <Homepage/>
            </HomepageLayout>
          )}  />
          <Route path='/login'  exact component = {Login}/>
          <Route path='/signup' exact component = {SignUp}/>
          <Route path='/recovery' render={() => (
            <Mainlayout>
              <Recovery/>
            </Mainlayout>
          )}/>
          <Route path='/contact' exact component={ContactUs}/>
          <Route path='/ourstory' exact component={Ourstory}/>
          <Route path='/community' exact component={Community}/>
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
