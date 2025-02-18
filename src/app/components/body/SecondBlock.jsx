"use client";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SwiperComponent from "@/app/components/body/SwiperComponent";

export default function SecondBlock() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang); // Get language from Redux

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="font-semibold w-fit text-white text-3xl">
          {t("expertise")}
        </div>
        <div className="flex h-fit w-full">
          <SwiperComponent />
        </div>
      </div>
    </>
  );
}
