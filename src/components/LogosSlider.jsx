import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { compLogo } from '../jsonData';

const LogosSlider = ({speed = 1.5}) => {

  const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
  
      let start = 0;
  
      const smoothScroll = () => {
        if (!container) return;
  
        start += speed; // Increment the scroll position
        if (start >= container.scrollWidth / 2) {
          // Reset scroll position for seamless looping
          start = 0;
        }
        container.scrollLeft = start;
  
        requestAnimationFrame(smoothScroll);
      };
  
      requestAnimationFrame(smoothScroll);
  
      return () => cancelAnimationFrame(smoothScroll); // Cleanup on unmount
    }, [speed]);
    
  
  
  
  
  return (
    <>

    <section className="company-logo-slider-comp">
        <div className="common-container">

            <div className="logo-slider">
            <div
       className="slider-track"
       ref={containerRef}
    
      >
          {[...compLogo, ...compLogo ].map((logo, index) => (
          <div className="slider-item" key={index}>
            <img src={logo} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
        
        </div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default LogosSlider
