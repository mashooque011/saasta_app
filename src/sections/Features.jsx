import React, { useEffect, useState } from 'react'
import '../styledComponents/FeaturesStyle.css';
import FeatureInfo from './FeatureInfo';
import FeatureImg_one from '../assets/images/feature-img-1.avif';
import FeatureImg from './FeatureImg';
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const featureInfo = {
    title : "your business with strategic",
    spanOne : "Empower",
    spanTwo : "insights",
    featPara : "SaaS financial models are documents that outline your SaaS business’s financial performance and projections for you and your investors. Embrace the future of software solutions today!",
    featBtnText : "Discover More"
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
                            hidden: { opacity: 0, x: 26 , y : 20 },
                         visible: {
                           opacity: 1,
                           x: 0,
                           y : 0,
                           transition: { duration: 0.3 , delay : 0.8 },
                         },
                       };
  
  return (
    <>
      <motion.section className="features-comp"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeOutVariant}
      >
        <div className="common-container">
          
          <div className="features-grid grid grid-two-col grid-gap">

            <FeatureInfo featureInfo={featureInfo} />

            <FeatureImg featImg={FeatureImg_one} variant={imgVariant} />
    
          </div>


            
        </div>
      </motion.section>
    </>
  )
}

export default Features
