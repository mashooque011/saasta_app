import React, { useEffect, useState } from 'react'
import '../styledComponents/FAQ.css';
import Comnheading from '../components/Comnheading';
import { faqData } from '../jsonData';
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
    const [faq , setFaq] = useState(1);
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
         transition: { duration: 0.4 , delay : index * 0.32 },
       },
     });


    
  return (
    <>

    <section className="faq-comp">
        <div className="common-container">

            <Comnheading title={"Frequently Asked Questions (FAQs)"} />
            
            <motion.div className="faq-lists"
                ref={ref}
                initial="hidden"
                animate={controls}>

                {faqData.map((curElem,id) => {
                    return (
                        <>
                        <motion.div className={faq === curElem.id ? "faq-bx faqactive" : "faq-bx"} key={curElem.id}
                        onClick={() => setFaq(curElem.id)}
                        variants={cardVariantOne(id)}
                        >
                            <h6> {curElem.qus} </h6>
                            <p> {curElem.ans} </p>

                            <div className="faq-btn">
                           {faq === curElem.id ? <ion-icon name="remove-sharp"></ion-icon> : <ion-icon name="add-sharp"></ion-icon>}
                            </div>
                            
                        </motion.div>
                        </>
                    )
                })}

                
            </motion.div>
            
        </div>
    </section>
      
    </>
  )
}

export default FAQ
