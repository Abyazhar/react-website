import React from 'react';
import '../Pet-friendly/Petfriendelements.scss';
import Video from '../../videos/videos-1.mp4';
import '../../components/Cards/Card.scss';
import CardItem from '../Cards/CardItem';
import Fern from '../../images/pet-friendly/fern.jpg';
import Pine from '../../images/pet-friendly/pineapple.jpg';
import White from '../../images/pet-friendly/white.jpg';
import {CgArrowDownO} from 'react-icons/cg';

const Petelements = () => {
    return (
        <>
           <div className='hero-container'>
           <video playsInline autoPlay loop muted src={Video} type='video/mp4' /> 
           <h1>Pet-friendly</h1>
           <p>Kind Greens for Your Canine & Feline Friends</p>
           <ul className='actions'>
                <li><a href='#next' className='button icon solo'><CgArrowDownO/></a></li>
           </ul>
        </div>
        <section id="next">
        <div className='cards'>
         <h1>Pet-friendly</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <CardItem 
           src={Fern}
           text='Boston Fern'
           label='Pet-friendly'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Pine}
           text='Spanish Moss'
           label='Pet-friendly'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={White}
           text='Dracaena White Green'
           label='Pet-friendly'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>
           </ul>
           
          </div>
         </div>
        </div>
        </section>
        </>
            
       
    )
}

export default Petelements
