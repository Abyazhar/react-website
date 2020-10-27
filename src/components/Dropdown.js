import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {DropdownItems} from '../components/DropdownItem';
import '../sass/dropdown.scss';




function Dropdown() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick (!click); //toggle click value
     
    

    return (
        
           <ul onClick = {handleClick}
           className = {click ? 'dropdown-menu-clicked' : 'dropdown-menu'}>
               {DropdownItems.map((item, index) => {
                   return(
                       <li key={index}>
                           <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                               {item.title}
                           </Link>
                       </li>
                   );

               })}

           </ul>
        
    );
            }
         
         

export default Dropdown;


