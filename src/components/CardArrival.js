import React from 'react';
import  '../sass/Card.scss';
import CardItem from './CardItem';

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
           src='images/houseplants/oxalis triangular.jpg'
           text='Oxalis triangular'
           label='New Arrivals'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src='images/houseplants/calathea makoyama.jpg'
           text='Calathea Makoyama'
           label='New Arrivals'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src='images/houseplants/english-ivy.jpg'
           text='English Ivy'
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
