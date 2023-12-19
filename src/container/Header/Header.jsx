import React from 'react';
import { images } from '../../constants'

import './Header.css';
import  SubHeading  from '../../components/SubHeading/SubHeading';

const   Header = () => (
  <div className='app-header app-wrapper section-padding' id='home'>
    <div className='app-wrapper-info'>
      <SubHeading title='Pursue novel taste experiences' />
      <h1 className='app-header-h1'>Unlocking the Essence of Exquisite Dining</h1>
      <p className='p-opensans' style={{margin:'2rem 0'}}>Delve into a culinary journey where flavors harmonize, textures dance, and each bite unveils the artistry behind exquisite dining experiences</p>
      <button type='button' className='custom-button'>Dine Discoveries</button>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.welcome} alt='header img' />

    </div>
  </div>
);

export default Header;
