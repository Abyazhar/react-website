import React from 'react';
import CardItem from './CardItem';
import '../sass/Card.scss';



function Card() {
    return (
        <>
        <section id="best-seller">
        <div className='cards'>
         <h1>Best Sellers of Our Times!</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <CardItem 
           src='images/houseplants/oxalis triangular.jpg'
           text='Oxalis triangular'
           label='Best Sellers'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src='images/houseplants/calathea makoyama.jpg'
           text='Calathea Makoyama'
           label='Best Sellers'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src='images/houseplants/english-ivy.jpg'
           text='English Ivy'
           label='Best Sellers'
           path='/shop'
           button='Add to Cart'/>
           </ul>
           
          </div>
         </div>
        </div>
            
        </section>
        </>
    );
}

export default Card
