import React from 'react';
import '../Cards/CardJoin.scss';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';

function CardJoinUs() {
    return (
        <>
        <section id="joinus">
            <div className='title'>
                <h1>Greening your Urban Home Starts Here!</h1>
                <div className='end__container'>
                    <p>Sign Up to start your free 30 days trial.</p>
                    <div className='end-btn'>

                    <Link to='/signup'>
                    <Button
                    className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
               >GET STARTED 
                    </Button>
                    </Link>

            

                    </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default CardJoinUs
