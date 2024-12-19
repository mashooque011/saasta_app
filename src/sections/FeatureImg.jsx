import React from 'react'
import { motion } from "framer-motion";


const FeatureImg = ({featImg, variant}) => {
      
   
   
  return (
    <>
      <motion.div className="feature-img"
      variants={variant}>
        <img src={featImg} alt="" />
      </motion.div>
    </>
  )
}

export default FeatureImg
