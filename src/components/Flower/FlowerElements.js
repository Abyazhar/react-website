import React from 'react';
import Video from '../../videos/videos-3.mp4';
import '../Flower/FlowerElements.scss';
import '../../components/Cards/Card.scss'
import CardItem from '../Cards/CardItem';
import Swan from '../../images/flower/swan river daisy.jpg';
import Lady from '../../images/flower/pinklady.jpg';
import Baby from '../../images/flower/babybreathxs.jpg';
import {CgArrowDownO} from 'react-icons/cg';


function FlowerElements() {
    return (
        <>
       
         <div className='hero-container'>
            <video playsInline autoPlay loop muted src={Video} type='video/mp4' />
            <h1>Flowers</h1>
            <p>Get your very own flower pot!</p>
            <ul className='actions'>
                <li><a href='#next' className='button icon solo'><CgArrowDownO/></a></li>
            </ul>
        </div>   
        
        <section id="next">
        <div className='cards'>
         <h1>Flowers</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <CardItem 
           src={Swan}
           text='Coreopsis'
           label='Flowers'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Lady}
           text='Pink Lady'
           label='Flowers'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Baby}
           text='Low Baby Breath '
           label='Flowers'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>
           </ul>
           
          </div>
         </div>
        </div>
        </section>
        
        
        </>
    );
}

export default FlowerElements
