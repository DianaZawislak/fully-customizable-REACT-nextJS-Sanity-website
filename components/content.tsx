"use client";

import React from "react";
import IndexCard from "./indexCARD";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import IndexCARDwithImgBack from "./indexCARDwithImgBack";
import urlFor from "../lib/urlFor";
import Banner2 from "./Banner2";

interface contentProps {
  content: ServiceCard[];
}

const PageContent: React.FC<contentProps> = ({ content }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 1,
  });

  return (
    <div
      id="SERVICES"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Banner2 content={content} />
      <animated.div
        ref={ref}
        style={{
          position: "relative",
          top: y.interpolate((value: number) => `${value * 400}px`),
        }}
      >
        <div
          className="services-container mb-11"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "16px",
            borderRadius: "4px",
            maxWidth: "100%",
            boxSizing: "border-box",
            marginBottom: "10px",
          }}
        >
          {content.map((card: ServiceCard, index: number) => (
            <div
              key={index}
              style={{
                position: "relative",
                flex: "0 1 100%",
                maxWidth: "400px",
                boxSizing: "border-box",
              }}
            >
              <IndexCARDwithImgBack
                header={card.title}
                fullBackgroundImage={
                  card.backgroundImage
                    ? urlFor(card.backgroundImage.image)
                        .width(1000)
                        .height(1000).auto("format").fit("scale")
                        .url()
                    : null
                }
                backgroundImage={
                  card.logo
                    ? urlFor(card.logo.image).width(80).height(80).auto("format").fit("scale").url()
                    : null
                }
                cardText={card.cardText}
              />
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default PageContent;
