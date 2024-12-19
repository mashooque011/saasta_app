import React, { useEffect, useRef, useState } from 'react'
import '../styledComponents/heroStyle.css';
import MiniTitle from '../components/MiniTitle';
import Button from '../components/Button';
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero_img from '../assets/images/main_img.avif'
import LogosSlider from '../components/LogosSlider';

const Hero = ({mainTitle , desc , breakTitle}) => {
  const formRef =  useRef(null);
  const emailRef =  useRef(null);

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
      hidden: { opacity: 0, y: 27 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 , delay : 0.45 },
      },
    };

    const descVariant = {
      hidden: { opacity: 0, y: 27 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 , delay : 0.55 },
      },
    };

    
    const emailVariant = {
      hidden: { opacity: 0, y: 27 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 , delay : 0.65 },
      },
    };

    const otherVarient = {
      hidden: { opacity: 0, y: 27 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 , delay : 0.75 },
      },
    };

    const imgVarient = {
      hidden: { opacity: 0, y: 27 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 , delay : 0.8 },
      },
    };

    const fadeOutVariant = {
      hidden: { opacity: 0.2 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5 },
      },
    };
  
  


  const handleEmail = (event) => {
    event.preventDefault();

    const elementValue = emailRef.current.value;
    const formElem =  formRef.current ;


    if (!elementValue) {
      formElem.classList.remove("vibrateMode");

      // Trigger reflow to restart the animation
      void formElem.offsetWidth;
      formElem.classList.add("vibrateMode");

    }

  
    
  }



  // vibrateMode
  
  
  return (
    <>

    <motion.section className="hero-comp"
           ref={ref}
           initial="hidden"
           animate={controls}
           variants={fadeOutVariant}
    >
      <div className="common-container2">

          <div className="hero-info-bx flex item-center">
          <MiniTitle minititleText={"Saas Template"} />
          <motion.h1 
             variants={textVariant}
           className='text-center'> <span>Enhance</span> {mainTitle} <br/> {breakTitle} <span>SAAS Business</span> </motion.h1>
          <motion.p 
            variants={descVariant}
           className='text-center'> {desc}
            </motion.p>

          <motion.div
            variants={emailVariant}
          >

          <form
          action='#'
          ref={formRef}
           className="email_notify-bx">
            <input ref={emailRef}  type="email" name='email' id='email'  placeholder='example@gmail.com' autoComplete='off' />

            <button onClick={(e) => handleEmail(e)} className="buton" style={{color : "#070806" , backgroundColor: "#a0e00d" , borderColor : "#a0e00d" , }}>
        Get notified
      </button>

    
            
          </form>
          </motion.div>



          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={otherVarient}
           className="credit-card-trial-flex flex item-between">

            <div className="tick-bx flex item-center">
              <div className="check">
              <ion-icon name="checkmark-sharp"></ion-icon>
              </div>
              <span>No credit card required</span>
            </div>

            <div 

            className="tick-bx flex item-center">
              <div className="check">
              <ion-icon name="checkmark-sharp"></ion-icon>
              </div>
              <span>7 days free trial</span>
            </div>
            
          </motion.div>

          
          </div>

     

          
          <motion.div
            variants={imgVarient}
           className="hero_img">
            <img src={Hero_img} alt="" />
          </motion.div>
      </div>
    </motion.section>
    
    <LogosSlider />
    
    </>
  )
}

export default Hero
