import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../components/Contactus/contactElements.scss';
import { Button } from '../Button/Button';

const SplitContact = () => {
    return (
        <>
         <div className='hero-container'>
              <h1>Contact Us</h1>
              <p>Feel free to contact us upon any enquiries!</p>
          </div> 
		<div className=''>
        <section className='split__contact'>
            <div className='wrap'> 
                            <section className="content">
								<h3>Address</h3>
								<p>1234 UG House #47820<br /> 
								Boulevard, Mutiara Damansara</p>
							</section>
							<section className='content'>
								<h3>Phone</h3>
								<p><a href="/">(060) 182-2445</a></p>
							</section>
							<section className="content">
								<h3>Email</h3>
								<p><a href="/">urbangarden@co.tld</a></p>
							</section>
							<section className="content"> 
								<h3>Social</h3>
                                <ul>
                                    <li className='list'>
                                        <Link to='' className='icons'><FaFacebook/></Link>
                                    </li>
                                    <li className='list'>
                                        <Link to='' className='icons'><FaTwitter/></Link>
                                    </li>
                                    <li className='list'>
                                        <Link to=''className='icons'><FaWhatsapp/></Link>
                                    </li>
                                    <li className='list'><Link to='' className='icons'><FaInstagram/></Link></li>
                                </ul>
                            </section>
            </div>
			</section>
			<section id="contact-form">
            <div className='container'>
                <div className='Formwrap'>
                    
							<form method="post" className='form'>
								<div class="Formwrap">
									<div class="field">
										<label for="name" className='Formlabel'>Name</label>
										<input type="text" className='Forminput' name="name" id="name" />
									</div>
									<div class="field">
										<label for="email" className='Formlabel'>Email</label>
										<input type="text" className='Forminput' name="email" id="email" />
									</div>
									<div class="field">
										<label for="message" className='Formlabel'>Message</label>
										<textarea className='Formtext' name="message" id="message" rows="3"></textarea>
									</div>
									<Button buttonStyle='FormContact' input type="submit" value="Send Message">Send</Button>
								</div>
								
									
								
							</form>
                     </div>
                 
            </div>
		</section>
        </div>
        

        </>
    )
}

export default SplitContact
