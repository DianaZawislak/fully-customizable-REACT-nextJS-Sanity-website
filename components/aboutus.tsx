"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import HorizontalCardInverse from "./HorizontalCardInverse";
interface contentProps {
  content:AboutUs;
}
const Aboutus: React.FC<contentProps> = ({ content }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 1,
  });
  const cardData: AboutUs = content;
  return (
    <div id="ABOUT US" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      
      <animated.div
        ref={ref}
        style={{
          position: "relative",
          top: y.interpolate((value: number) => `${value * 400}px`),
        }}
      >
        <HorizontalCardInverse card={cardData} />
      </animated.div>
    </div>
  );
};

export default Aboutus;
