import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../sass/HeaderSection.scss';
import {Link} from 'react-router-dom';



function HeaderSection() {
    return (
        <div className='hero-container'>
            <video src ='videos/videos-2.mp4' autoPlay loop muted/>
            <h1>Urban Garden</h1>
            <p>Adopt your new family home!</p>

            <div className='hero-btns'>
            <Link to='/shop'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large' 
        > GET STARTED
            </Button>
            </Link>

            <Link to='/community'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
        >JOIN OUR COMMUNITY 
            </Button>
            </Link>
       
            </div>
        </div>
        
    
       
    
        
    );
}

export default HeaderSection
