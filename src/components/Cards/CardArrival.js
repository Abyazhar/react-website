import React from 'react';
import  '../Cards/Card.scss';
import CardItem from './CardItem';
import culantro from '../../images/herbs/mexico.jpg';
import white from '../../images/pet-friendly/white.jpg';
import pine from '../../images/pet-friendly/pineapple.jpg';

function CardNewArrival() {
    return (
    <>
     <section id="new-arrival">
        <div className='cards'>
         <h1>New Arrivals</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <CardItem 
           src={culantro}
           text='Culantro (Mexican Coriander)'
           label='New Arrivals'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src={white}
           text=' Dracaena White'
           label='New Arrivals'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src={pine}
           text='Tillandsia Ionantha-Spanish Moss'
           label='New Arrivals'
           path='/shop'
           button='Add to Cart'/>
           </ul>
           
          </div>
         </div>
        </div>    
        </section>  
        </>
    )
}

export default CardNewArrival
