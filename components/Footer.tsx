"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Link2Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import useScroll from "../hooks/useScrollTo";
import urlFor from "../lib/urlFor";

interface FooterProps {
  data: companyInformation;
}

export default function Footer({ data }: FooterProps) {
  const logoUrl = urlFor(data.logo.image).url();

  const PhoneNumber = data.PhoneNumber;
  const CompanyName = data.CompanyName;
  const Email = data.Email;

  const { scrolled, scroll2El } = useScroll();

  return (
    <footer className="relative p-4 bg-white shadow-md sm:p-6 dark:bg-gray-900">
      <Image
        src="https://cdn.sanity.io/images/lebzwfrn/production/9931c27d120e02b3ea34535359a873bd491bc32e-2048x465.png"
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0 bg-repeat bg-footer-bg opacity-10"
      />
      <div className="z-10 grid justify-center gap-8 mb-8 sm:grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center justify-start sm:flex-row">
          <Link href="/" target="_blank">
            <Image
              src={logoUrl}
              alt="Logo"
              className="pb-3 logo-class"
              width="80"
              height="80"
            />
          </Link>
          <h1 className="justify-center mt-2 text-gray-600 align-middle md:ml-4 sm:ml-0 sm:mb-2">
            {CompanyName}, LLC
          </h1>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-center text-gray-900 uppercase dark:text-white">
            Address
          </h3>
          <ul>
            <li className="flex justify-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-gray-600 dark:text-gray-400" />
              <span className="justify-center text-gray-600 dark:text-gray-400">
                {data.StreetAddress}
              </span>
            </li>
            <li className="flex justify-center mb-2">
              <span className="justify-center ml-6 text-gray-600 dark:text-gray-400">
                {data.City}, {data.State} {data.Zipcode}
              </span>
            </li>
          </ul>
        </div>

        <div className="z-10">
          <h3 className="mb-3 text-sm font-semibold text-center text-gray-900 uppercase dark:text-white">
            Contact
          </h3>
          <ul>
            <li className="flex items-center justify-center mb-2">
              <FaPhone className="mr-2 text-gray-600 dark:text-gray-400 " />
              <a
                href={`tel:${[PhoneNumber]}`}
                className="justify-center text-gray-600 dark:text-gray-400"
              >
                {PhoneNumber}
              </a>
            </li>
            <li className="flex items-center justify-center mb-2">
              <FaEnvelope className="mr-2 text-gray-600 dark:text-gray-400" />
              <a
                href={`mailto:${Email}`}
                className="text-gray-600 dark:text-gray-400"
              >
                {Email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-2" />

      <div className="relative z-10 sm:flex sm:items-center sm:justify-between">
        {/* <div className="flex flex-col">

   <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    {websiteTitle}
  </span>
</div> */}
        <span className="flex flex-col items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <button
            onClick={() => scroll2El("HOME")}
            className="overflow-hidden text-overflow-ellipsis whitespace-nowrap"
          >
            {CompanyName}™
          </button>
          <span className="self-center text-sm">All Rights Reserved.</span>
        </span>

        <div className="flex items-center justify-center mt-4 space-x-6 sm:mt-0">
          <button
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Share on Facebook"
          >
            <FaFacebookF aria-hidden="true" size={36} />
          </button>
          <button
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Share on Twitter"
          >
            <FaTwitter aria-hidden="true" size={36} />
          </button>
          <button
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" size={36} />
          </button>
        </div>
      </div>
    </footer>
  );
}
