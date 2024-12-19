import React, { useEffect, useRef } from "react";
import MiniTitle from "../components/MiniTitle";
import Comnheading from "../components/Comnheading";
import "../styledComponents/TestimStyle.css";
import { reviewsData } from "../jsonData";

const Testimonials = ({speed = 1.5}) => {

    const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let start = 0;

    const smoothScroll = () => {
      if (!container) return;

      start += speed; // Increment the scroll position
      if (start >= container.scrollWidth / 2) {
        // Reset scroll position for seamless looping
        start = 0;
      }
      container.scrollLeft = start;

      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(smoothScroll); // Cleanup on unmount
  }, [speed]);
  
  const containerRef2 = useRef(null);

  useEffect(() => {
    const container = containerRef2.current;

    let start = container.scrollWidth / 2; // Start from the middle of the duplicated images

    const smoothScroll = () => {
      if (!container) return;

      start -= speed; // Decrement scroll position to move right-to-left
      if (start <= 0) {
        // Reset scroll position for seamless looping
        start = container.scrollWidth / 2;
      }
      container.scrollLeft = start;

      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(smoothScroll); // Cleanup on unmount
  }, [speed]);


  
  return (
    <>
      <section className="testim-comp">
        <div className="common-container">
          <MiniTitle minititleText={"Testimonials"} />
          <Comnheading title={"Testimonials About Us"} />

            <div className="testim-slider-track">
          <div  ref={containerRef} className="testim-main-slider flex">
            {[...reviewsData, ...reviewsData].map(
              (curElem, indx) => {
                return (
                  <>
                    <div className="testim-bx">
                        <p>
                            {curElem.text}
                        </p>

                        <div className="user-bx flex ">
                            <div className="user-img">
                                <img src={curElem.img} alt="" />
                            </div>
                            <div className="user-info">
                                <h6> {curElem.name} </h6>
                                <span> {curElem.info} </span>
                            </div>
                        </div>
                        
                    </div>
                  </>
                );
              }
            )}
          </div>
          </div>

          <div className="testim-slider-track testim-slider-track2">
          <div  ref={containerRef2} className="testim-main-slider flex">
            {[...reviewsData, ...reviewsData].map(
              (curElem, indx) => {
                return (
                  <>
                    <div className="testim-bx">
                        <p>
                            {curElem.text}
                        </p>

                        <div className="user-bx flex ">
                            <div className="user-img">
                                <img src={curElem.img} alt="" />
                            </div>
                            <div className="user-info">
                                <h6> {curElem.name} </h6>
                                <span> {curElem.info} </span>
                            </div>
                        </div>
                        
                    </div>
                  </>
                );
              }
            )}
          </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Testimonials;
