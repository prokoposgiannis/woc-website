"use strict";
"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

type TranslationKeys = "beAnAgent" | "findAgents" | "about" | "contact";
type Languages = "en" | "el" | "de";

const translation: Record<Languages, Record<TranslationKeys, string>> = {
  en: {
    beAnAgent: "Be an Agent",
    findAgents: "Find Agents",
    about: "About us",
    contact: "Contact us!",
  },
  el: {
    beAnAgent: "Γίνε Agent",
    findAgents: "Βρες Agents",
    about: "Πληροφορίες για εμάς",
    contact: "Στείλε μας!",
  },
  de: {
    beAnAgent: "Werde ein Agent",
    findAgents: "Finde Agenten",
    about: "Über uns",
    contact: "Kontaktiere uns!",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Languages>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen overscroll-none cursor-default">
      <div className="flex flex-row items-center h-32 w-full text-lg font-bold text-white text-nowrap px-24">
        <div className="w-56 pb-2 px-6">
          <img src="/logo.svg" alt="woc Logo" width={100} height={100} />
        </div>
        <div className="flex flex-row w-full pl-28">
          <ul className="flex flex-row space-x-10 ">
            <li>
              <Link href="/about" className="relative group">
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="relative">{translation[lang].beAnAgent}</span>
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
            <div className="mx-6 px-6 py-2 bg-secondaryColor text-center rounded-xl hover:bg-secondaryColorLight transition duration-300">
              {translation[lang].contact}
            </div>
          </Link>
          <div className="p-6">
            <button onClick={toggleDropDown}>
              <FontAwesomeIcon icon={faGlobe} className="pr-1" />
              {lang.toUpperCase()}
              {isOpen && (
                <div
                  className="absolute right-6 mt-2 w-fit origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
      <div className="flex flex-col h-fit text-white text-2xl ml-36 mt-20">
        <p className="font-semibold">Why choose woc?</p>
        <p className="">It's simple</p>
      </div>
      <div className="relative h-96 w-full text-primaryColor">
        <svg
          className="absolute top-0 left-0 w-full h-full fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,20 100,0 100,100 0,100" />
        </svg>
      </div>
      <div className="flex h-96 bg-primaryColor flex-col">
        <div className="flex">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}
