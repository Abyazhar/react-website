import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import  Community from './pages/Community';
import Whyus from './pages/Whyus';
//Pages
import Houseplants from './pages/Houseplants'
import Herbs from './pages/Herbs'
import Flowers from './pages/Flowers'
import Petfriendly from './pages/Pet-friendly'



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
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
