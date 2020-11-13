import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {GiThreeLeaves} from 'react-icons/gi';
import { FaTimes} from 'react-icons/fa';
import { Button } from '../Button/Button';
import '../Navbar/navbar.scss';
import Dropdown from '../Dropdown/Dropdown';
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {CgLoadbarSound} from 'react-icons/cg';
import {Logout} from '../../firebase/Util';


const Navbar = props => {
const  {currentUser} = props;
 //pass current user

const [click, setClick] = useState(false);
const [dropdown, setDropdown] =  useState(false);
const [button, setButton] = useState(true);



const handleClick = () => setClick(!click);//funct::click::display, setClick::opp!click==toggling
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if(window.innerWidth < 960) {
        setDropdown(false)
    }else{
        setDropdown(true)
    }
}

const onMouseLeave = () => {
    if(window.innerWidth < 960) {
        setDropdown(false)
    }else{
        setDropdown(false)
    }
}

const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);    
    }else {
        setButton(true);
    }
};

useEffect(() => {
    showButton(); //ensure resizing render 1x::capture showbutton
}, []) //pass in emp array

window.addEventListener('resize', showButton) //call & show btn funct in here


return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <GiThreeLeaves className='navbar-icon'/>
            Urban Garden
          </Link>

          <div className='menu-icon' onClick={handleClick}>
          {click ?<FaTimes/> : <CgLoadbarSound/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
              <Link to='/Ourstory' className='nav-links' onClick={closeMobileMenu}>
                 Why Us?
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/community'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Community
              </Link>
              </li>
              <li className='nav-item'onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link
                 to='/shop'
                 className='nav-links'
                 onClick={closeMobileMenu}
              >
               Shops <IoIosArrowDropdownCircle className='dropdown-icon'/> 
              </Link>
             {dropdown && <Dropdown />}
              </li>
              <li>
               <Link
                   to='/login'
                   className='nav-links-mobile'
                  onClick={closeMobileMenu}>
                  Login
               </Link>
              </li>
              </ul>
            {currentUser && (
              <ul className='logout-item'>
              <li>
               <Link>
                {button && <Button onClick={Logout} buttonStyle='btn--outline'>LOGOUT</Button>}  
               </Link>
               </li>
              </ul> 
            )}
               
              {!currentUser && (
                <ul className='login-menu'>
                <li>
                    <Link to='/login'>
                    {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}  
                  </Link>
                </li>
                </ul> 
              )} 
                      
        </div> 
      </nav>
    </>
  );
}
Navbar.defaultProps={currentUser: null};

export default Navbar;