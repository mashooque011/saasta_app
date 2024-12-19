import React, { useEffect, useState } from 'react'
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MiniTitle = ({minititleText}) => {
    // Animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false, // Animation can trigger multiple times
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
  
    // State to track if animation has already been triggered
         const [hasAnimated, setHasAnimated] = useState(false);
  
         useEffect(() => {
           if (inView && !hasAnimated) {
             controls.start("visible"); // Trigger animation
             setHasAnimated(true); // Mark as animated
           }
         }, [controls, inView, hasAnimated]);

    const textVariant = {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 , delay : 0.35 },
      },
    };

  return (
    <>
        <motion.div 
        ref={ref}
         initial="hidden"
         animate={controls}
         variants={textVariant}
         className="mini-title-bx flex item-center">
            <div className="star-icon">
            <ion-icon name="star-sharp"></ion-icon>
            </div>
            <span> {minititleText} </span>
        </motion.div>
              
    </>
  )
}

export default MiniTitle
