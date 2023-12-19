import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app-bg app-wrapper section-padding'>
    <div className='app-wrapper-img app-wrapper-img-reverse'>
      <img src={images.chef} alt='chef image' />
    </div>
    <div className='app-wrapper-info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext-cormorant'>Our Core Concept</h1>
      <div className='app-chef-content'>
        <div className='app-chef-content-quote'>
          <img src={images.quote} alt='quote' />
          <p className='p-opensans'>Holyentgold's core concept is a divine culinary essence, blending sacred ingredients to create a holistic and transcendent dining experience</p>
        </div>
      </div>
      <div className='app-chef-sign' >
        <p>Idris Abdulqudus</p>
        <p className='p-opensans'>Chef & Software Developer</p>
      </div>
    </div>
  </div>
);

export default Chef;
