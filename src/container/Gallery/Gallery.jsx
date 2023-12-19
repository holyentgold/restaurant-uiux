import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

const Gimages =[images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
 const scrollRef = useRef(null);

 const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
 }

  return (
   <div className='app-gallery flex-center'>
     <div className='app-gallery-content'>
      <SubHeading title='Gallery' />
      <h1 className='headtext-cormorant'>Culinary Presentation</h1>
      <p className='p-opensans' style={{ marginTop: '2rem'}}>Elevate gastronomic allure through a captivating culinary presentation in our exquisite image showcase</p>
      <button type='button' className='custom-button'>Explore</button>
     </div>
      <div className='app-gallery-images'>
        <div className='app-gallery-images-container' ref={scrollRef}>
          {Gimages.map((image, index)=>(
            <div className='app-gallery-images-card flex-center' key={`gallery-image-${index + 1}`}>
              <img src={image} alt='gallery'/>
            </div>
          ))}
        </div>
        <div className='app-gallery-images-arrow'>
          <BsArrowLeftShort className='gallery-arrow-icon' onClick={()=> scroll('left')} />
          <BsArrowRightShort className='gallery-arrow-icon' onClick={()=> scroll('right')} />
        </div>
      </div>
   </div>
  );

}
export default Gallery;
