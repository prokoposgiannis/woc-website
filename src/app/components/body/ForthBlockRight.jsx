"use strict";

export default function ForthBlockRight({ color }) {
  return (
    <div
      className={`flex h-full px-3 mt-32 justify-center text-white bg-${color} p-3 rounded-xl`}
    >
      <div
        className="flex w-1/2 text-2xl
      
       p-9 h-full"
      >
        Leveraging across the entire user journey, we enhance interactions from
        first contact to post-service follow-up. Our modules utilize predictive
        analytics, sentiment analysis.
      </div>
      <div className="flex flex-col w-1/2 px-7 h-full justify-center items-center">
        <div className=" flex rounded-lg shadow-custom-shadow bg-gradient-to-b from-secondaryColor to-foreground h-96 w-full"></div>
      </div>
    </div>
  );
}
