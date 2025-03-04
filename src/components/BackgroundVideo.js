import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BackgroundVideo = () => {
  const user = useSelector((state) => state.user.user);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [startVideo, setStartVideo] = useState(true);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    if (videoLoaded) {
      setTimeout(() => {
        setImageVisible(false);
      }, 500);
    }
  }, [videoLoaded]);

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      }}
    >
      {/* صورة كخلفية مؤقتة */}
      {imageVisible && (
        <img 
          src="https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D" 
          alt="Loading..." 
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1',
            transition: 'opacity 0.5s ease-in-out',
            opacity: videoLoaded ? 0 : 1,
          }}
        />
      )}

      {/* فيديو الخلفية */}
      {startVideo && (
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%', 
            maxWidth: '100%', 
            paddingBottom: '56.25%',
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/embed/uMAbWsMnKYk?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&start=10"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '-1',
              transition: 'opacity 1s ease',
              opacity: videoLoaded ? 1 : 0,
            }}
            onReady={() => setVideoLoaded(true)}
          />
        </div>
      )}

      {/* المحتوى فوق الفيديو */}
      <div 
        style={{
          position: 'absolute',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          textAlign: 'center',
        }}
      >
        <h1 className='bokor-regularr'>Explore<br/><h2 className='bokor-regularrr'>thousands of mouthwatering <br/>recipes!</h2></h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
