import React from 'react';
import CardItem from '../Cards/CardItem';
import '../Cards/Card.scss';
import oxalis from '../../images/houseplants/oxalis triangular.jpg';
import calathea from '../../images/houseplants/calathea makoyama.jpg';
import ivy from '../../images/houseplants/english-ivy.jpg';


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
           src={oxalis}
           text='Oxalis triangular'
           label='Best Sellers'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src={calathea}
           text='Calathea Makoyama'
           label='Best Sellers'
           path='/shop'
           button='Add to Cart'/>

           <CardItem 
           src={ivy}
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
