import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app-newsletter app-bg'>
    <div className='app-newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext-cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p-opensans'>Stay updated, never miss out!</p>
    </div>
    <div className='app-newsletter-input  flex-center'>
      <input type='email' placeholder='Enter Your Email Address' />
      <button className='custom-button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
