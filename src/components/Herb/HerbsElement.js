import React from 'react';
import Video from '../../videos/videos-5.mp4';
import '../../components/HeaderSection/HeaderSection.scss';
import Parsley from '../../images/herbs/english-parsely.jpg';
import Mexico from '../../images/herbs/mexico.jpg';
import Oregano from '../../images/herbs/oregano.jpg';
import '../../components/Cards/Card.scss';
import CardItem from '../Cards/CardItem';
import {CgArrowDownO} from 'react-icons/cg';



function HerbsElement() {
    return (
        <>
        
        <div className='hero-container'>
           <video playsInline autoPlay loop muted src={Video} type='video/mp4' /> 
           <h1>Herbs</h1>
           <p>Fill your Kitchen & Garden with herbs!</p>
           <ul className='actions'>
                <li><a href='#next' className='button icon solo'><CgArrowDownO/></a></li>
            </ul>
        </div>

        <section id="next">
        <div className='cards'>
         <h1>Herbs</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <CardItem 
           src={Parsley}
           text='English Parsley'
           label='Herbs'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Mexico}
           text='Mexican Coriander'
           label='Herbs'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Oregano}
           text='Oregano'
           label='Herbs'
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

export default HerbsElement
