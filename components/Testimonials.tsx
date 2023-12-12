import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialsCard from "./TestimonialsCard";

type Props = {
  testimonials: testimonialCard[];
};

function UserTestimonials({ testimonials }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    setScrollAmount(window.innerWidth / 6);
  }, []);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <>
      <div id="TESTIMONIALS" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="mt-20">
          <div className="text-xl mb-2 tracking-wider text-center">
            <h1>TESTIMONIALS</h1>
            <div className="text-3xl text-gray-500 mt-2 mb-3">
              <h2>What Others Say About Us</h2>
            </div>
            <div className="h-1 w-32 bg-lime-300 mx-auto mt-3 mb-12"></div>
          </div>
        </div>
      </div>
    
      <motion.div
        id="TESTIMONIALS"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col items-center
         h-1/2 max-w-7xl px-8 mx-auto overflow-hidden font-thin text-center md:flex-row justify-evenly"
      >
        <button
          className="absolute top-0 bottom-0 left-0 z-10 h-full w-12 flex items-center opacity-30 justify-center text-8xl text-#7bff00"
          onClick={scrollLeft}
        >
          &lsaquo;
        </button>

        <div
          ref={scrollRef}
          className="w-full flex space-x-5 overflow-x-hidden
          justify-between justify-items-center"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                padding: "0 15px 0 15px",
                flex: "none",
                width: "100%",
                margin: "0 0 30px",
                transform: `translateX(${-currentIndex * 100}%)`,
                transition: "transform 0.8s ease", // Add smooth transition
              }}
            >
              <TestimonialsCard
                key={testimonial._id}
                testimonial={testimonial}
                className={index === 0 ? "xl:ml-auto lg:ml-auto md:ml-auto mb-3" : ""}
              />
            </div>
          ))}
        </div>

        <button
          className="absolute top-0 right-0 bottom-0 flex items-center justify-center w-12 h-full  opacity-30 text-8xl"
          onClick={scrollRight}
        >
          &rsaquo;
        </button>
      </motion.div>
    </>
  );
}

export default UserTestimonials;
