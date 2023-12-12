import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import urlFor from "../lib/urlFor";

interface GalleryProps {
  images: WebImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div id="OUR WORK" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div className="mt-20">
        <div className="mb-2 text-xl tracking-wider text-center">
          <h1>OUR WORK</h1>
          <div className="mt-2 mb-3 text-3xl text-gray-500">
            <h2>See Some Of Our Work</h2>
          </div>
          <div className="w-32 h-1 mx-auto mt-3 mb-24 bg-lime-300"></div>
        </div>
      </div>
      <Carousel
        autoPlay
        interval={5000}
        transitionTime={500}
        infiniteLoop
        showStatus={false}
        showThumbs={true}
        swipeable={false}
        renderThumbs={() =>
          images.map((image: GalleryImage, index: number) => (
            <div key={index}>
              <Image
                src={urlFor(image.image).width(100).height(100).auto("format").fit("scale").url()}
                alt={image.alt}
                width={100}
                height={100}
              />
            </div>
          ))
        }
      >
        {images.map((image: GalleryImage, index: number) => (
          <div key={index}>
            <Image
              src={urlFor(image.image).width(500).height(500).auto("format").fit("scale").url()}
              alt={image.alt}
              width={500}
              height={500}
            />
            <p className="legend">{image.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
