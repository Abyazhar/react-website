import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import '../HeaderSection/HeaderSection.scss';
import {Link} from 'react-router-dom';
import Video from '../../videos/videos-2.mp4';



function HeaderSection() {
    return (
        <div className='hero-container'>
            <video playsInline autoPlay loop muted src={Video} type='video/mp4' />
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
