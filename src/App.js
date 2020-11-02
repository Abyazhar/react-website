import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';

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



function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/whyus' exact component={Whyus}/>
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

export default App;
