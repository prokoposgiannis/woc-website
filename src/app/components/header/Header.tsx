"use strict";

export default function Header() {
  return (
    <>
      <div className="absolute top-36 right-[-170px]">
        <img src="/globe.svg" alt="woc globe image" width={700} height={700} />
      </div>
      <div className="flex flex-row items-center h-32 w-full text-lg font-bold text-white text-nowrap px-24">
        <div className="min-w-32 pb-2 px-6">
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
            <div className="mx-6 px-6 py-2 bg-secondaryColor text-center shadow-md rounded-xl hover:bg-secondaryColorLight transition duration-300">
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
    </>
  );
}
