import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function ScrollButton() {
  const [up, setUp] = useState(true);

  useEffect(() => {
    let currentPageOffset: number = 0 

    const handleScroll = () => {
      if (window.pageYOffset > currentPageOffset) {
        // when the page value is increasing it means the page is going down
        // so when the page is going down the arrow should points upward direction
        setUp(true)
        currentPageOffset = window.pageYOffset
      } else {
        setUp(false)
        currentPageOffset = window.pageYOffset
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (up) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-16 right-6 text-white p-2 rounded-full z-50"
    >
      {up ?
        <FontAwesomeIcon icon={faArrowAltCircleDown} className='h-6 w-6' />
        :
        <FontAwesomeIcon icon={faArrowAltCircleUp} className='h-6 w-6' />
      }
    </button>
  );
}

export default ScrollButton