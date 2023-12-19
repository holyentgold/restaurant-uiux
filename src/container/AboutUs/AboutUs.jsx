import React from 'react';
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app-aboutus app-bg flex-center section-padding' id='about'>
    <div className='app-aboutus-overlay flex-center'>
      <img src={images.H} alt='h' />
    </div>
    <div className='app-aboutus-content flex-center'>
      <div className='app-aboutus-content-about'>
        <h1 className='headtext-cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon' className='spoon-img' />
          <p>At Holyentgold, we weave culinary magic, crafting extraordinary dining moments. Our passion for flavor excellence defines us, inviting you into culinary bliss</p>
          <button type='button' className='custom-button'>Discover More</button>
      </div>
      <div className='app-aboutus-content-knife flex-center'>
        <img src={images.knife} alt='knife' />
      </div>
      <div className='app-aboutus-content-history'>
        <h1 className='headtext-cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='spoon-img' />
          <p>Since 2010, HolyEntGold has been a beacon of culinary innovation. From humble beginnings, our restaurant has evolved, delighting patrons with extraordinary flavors and an unwavering commitment to excellence</p>
          <button type='button' className='custom-button'>Read More</button>
      </div>
    </div>    
  </div>
);

export default AboutUs;
