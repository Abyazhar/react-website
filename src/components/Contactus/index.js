import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../components/Contactus/contactElements.scss';

const SplitContact = () => {
    return (
        <>
         <div className='hero-container'>
              <h1>Contact Us</h1>
              <p>Feel free to contact us upon any enquiries!</p>
          </div> 
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
                                    <li>
                                        <Link to='' className='icons'><FaFacebook/></Link>
                                    </li>
                                    <li>
                                        <Link to='' className='icons'><FaTwitter/></Link>
                                    </li>
                                    <li>
                                        <Link to=''className='icons'><FaWhatsapp/></Link>
                                    </li>
                                    <li><Link to='' className='icons'><FaInstagram/></Link></li>
                                </ul>
                            </section>
            </div>
			<section id="contact-form">
            <div className='container'>
                <div className='Formwrap'>
                    <div className='FormContent'>
							<form method="post" className='form'>
								<div class="Formwrap">
									<div class="field">
										<label for="name" className='Formlabel'>Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
                     </div>
                 </div>
            </div>
		</section>
        </section>
        

        </>
    )
}

export default SplitContact
