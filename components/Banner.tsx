"use client";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import urlFor from "../lib/urlFor";
import Image from "next/image";
interface HeaderProps {
  hero: Banner;
}

function Banner({ hero }: HeaderProps) {
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "500px",
        position: "relative",
      }}
      id="HOME"
    >
      <Image
        src={urlFor(hero.HeroImages?.image)
          .width(2000)
          .height(500)
          .auto("format")
          .fit("scale")
          .url()}
        alt={hero.HeroImages.alt}
        width={2000}
        height={500}
        style={{
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "500px",
          zIndex: -2,
        }}
        priority={true}
        className="absolute inset-0 bg-repeat opacity-80"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 1) )",
        }}
      />

      <div className="flex flex-col items-center justify-start h-full px-1 py-1 font-bold pt-36">
        <div
          className={`p-8 mt-10 rounded-lg items-center justify-center text-center ${
            animationState ? "animate-snake" : ""
          }`}
        >
          <h1 className="p-2 text-2xl text-black rounded-md lg:text-4xl">
            {hero.CTA_Main.split("\n").map((str, index) => (
              <span key={index} className="block mb-1">
                {str}
              </span>
            ))}
          </h1>

          <h2 className="text-black pt-2 px-10 sm:px-2 text-md tracking-[2px]">
            {hero.ctaText_Subtitle.split("\n").map((str, index) => (
              <span key={index} className="block mb-1">
                {str}
              </span>
            ))}
          </h2>
          <a
            href={`tel:${hero.HeroButton.PhoneNumber}`}
            className="block px-4 py-2 mt-10 text-xl text-center text-gray-500 no-underline transition-all duration-700 rounded-lg bg-lime-300 hover:text-lime-300 hover:bg-gray-500"
            role="button"
            tabIndex={0}
          >
            {hero.HeroButton.btnTXT}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
