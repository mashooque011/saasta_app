import React, { useEffect, useState } from 'react'
import MiniTitle from './MiniTitle'
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Comnheading = ({title}) => { 
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
        transition: { duration: 0.3 , delay : 0.54 },
      },
    };

  return (
    <>

    <motion.div className="comn-heading-flex flex item-center" style={{flexDirection : 'column'}}
      ref={ref}
      initial="hidden"
      animate={controls}

    >
      <motion.h2
         variants={textVariant}
      > {title} </motion.h2>
      </motion.div>
    </>
  )
}

export default Comnheading
