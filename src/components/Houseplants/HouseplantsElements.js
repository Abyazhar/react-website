import React from 'react';
import Video from '../../videos/videos-7.mp4'
import '../../components/Cards/Card.scss'
import CardItem from '../Cards/CardItem';
import Apri from '../../images/houseplants/apricot.jpg';
import Ivy from '../../images/houseplants/english-ivy.jpg';
import Oxalis from '../../images/houseplants/oxalis triangular.jpg';
import {CgArrowDownO} from 'react-icons/cg';


function HouseplantsElements() {
    return (
        <>
        <div className='hero-container'>
           <video playsInline autoPlay loop muted src={Video} type='video/mp4' /> 
           <h1>Houseplants</h1>
           <p>Living in urban with greens</p>
           <ul className='actions'>
                <li><a href='#next' className='button icon solo'><CgArrowDownO/></a></li>
            </ul>
        </div>
        <section id="next">
        <div className='cards'>
         <h1>Houseplants</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <CardItem 
           src={Apri}
           text='Apricot'
           label='Houseplants'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Ivy}
           text='English Ivy'
           label='Houseplants'
           path='/shop'
           button='Add to Cart'
           button1='Buy Now'/>

           <CardItem 
           src={Oxalis}
           text='Oxalis Triangular '
           label='Houseplants'
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

export default HouseplantsElements
