import React from 'react'
import '../AboutUs/Ourstory.scss'
import Bee from '../../images/bg/business.jpg'

const Beall = () => {
    return (
        <>
           <div className='real-container'>
               <img src={Bee} alt='Beall' classname='story-3'/>
               
                       <h4>We can be All</h4>
                       <span><p>Urban Garden is exclusively online delivering plants over tri-state area of Petaling Jaya.
                         You can invite yourself to our Brick and Mortar stores to escape from the concrete jungle, 
                         where our plants is displayed all year-round. Who knows, you may be lucky enough to join 
                         our weekly workshops?</p></span>
                   
               <div className='real-wrap'>
                   
               </div>
           </div> 
        </>
    )
}

export default Beall
