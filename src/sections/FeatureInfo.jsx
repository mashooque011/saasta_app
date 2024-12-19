import React from 'react'
import MiniTitle from '../components/MiniTitle'
import { motion } from "framer-motion";
// import { listsOne } from '../jsonData';

const FeatureInfo = ({featureInfo, listsData}) => {
  


    const textVariant = {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 , delay : 0.55 },
      },
    };

    const ParaVariant = {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 , delay : 0.7 },
      },
    };

    const butonVariant = {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 , delay : 0.8 },
      },
    };
    const listsVariant ={
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 , delay : 0.8 },
      },
    };
    const liVariant = (index) => ({
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 , delay : index * 0.15 },
      },
    });
  
  return (
    <>
      <div className="features-info-det flex"

      >
          <MiniTitle minititleText={"Features"} />
          <motion.h2
       variants={textVariant}

          > <span> {featureInfo.spanOne} </span> {featureInfo.title} {featureInfo.spanTwo ? <span> {featureInfo.spanTwo} </span> : null}  {featureInfo.titleTwo ? <span style={{color : "#fff"}}> {featureInfo.titleTwo} </span> : null} </motion.h2>

          <motion.p 
          variants={ParaVariant}
          > {featureInfo.featPara} </motion.p>
      

          {featureInfo.featBtnText ? <motion.button style={{background : "#a0e00d", borderColor : "#a0e00d"}} className='buton disc-btn'
          variants={butonVariant}
          > {featureInfo.featBtnText} </motion.button> : null }
              

            <motion.div className="features-lists"
            variants={listsVariant}
            >
            {listsData?.map((curElem,id) => {
              return (
                <>
                <motion.li className='flex item-start' key={curElem.id}
  variants={liVariant(id)}
                >
                  <div className="check-bx">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  </div>
                  {curElem.text}
                </motion.li>
                </>
              )
            })}  
            </motion.div>
            </div>
            
    </>
  )
}

export default FeatureInfo
