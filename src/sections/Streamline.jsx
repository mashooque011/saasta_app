import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import '../styledComponents/Streamline.css';
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Streamline = () => {
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
 
 
     const cardVariant =  {
       hidden: { opacity: 0, y: 20 },
       visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.4 , delay :  0.14 },
       },
     };
  return (
    <>

    <motion.section className="streamline-comp"
     ref={ref}
     initial="hidden"
     animate={controls}
    >
        <div className="common-container">

            <motion.div className="streamline-bx flex item-center left-growth-oriented-info-bx"
            variants={cardVariant}
            >
                <h2>Ready to Streamline Your Project Management?</h2>
                <p>Join thousands of teams worldwide who trust Saasta to simplify their project </p>
                <p>workflows and drive success.</p>

                <Button defColor={"#070806"} borderColor={"#a0e00d"} bgColor={"#a0e00d"} title={"Get Started Today"} />
                
            </motion.div>
            
        </div>
    </motion.section>
      
    </>
  )
}

export default Streamline
