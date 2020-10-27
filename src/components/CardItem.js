import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';

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
                <Link>
                 <Button className='btnx-cart' buttonStyle='btn--cart' 
                 buttonSize='btn--medium'>{props.button}</Button>
                </Link>
            </Link>
        </li>
        </>
    )
}

export default CardItem