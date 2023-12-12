import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { RichTextComponents } from "./richTextCard";
import { PortableText } from "@portabletext/react";
interface CardProps {
  header: string;
  backgroundImage: string | null;
  fullBackgroundImage: string | null;
  cardText: string;
}

const IndexCARDwithImgBack: React.FC<CardProps> = ({
  header,
  backgroundImage,
  fullBackgroundImage,
  cardText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    marginTop: isOpen ? "0px" : "-500px",
    marginRight: isOpen ? "100px" : "-100px",
    marginLeft: isOpen ? "100px" : "-100px",
    from: { opacity: 0, marginTop: "-500px" },
  });

  // ...

  return (
    <div className="relative card-container ">
      {fullBackgroundImage && ( // checks if fullBackgroundImage is not null or undefined
        <Image
          src={fullBackgroundImage}
          alt="Full Background Image"
          fill
          className="opacity-50"
          style={{ borderRadius: "4px", objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      <div className="relative flex flex-col items-center justify-center pb-10">
        {backgroundImage && ( // checks if backgroundImage is not null or undefined
          <div
            className="relative mt-3 mb-6"
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            <Image
              src={backgroundImage}
              alt="Card Image"
              height={400}
              width={400}
            />
          </div>
        )}
        <div className="flex flex-col items-center justify-center h-40">
          <h1 className="mb-1 font-bold text-gray-900 text-md">{header}</h1>
          <p className="px-4 py-2 mb-4 text-center text-gray-900 text-md">
            {cardText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexCARDwithImgBack;
