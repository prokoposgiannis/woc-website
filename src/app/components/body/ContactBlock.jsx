"use strict";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";

export default function ContactBlock({ translation, lang }) {
  return (
    <div className="relative flex flex-col h-full px-3 w-full bg-primaryColor justify-center items-center">
      <div className="flex w-full text-white font-semibold justify-center">
        <Link href="/about">
          <div className="absolute top-[-20px] right-1/2 mx-6 px-6 py-2 bg-secondaryColor text-center shadow-custom-shadow rounded-lg hover:bg-secondaryColorLight transition duration-300">
            {translation[lang].beAnAgent}
          </div>
        </Link>
        <Link href="/about">
          <div className="absolute top-[-20px] left-1/2 mx-6 px-6 py-2 bg-secondaryColor text-center shadow-custom-shadow rounded-lg hover:bg-secondaryColorLight transition duration-300">
            {translation[lang].findAgents}
          </div>
        </Link>
      </div>
      <div className="flex w-[700px] mt-16 mb-32">
        <ContactForm />
      </div>
    </div>
  );
}
