import React, { useEffect, useState } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styledComponents/PricingStyle.css";
import MiniTitle from "../components/MiniTitle";
import Comnheading from "../components/Comnheading";
import { plan } from "../jsonData";
import Button from "../components/Button";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false); // State for plan type
  const [prices, setPrices] = useState(plan.map((p) => p.monthlyPlan)); // Initial prices

  // Handle Plan Change
  const handlePlanChange = (type) => {
    const targetPrices =
      type === "annual"
        ? plan.map((p) => p.annualPlan)
        : plan.map((p) => p.monthlyPlan);

    // Smoothly update prices with animation
    const animationInterval = 20; // ms per step
    const steps = 15; // Number of animation steps
    const startPrices = [...prices];

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setPrices(
        startPrices.map((startPrice, index) => {
          const diff = targetPrices[index] - startPrice;
          return Number(startPrice + (diff / steps) * step);
        })
      );
      if (step >= steps) clearInterval(interval); // Stop when done
    }, animationInterval);

    setIsAnnual(type === "annual");
  };

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


    const cardVariant = (index) => ({
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 , delay : index * 0.14 },
      },
    });

    const toggleVariant = {
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 , delay :  0.14 },
        },
      };

  return (
    <>
      <section className="pricing-plan-comp">
        <div className="common-container">
          {/* Titles */}
          <MiniTitle minititleText={"PRICING"} />
          <Comnheading title={"Choose the right pricing plan for you"} />

          {/* Plan Toggle */}
          <motion.div 
           ref={ref}
           initial="hidden"
           animate={controls}>
          <motion.div
            className={
              isAnnual
                ? "pricing-plan-btns-flex flex item-center planActive"
                : "pricing-plan-btns-flex flex item-center"
            }
            variants={toggleVariant}
          >
            <div className="bg-color"></div>
            <button
              onClick={() => handlePlanChange("monthly")}
              className="pricing-btn"
            >
              Monthly
            </button>
            <button
              onClick={() => handlePlanChange("annual")}
              className="pricing-btn"
            >
              Annual
            </button>
          </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div className="pricing-plan-grid grid grid-three-col"
           ref={ref}
           initial="hidden"
           animate={controls}
          >
            {plan.map((curElem, index) => (
              <motion.div
                className="pricing-plan-bx"
                key={curElem.id}
                variants={cardVariant(index)}
              >
                {/* Plan Type */}
                <div className="mini-title-bx plan-type-bx">
                  <span>{curElem.planType}</span>
                </div>

                {/* Price */}
                <motion.h3
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span>$</span> {Math.round(prices[index])}{" "}
                  <span className="monthtext">/ MO</span>
                </motion.h3>

                {/* Plan Text */}
                <p>{curElem.planText}</p>

                {/* Plan Features */}
                <div className="plan-features-lists">
                  {curElem.planFeatures.map((feature, i) => (
                    <li key={i}>
                      <div className="check-list">
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </div>
                      {feature}
                    </li>
                  ))}
                </div>

                {/* Button */}
                <Button
                  borderColor={"#fff"}
                  defColor={"#fff"}
                  title={"Discover More"}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
