import React from 'react';
import { BsPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';


import './Intro.css';


const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if (playVideo) {
      vidRef.current.pause();
    }else {
      vidRef.current.play();
    }
  }
  return (
  <div className='app-video'>
    <video 
      src={meal}
      ref={vidRef}
      type='video/mp4'
      loop controls={false}
      muted
    />
    <div className='app-video-overlay flex-center'>
      <div className='app-video-overlay-circle flex-center' onClick={handleVideo}>
      {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : <BsPlayFill color='#fff' fontSize={30} />}  
      </div>
    </div>
  </div>
)
};

export default Intro;
