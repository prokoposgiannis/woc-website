"use strict";

export default function ThirdBlock() {
  return (
    <div className="mt-36 relative w-full h-full">
      <div className="flex h-full">
        <div className="flex flex-col z-10 h-full px-3 text-white items-center">
          <div className="flex flex-col justify-end items-center font-semibold w-full ml-20 text-white text-3xl">
            <p className="flex w-full mt-2">Technology & Talents for</p>
            <p className="flex w-full ml-32">the future of CX</p>
          </div>
          <div className="flex items-center h-full">
            <div className="flex w-1/2 mt-12 text-2xl p-9 h-full">
              <p>
                Driven by our fundamental goal at woc - to create &quot;you made
                my day&quot; moments - we are dedicated to spark this feeling in
                everyone we interact withm be it as an enterprise or as a
                talent.
              </p>
            </div>

            <div className="flex flex-col w-1/2 px-7 mb-20 h-full items-center justify-center ">
              <div className="rounded-lg shadow-custom-shadow z-10 bg-gradient-to-b from-secondaryColor to-foreground h-96 w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,10 100,0 100,90 0,100"
          className="fill-current text-secondaryColor"
        />
      </svg>
    </div>
  );
}
