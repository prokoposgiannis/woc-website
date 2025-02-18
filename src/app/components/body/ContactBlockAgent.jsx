"use strict";
import ContactForm from "@/app/components/ContactForm";

export default function ContactBlockAgent({ translation, lang }) {
  return (
    <div className="relative flex flex-col h-full px-3 w-full bg-secondaryColor rounded-2xl justify-center items-center">
      <div className="flex w-[700px] mt-16 mb-32">
        <ContactForm />
      </div>
    </div>
  );
}
