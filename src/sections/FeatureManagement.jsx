import React, { useEffect, useState } from 'react'
import '../styledComponents/FeaturesStyle.css';
import FeatureInfo from './FeatureInfo';
import FeatureImg_two from '../assets/images/feature-img-2.avif';
import FeatureImg from './FeatureImg';
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { listsOne } from '../jsonData';

const FeatureManagement = () => {
    const featureInfo = {
        title : "Task and project",
        spanTwo : "management",
        featPara : "We pride ourselves on our strong set of values that guide our actions and decision-making processes.",

      }         

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

    const fadeOutVariant = {
        hidden: { opacity: 0.2 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5 },
        },
      };

      
             const imgVariant = {
                  hidden: { opacity: 0, x: -26 , y : 20 },
               visible: {
                 opacity: 1,
                 x: 0,
                 y : 0,
                 transition: { duration: 0.3 , delay : 0.8 },
               },
             };
    
    
  return (
    <>
       <motion.section className="features-comp features-comp3"
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={fadeOutVariant}
       >
        <div className="common-container">
          
          <div className="features-grid features-grid2 grid grid-two-col grid-gap">
            <FeatureImg featImg={FeatureImg_two} variant={imgVariant} />
            <FeatureInfo listsData={listsOne} featureInfo={featureInfo} />
    
          </div>


            
        </div>
      </motion.section>
    </>
  )
}

export default FeatureManagement
