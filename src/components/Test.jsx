// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Test = () => {
//   // Animation controls
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false, // Animation can trigger multiple times
//     threshold: 0.1, // Trigger when 10% of the element is visible
//   });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   // Variants for animations
//   const textVariant = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8 },
//     },
//   };

//   const imageVariant = {
//     hidden: { opacity: 0, scale: 1 },
//     visible: {
//       opacity: 1,
//       scale: 5,
//       transition: { delay: 0.4, duration: 1 },
//     },
//   };

//   const fadeOutVariant = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 0.5,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={fadeOutVariant}
//       style={{
//         padding: "2rem",
//         margin: "3rem 0",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         textAlign: "center",
//         background: "#f9f9f9",
//       }}
//     >
//       <motion.h6 variants={textVariant} style={{ fontSize: "1.2rem", color: "#555" }}>
//         Mini Title
//       </motion.h6>
//       <motion.h1 variants={textVariant} style={{ fontSize: "2.5rem", margin: "1rem 0" }}>
//         Main Heading
//       </motion.h1>
//       <motion.p
//         variants={textVariant}
//         style={{ fontSize: "1rem", color: "#666", marginBottom: "1.5rem" }}
//       >
//         This is some example paragraph text that animates when scrolled into view.
//       </motion.p>
//       <motion.button
//         variants={textVariant}
//         style={{
//           padding: "0.5rem 1rem",
//           backgroundColor: "#007BFF",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Learn More
//       </motion.button>
//       <motion.div variants={imageVariant}>
//         <img
//           src="https://via.placeholder.com/300"
//           alt="Placeholder"
//           style={{ width: "100%", maxWidth: "300px", marginTop: "2rem" }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Test;


import React from 'react';
import { motion } from 'framer-motion';
// import './VerticalSlider.css';

const titles = ["Title One", "Title Two", "Title Three", "Title Four", "Title Five"];

const Test = () => {
  return (
    <div className="slider-container">
      <motion.div
        className="slider-wrapper"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }} // Slide upwards
        transition={{
          repeat: Infinity,
          duration: 10, // Duration of one cycle
          ease: "linear", // Smooth and continuous
        }}
      >
        {/* Duplicate the titles to achieve seamless looping */}
        {[...titles, ...titles].map((title, index) => (
          <div className="slider-item" key={index}>
            {title}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Test;
