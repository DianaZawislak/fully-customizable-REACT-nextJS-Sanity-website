"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import urlFor from "../lib/urlFor";

import styles from "./Navbar.module.css";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import useScroll from "../hooks/useScrollTo";
interface HeaderProps {
  companyinfo: companyInformation;
}

const Header = ({ companyinfo }: HeaderProps) => {
  // const logo=urlFor(pageContent.Menulogo).url();
  //  const background=urlFor(pageContent.MenuBackground).url();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuData = ["HOME", "SERVICES", "ABOUT US", "OUR WORK", "TESTIMONIALS"];
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const { scrolled, scroll2El } = useScroll();
  return (
    <div
      className={`flex items-center justify-between space-x-2 bg-white font-bold  opacity-90 shadow-md sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "h-14" : "h-24"
      }`}
    >
      <div className="items-center justify-between hidden w-full pr-10 lg:space-x-32 md:space-x-1 md:flex">
        <div className="flex items-center space-x-10">
          <button onClick={() => scroll2El("HOME")}>
            <Image
              src={urlFor(companyinfo.logo.image)
                .width(500)
                .height(500)
                .auto("format")
                .fit("scale")
                .url()}
              width={scrolled ? 70 : 100}
              className="transition-all duration-500 ease-in-out rounded-md"
              height={scrolled ? 70 : 100}
              alt="logo"
              style={{ paddingRight: "2px" }}
            />
          </button>
          <nav className="font-semibold text-black text-md">
            <ul className="flex flex-row lg:space-x-8 md:space-x-3 lg:text-lg sm:text-sm">
              {menuData.map((item: string, index: number, array: string[]) => (
                <li
                  key={item}
                  className={`border-r border-black lg:pr-8 md:pr-3 hover:text-gray-500 ${
                    index !== array.length - 1 ? "" : "border-r-0"
                  }`}
                >
                  <button
                    onClick={() => scroll2El(item)}
                    className="overflow-hidden text-overflow-ellipsis whitespace-nowrap"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center pl-1 text-overflow-ellipsis whitespace-nowrap">
          <FontAwesomeIcon
            className="pl-12 pr-5 text-2xl"
            icon={faPhone}
            style={{ color: "#111111" }}
          />
          <a
            href={`tel:${companyinfo.PhoneNumber}`}
            className="text-2xl text-black md:text-lg hover:text-gray-500"
          >
            {companyinfo.PhoneNumber}
          </a>
        </div>
      </div>

      {/* Below are settings for menu on small screen */}

      <div className="flex items-center justify-between w-full md:hidden">
        <button onClick={() => scroll2El("HOME")}>
          <Image
            src={urlFor(companyinfo.logo.image)
              .width(80)
              .height(80)
              .auto("format")
              .fit("scale")
              .url()}
            width={80}
            className="rounded-md"
            height={80}
            alt="logo"
          />
        </button>
        <div className="flex items-center justify-end w-full space-x-2 md:hidden">
          {/*  <div>
            <FontAwesomeIcon
              className="pr-2"
              icon={faPhone}
              style={{ color: "#111111" }}
            />
            <a
              href={`tel:${companyinfo.PhoneNumber}`}
              style={{ color: "#111111" }}
              className="text-black phone-number hover:text-amber-800"
            >
              {companyinfo.PhoneNumber}
            </a>
          </div> */}

          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <button
                className="text-2xl text-black hover:text-gray-500"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <HamburgerMenuIcon
                  className="w-9 h-9 pr-2 hover:text-gray-500"
                  style={{ color: "#111111" }}
                />
              </button>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Content
              align="end"
              sideOffset={5}
              className={`w-30 px-1.5 py-1 mt-7 shadow-md bg-white z-50 ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <DropdownMenuPrimitive.Item
                className={`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none `}
              >
                <ul className="flex flex-col justify-end space-y-2 text-sm">
                  {menuData.map(
                    (item: string, index: number, array: string[]) => (
                      <li
                        key={item}
                        className={`pr-8 hover:text-gray-500 ${
                          index !== array.length - 1 ? "" : "border-r-0"
                        }`}
                      >
                        <button
                          onClick={() => scroll2El(item)}
                          className="overflow-hidden text-overflow-ellipsis whitespace-nowrap"
                        >
                          {item}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </div>
      </div>
    </div>
  );
};
export default Header;
