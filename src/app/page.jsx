"use strict";
"use client";

import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../redux/slices/languageSlice";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import FirstBlock from "@/app/components/body/FirstBlock";
import SecondBlock from "@/app/components/body/SecondBlock";
import ThirdBlock from "@/app/components/body/ThirdBlock";
import ForthBlock from "@/app/components/body/ForthBlock";

import ContactBlock from "@/app/components/body/ContactBlock";
import Footer from "@/app/components/Footer";
import AnimatedGLobe from "@/app/components/AnimatedGlobe";

export default function Home() {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = useMemo(() => lang, [lang]);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleLangChange = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto overflow-x-hidden cursor-default">
      <div className="relative max-w-screen-2xl w-full mx-auto text-white">
        <div className="absolute top-36 right-[-170px] -z-10">
          <AnimatedGLobe />
        </div>
        <div className="flex flex-row items-center h-32 w-full text-lg font-bold text-white text-nowrap px-24">
          <div className="min-w-32 pb-2 px-6">
            <img src="/woc-logo.svg" alt="woc Logo" width={100} height={100} />
          </div>
          <div className="flex flex-row w-full pl-28">
            <ul className="flex flex-row space-x-10 ">
              <li>
                <Link href="/agent" className="relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">{t("beAnAgent")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative transition-all duration-300 group-hover:text-shadow-glow">
                    {t("findAgents")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative transition-all duration-300 group-hover:text-shadow-glow">
                    {t("about")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center space-x-12 w-full mr-10">
            <Link href="/about">
              <div className="mx-6 px-6 py-2 bg-secondaryColor text-center shadow-custom-shadow rounded-xl hover:bg-secondaryColorLight transition duration-300">
                {t("contact")}
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
                        onClick={() => handleLangChange("en")}
                      >
                        English
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleLangChange("el")}
                      >
                        Ελληνικά
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleLangChange("de")}
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
        <div className="flex flex-col h-fit text-white ml-36 mt-64 mb-44 relative">
          <p className="font-semibold w-fit text-3xl">{t("title")}</p>
          <div className="flex w-72 justify-end text-2xl relative">
            <p className="relative z-10">{t("subtitle")}</p>

            <div className="absolute top-[-8px] right-[-50px] z-0">
              <img
                src="/stroke.svg"
                alt="woc stroke image"
                width={170}
                height={170}
              />
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col">
          <div className="relative w-full h-96 text-primaryColor flex justify-center">
            <FirstBlock />
          </div>
          <div className="flex h-52 bg-primaryColor flex-col"></div>
          <div className="h-full px-16 bg-primaryColor">
            <SecondBlock />
          </div>
          <div className="flex w-full h-[700px] flex-col">
            <ThirdBlock />
          </div>
          <div className="flex w-full h-full">
            <ForthBlock />
          </div>
          <div className="flex h-24 justify-center mt-16 text-white text-3xl font-semibold">
            {t("workTogether")}
          </div>
          <div className="flex w-full h-full">
            <ContactBlock />
          </div>
          <div className="flex w-full h-[220px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
