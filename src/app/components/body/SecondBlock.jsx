"use strict";

import SwiperComponent from "@/app/components/body/SwiperComponent";

export default function SecondBlock({ translation, lang }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="font-semibold w-fit text-white text-3xl">
          {translation[lang].expertise}
        </div>
        <div className="flex h-fit w-full">
          <SwiperComponent translation={translation} lang={lang} />
        </div>
      </div>
    </>
  );
}
