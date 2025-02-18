"use strict";
"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import FirstBlock from "@/app/components/body/FirstBlock";
import SecondBlock from "@/app/components/body/SecondBlock";
import ThirdBlockAgent from "@/app/components/body/ThirdBlockAgent";
import ForthBlock from "@/app/components/body/ForthBlock";

import ForthBlockRight from "@/app/components/body/ForthBlockRight";

import ContactBlockAgent from "@/app/components/body/ContactBlockAgent";
import Footer from "@/app/components/Footer";

import { translation } from "@/app/constants/translation";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto overflow-x-hidden cursor-default">
      <div className="relative max-w-screen-2xl w-full mx-auto text-white">
        <div className="flex flex-row items-center h-32 w-full text-lg font-bold text-white text-nowrap px-24">
          <div className="min-w-32 pb-2 px-6">
            <img src="/woc-logo.svg" alt="woc Logo" width={100} height={100} />
          </div>
          <div className="flex flex-row w-full pl-28">
            <ul className="flex flex-row space-x-10 ">
              <li>
                <Link href="/" className="relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">{translation[lang].home}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative transition-all duration-300 group-hover:text-shadow-glow">
                    {translation[lang].findAgents}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative transition-all duration-300 group-hover:text-shadow-glow">
                    {translation[lang].about}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center space-x-12 w-full mr-10">
            <Link href="/about">
              <div className="mx-6 px-6 py-2 bg-secondaryColor text-center shadow-custom-shadow rounded-xl hover:bg-secondaryColorLight transition duration-300">
                {translation[lang].contact}
              </div>
            </Link>
            <div className="p-6">
              <button onClick={toggleDropDown}>
                <FontAwesomeIcon icon={faGlobe} className="pr-1" />
                {lang.toUpperCase()}
                {isOpen && (
                  <div
                    className="absolute mt-2 w-fit origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setLang("en")}
                      >
                        English
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setLang("el")}
                      >
                        Ελληνικά
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setLang("de")}
                      >
                        Deutsch
                      </a>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col">
          <div className="flex w-full h-[700px] flex-col">
            <ThirdBlockAgent translation={translation} lang={lang} />
          </div>
          <div className="flex w-full h-full">
            <ForthBlock translation={translation} lang={lang} />
          </div>
          <div className="flex w-full h-full">
            <ForthBlockRight translation={translation} lang={lang} />
          </div>
          <div className="flex h-24 justify-center mt-16 text-white text-3xl font-semibold">
            Let&apos;s work together.
          </div>
          <div className="flex w-full h-full">
            <ContactBlockAgent translation={translation} lang={lang} />
          </div>
          <div className="flex w-full h-[220px]">
            <Footer translation={translation} lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
