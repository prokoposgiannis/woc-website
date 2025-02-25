"use strict";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function TextBlock({ color }) {
  return (
    <div
      className={`relative flex h-full px-3  mt-32 pb-12 justify-center font-bold text-white ${color} p-3 rounded-xl`}
    >
      <div className="absolute -left-4 -top-5 text-4xl bg-primaryColorAgent rounded-full">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div
        className="flex w-1/2 text-2xl
      
       p-9 h-full "
      >
        Leveraging across the entire user journey, we enhance interactions from
        first contact to post-service follow-up. Our modules utilize predictive
        analytics, sss analysis.
      </div>
      <div
        className="flex w-1/2 text-2xl
      
       p-9 h-full"
      >
        Leveraging across the entire user journey, we enhance interactions from
        first contact to post-service follow-up. Our modules utilize predictive
        analytics, sss analysis.
      </div>
    </div>
  );
}
