import React from "react";
import { motion } from "framer-motion";

import urlFor from "../lib/urlFor";

type Props = {
  testimonial: testimonialCard;
  className?: string;
};

function TestimonialsCard({ testimonial }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center mt-5 space-y-12 flex-shrink-0 h-full sm:h-full md:h-full lg:h-full xl:h-full snap-center bg-gray-200
      p-5 hover:opacity-100 opacity-80 transition-opacity small-screen-opacity duration-200  xl:overflow-hidden lg:overflow-hidden md:overflow-hidden overflow-scroll
      w-full sm:w-full md:w-full lg:w-full xl:w-full shadow-xl"
      style={{ scrollSnapAlign: "center", margin: "0 auto" }}
    >
      <style>
        {`
        .experience-card-image {
          width: auto;
          height: auto;
          max-height: 40vh;
          border-radius: 50%;
          border: 7px solid #fff;
        }

        @media (min-width: 1024px) {
          article {
            width: 40vw !important; // Sets the card width to 80% of the viewport width
          }
          .experience-card-image {
            width: 20%;
            max-height: 50vh;
          }
          .experience-card-description {
            font-size: 1rem; 
          }
        }

        @media (max-width: 768px) {
          .experience-card-image {
            width: auto;
            height: auto;
            
        
          }
          .experience-card-description {
            font-size: 1rem; 
          }
        }

        @media (max-width: 480px) {
          .experience-card-image {
            width: 40%;
           
          }
          .small-screen-opacity {
            opacity: 100;
          }
        }
      `}
      </style>

      <motion.img
        initial={{
          y: -100,
          opacity: 0.5,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(testimonial.clientImage.image).width(300).height(300).auto("format").fit("scale").url()}
        alt={testimonial.clientImage.alt}
        className="object-cover object-center rounded-full experience-card-image"
        height={300}
        width={300}
      />

      <div className="lg:px-0 md:px-10 sm:px-0 ">
        <h4 className="mb-5 font-light text-center uppercase sm:text-xs md:text-xl lg:text-lg">
          {testimonial.clientName}
        </h4>
        <p className="lg:px-8 sm:px-1  text-md text-center h-auto  ">

        {testimonial.content}
        </p>
      </div>
    </article>
  );
}

export default TestimonialsCard;