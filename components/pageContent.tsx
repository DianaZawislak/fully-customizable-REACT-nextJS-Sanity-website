"use client";

import Banner from "./Banner";

import AboutUs from "./aboutus";

import PageContent from "./content";

import Gallery from "./Gallery";

import UserTestimonials from "./Testimonials";
import urlFor from "../lib/urlFor";

interface PageProps {
  content: {
    Service: ServiceCard[];
    AboutUsData: AboutUs;
    ImageGallery: WebImage[];
    testimonials: testimonialCard[];
    heroBanner: Banner;
  };
}

function MainPage({
  content: { Service, ImageGallery, AboutUsData, testimonials, heroBanner },
}: PageProps) {
  return (
    <>
      <div className="relative">
        <Banner hero={heroBanner} />
      </div>

      <div className="container px-4 mx-auto md:px-0">
        <PageContent content={Service} />

        <AboutUs content={AboutUsData} />

        <Gallery images={ImageGallery} />

        <UserTestimonials testimonials={testimonials} />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            display: flex;
            flex-direction: column;
          }
          .absolute {
            position: static;
          }
        }
      `}</style>
    </>
  );
}

export default MainPage;
