"use strict";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex px-6 flex-col h-full w-full text-white">
      <div className="mt-6 mb-10">
        <img src="/woc-logo.svg" alt="woc Logo" width={50} height={50} />
      </div>
      <div className="flex h-full">
        <div className="flex flex-col w-1/2 ">
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-start mb-2">
              <FaPhoneAlt />
              <div className="ml-2">+30 210 32 53 452</div>
            </div>
            <div className="flex items-center justify-start">
              <MdOutlineEmail />
              <div className="ml-2"> woc.com.gr@gmail.com</div>
            </div>
          </div>
          <div className="flex h-full items-end">
            <div className="flex items-center justify-start text-sm mb-3">
              2025 - woc.inc
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-end justify-end mb-3">
          <div className="flex mb-3">Join our community</div>
          <div className="flex text-2xl">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <div>
                <FaXTwitter />
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ml-3">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ml-3">
                <RiFacebookCircleLine />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
