import React, { useEffect, useRef } from 'react'
import '../styledComponents/GrowthOrientedCSS.css';
import grid_icon from '../assets/images/grid.png'
import Button from '../components/Button';
import { slideData } from '../jsonData';
import { motion } from 'framer-motion';
import icon_two from '../assets/images/slide-logo-2.avif';

const GrowthOriented = ({speed =  1.5}) => {
    // const innerHeight = window.innerHeight; 

    const containerRef = useRef(null);
    const containerRefTwo = useRef(null);

  
    useEffect(() => {
      const container = containerRef.current;
      const totalHeight = container.scrollHeight;
  
      let start = 0;
  
      const smoothScroll = () => {
        start += speed; // Speed of the scroll
        if (start >= totalHeight / 2) {
          start = -1; // Reset to the start
        }
        container.scrollTop = start; // Scroll position
        requestAnimationFrame(smoothScroll);
      };
  
      requestAnimationFrame(smoothScroll);
  
      return () => cancelAnimationFrame(smoothScroll); // Cleanup
    }, [speed]);

    // ------------downward slide --
    useEffect(() => {
        const container = containerRefTwo.current;
        const totalHeight = container.scrollHeight;
    
        let start = totalHeight / 2; // Start at the middle for seamless transition
    
        const smoothScroll = () => {
          start -= speed; // Decrease scroll position to scroll downward
          if (start <= 0) {
            start = totalHeight / 2; // Reset to the middle
          }
          container.scrollTop = start; // Update scroll position
          requestAnimationFrame(smoothScroll);
        };
    
        requestAnimationFrame(smoothScroll);
    
        return () => cancelAnimationFrame(smoothScroll); // Cleanup
      }, [speed]);
  
  

  return (
    <>
      <section className="growth-oriented-comp">
        <div className="common-container">

            <div className="growth-oriented-grid grid grid-gap">

                <div className="left-growth-oriented-info-bx">

                    <div className="grid-icon">
                        <img src={grid_icon} alt="" />
                    </div>

                    <h2>Growth-oriented integration</h2>
                    <p>
                    Empower your business with flexible and growth-oriented integration solutions & technologies
                    </p>

                    <Button title={"Discover More"} bgColor={"#a0e00d"} borderColor={"#a0e00d"} />
                    
                </div>

                    <div className="right-growth-oriented-bx grid grid-two-col">

                        <div className="slider-vert">      
                        <div className="slider-card-track"  ref={containerRef}>
                            {Array(2).fill(slideData).flat().map((curData,id) => {
                                return (
                                    <>
                                       <motion.div className="slider-card" 
                                    //    key={id}
                                    //    transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                                    //    initial={{ y: 0 }}
                                    //    animate={{ y: -innerHeight }}
                                       >
                                <div className="icon">
                                    <img src={curData.icon} alt="" />
                                </div>
                                <div className="card-det">
                                    <h4> {curData.name} </h4>
                                    <p> {curData.text} </p>
                                </div>
                            </motion.div>
                                    </>
                                )
                            })}                           
                        </div>
                        </div>

                        <div className="slider-vert slider-vert2">
                        <div className="slider-card-track"  ref={containerRefTwo}>
                            {Array(2).fill(slideData).flat().map((curData,id) => {
                                return (
                                    <>
                                       <motion.div className="slider-card" 
                                    //    key={id}
                                    //    transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                                    //    initial={{ y: 0 }}
                                    //    animate={{ y: -innerHeight }}
                                       >
                                <div className="icon">
                                    <img src={curData.icon} alt="" />
                                </div>
                                <div className="card-det">
                                    <h4> {curData.name} </h4>
                                    <p> {curData.text} </p>
                                </div>
                            </motion.div>
                                    </>
                                )
                            })}                           
                        </div>
                        </div>
                        
                    </div>
             
                
            </div>
            
        </div>
      </section>
    </>
  )
}

export default GrowthOriented
