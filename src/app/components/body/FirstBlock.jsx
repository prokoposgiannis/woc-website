"use client";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SquareBlock from "@/app/components/body/SquareBlock";

export default function FirstBlock() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang); // Get language from Redux

  return (
    <>
      <div className="absolute w-5/6 z-10">
        <div className="flex justify-between">
          <SquareBlock imageSubtitle={t("image1")} />
          <SquareBlock imageSubtitle={t("image2")} />
          <SquareBlock imageSubtitle={t("image3")} />
        </div>
      </div>
      <svg
        className="absolute top-0 left-0 w-full z-0 h-full fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,45 100,10 100,100 0,100" />
      </svg>
    </>
  );
}
