import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';

function CardItem(props) {
    return (
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' 
                data-category={props.label}>
                    <img src={props.src} alt='best sellers'
                    className='card__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
                <div className='cards__button'>
                <Link>
                 <Button  buttonStyle='btn--cart' 
                 >{props.button}</Button>

                <Link>
                <Button className='btnx-cart' buttonStyle='btn--buy' 
                 >{props.button1}</Button>
                </Link>
                </Link> 
                </div>     
            </Link>
        </li>
        </>
    )
}

export default CardItem
