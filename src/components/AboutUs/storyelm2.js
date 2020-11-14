import React from 'react'
import '../AboutUs/Ourstory.scss'
import Pic from '../../images/bg/bedroom.jpg'
import Pic1 from '../../images/bg/office.jpg'
import Pic2 from '../../images/bg/business.jpg'
import {Link} from 'react-router-dom'

const Beall = () => {
    return (
        <>
        <div className='real-it'><h4>We put you first to choose your green companions indoors</h4>
        <p>Urban Garden is exclusively online delivering plants over tri-state area of Petaling Jaya.
                         You can invite yourself to our Brick and Mortar stores to escape from the concrete jungle, 
                         where our plants is displayed all year-round. Who knows, you may be lucky enough to join 
                         our weekly workshops? If you wish to call us to do the arrangements in your indoors,
                        do not hesitate to let us know at <Link to ='/contact'>Contact</Link>
        </p>
        </div>
        <div className='real-top'>
         <div className='real-container'>
                       <h4>Bedrooms </h4>
                       <img src={Pic} className='pic-1' alt='real'/>
                       <span><p>Urban Garden is exclusively online delivering plants over tri-state area of Petaling Jaya.
                         You can invite yourself to our Brick and Mortar stores to escape from the concrete jungle, 
                         where our plants is displayed all year-round. Who knows, you may be lucky enough to join 
                         our weekly workshops?</p></span>
           </div> 
           <div className='real-container'>
                       <h4>Office</h4>
                       <img src={Pic1} className='pic-1' alt='real'/>
                       <span><p>Urban Garden is exclusively online delivering plants over tri-state area of Petaling Jaya.
                         You can invite yourself to our Brick and Mortar stores to escape from the concrete jungle, 
                         where our plants is displayed all year-round. Who knows, you may be lucky enough to join 
                         our weekly workshops?</p></span>
           </div> 
           <div className='real-container'>
                       <h4>Business</h4>
                       <img src={Pic2} className='pic-1' alt='real'/>
                       <span><p>Urban Garden is exclusively online delivering plants over tri-state area of Petaling Jaya.
                         You can invite yourself to our Brick and Mortar stores to escape from the concrete jungle, 
                         where our plants is displayed all year-round. Who knows, you may be lucky enough to join 
                         our weekly workshops?</p></span>
                   

           </div> 
        </div>
         
        </>
    )
}

export default Beall
