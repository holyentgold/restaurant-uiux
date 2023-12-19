import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app-footer section-padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app-footer-links'>
      <div className='app-footer-links-contact'>
        <h1 className='app-footer-headtext'>Contact Us</h1>
        <p className='p-opensans'>No 4 Ilorin, Kwara State, Nigeria.</p>
        <p className='p-opensans'>+2347067828232</p>
        <p className='p-opensans'>Email: holyentgoldconcept@gmail.com | idrisabdulqudus2020@gmail.com</p>
      </div>
      <div className='app-footer-links-logo'>
        <p className='p-opensans'>Holygntgold Restaurant: Where every dish tells a story, and every meal is an experience.</p>
        <img src={images.spoon} alt='spoon' className='spoon-img' style={{marginTop: 15}} />
        <div className='app-footer-links-icons'>
        <a href="https://twitter.com/holyentgold" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/in/holyentgold" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/holyentgold1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        </div>
      </div>
       <div className='app-footer-links-work'>
       <h1 className='app-footer-headtext'>Working Hours</h1>
        <p className='p-opensans'>Mon - Fri</p>
        <p className='p-opensans'>10:00 Am 6:00 Pm</p>
        <p className='p-opensans'>Sat - Sun</p>
        <p className='p-opensans'>10:00 Am 8:00 Pm</p>
       </div>
    </div>
    <div className='footer-copyright'>
      <p className='p-opensans'>© Holyentgold Concept 2023</p>
    </div>
  </div>
);

export default Footer;
