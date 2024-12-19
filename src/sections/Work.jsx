import React, { useEffect, useState } from 'react'
import MiniTitle from '../components/MiniTitle'
import Comnheading from '../components/Comnheading'
import '../styledComponents/workStyle.css';
import { worksData } from '../jsonData';
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
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
 
 
     const cardVariantOne = (index) => ({
       hidden: { opacity: 0, y: 20 },
       visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.4 , delay : index * 0.14 },
       },
     });

  
  return (
    <>
      <motion.section className="work-comp"
         ref={ref}
         initial="hidden"
         animate={controls}
      >
        <div className="common-container">
                <MiniTitle minititleText={"How It Works"} />
        <Comnheading title={"Enhanced corporate framework"} />

        <div className="worksData-grid grid grid-three-col grid-gap">
          {worksData.map((curData,id) => {
            return (
              <>
              <motion.div className="work-bx flex"
               variants={cardVariantOne(id)}
              >
                <div className="work-icon">
                  <img src={curData.icon} alt="" />
                </div>

                <div className="work-info">
                  <h5> {curData.title} </h5>
                  <p> {curData.para} </p>
                </div>
                
              </motion.div>
              </>
            )
          })}
        </div>
        
          
        </div>
      </motion.section>
    </>
  )
}

export default Work
