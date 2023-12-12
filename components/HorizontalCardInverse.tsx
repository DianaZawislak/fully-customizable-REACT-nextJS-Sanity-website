import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { RichTextComponents } from "./richTextCard";
import { PortableText } from "@portabletext/react";

interface CardProps {
  card: AboutUs;
}

const HorizontalCardInverse: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }} className="py-12">
        <div
          style={{
            width: "100%",
            position: "relative",
            zIndex: 2,
            marginRight: "-20%",
            paddingLeft: "2%",
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            textAlign: "start",
          }}
        >
          <div className="lg:w-2/3 ">
            <div className="text-xl mb-2 mt-10 after:tracking-wider text-center lg:ml-96 sm:ml-10">
              <h1>ABOUT US</h1>
              <h2 className="text-3xl text-gray-500 mt-2 mb-3">
                Learn More About Us
              </h2>
              <div className="h-1 w-32 bg-lime-300 mx-auto mt-3 mb-12"></div>
            </div>
            <div className="md:mt-24 mt-[70px] text-center items-center justify-center "></div>
            <div className="mb-20 mx-10">
              <PortableText
                value={card.mainText}
                components={RichTextComponents}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            position: "relative",
            zIndex: 1,
            marginLeft: "-30%",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={urlFor(card.backgroundImage.image)
                .width(2000)
                .height(2000).auto("format").fit("scale").url()}
              alt={card.backgroundImage.alt}
              fill
              style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              className="rounded-lg"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 1), 70%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-500" /> */}
    </>
  );
};

export default HorizontalCardInverse;
