"use strict";
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { SingleLevelDropdownMenu } from "./components/header/languageDropDownMenu";

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
  const [lang, setLang] = useState<Languages>("de");

  return (
    <div className="flex min-h-screen overscroll-none cursor-default">
      <div className="flex flex-row items-center h-32 w-full text-lg font-bold text-white text-nowrap">
        <div className="w-56">
          <p className="text-2xl px-6">woc</p>
        </div>
        <div className="flex flex-row w-full pl-28">
          <ul className="flex flex-row space-x-10 ">
            <li>
              <a className="relative group">
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="relative">{translation[lang].beAnAgent}</span>
              </a>
            </li>
            <li>
              <a className="relative group">
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="relative transition-all duration-300 group-hover:text-shadow-glow">
                  {translation[lang].findAgents}
                </span>
              </a>
            </li>
            <li>
              <a className="relative group">
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="relative transition-all duration-300 group-hover:text-shadow-glow">
                  {translation[lang].about}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center space-x-12 w-full mr-10">
          <div className="mx-6 px-6 py-2 bg-slate-500 text-center rounded-full hover:bg-slate-400 transition duration-300">
            {translation[lang].contact}
          </div>
          <div className="p-6" onClick={() => setLang("en")}>
            <FontAwesomeIcon icon={faGlobe} className="pr-3" />
            {lang.toUpperCase()}
            {/* <SingleLevelDropdownMenu /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
