import React from 'react'
import { motion } from "framer-motion";
import { compLogo } from '../jsonData';

const LogosSlider = () => {
  return (
    <>

    <section className="company-logo-slider-comp">
        <div className="common-container">

            <div className="logo-slider">
            <motion.div
       className="slider-track"
       animate={{ x: ["0%", "-100%"] }}
       transition={{
         duration: 20, // Adjust for speed
         ease: "linear",
         repeat: Infinity,
       }}
      >
          {[...compLogo, ...compLogo , ...compLogo].map((logo, index) => (
          <div className="slider-item" key={index}>
            <img src={logo} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
        
        </motion.div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default LogosSlider
