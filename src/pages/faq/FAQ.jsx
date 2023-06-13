import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-scroll";

function FAQ() {
  return (
    <div
      id="faq"
      className="relative my-5 flex h-auto justify-center overflow-hidden px-5 md:px-24 xl:px-48"
    >
      <div className="absolute -left-1/4 top-0 -z-20 h-xlSection w-xl rotate-45 scale-150 bg-gray-100"></div>
      <div className="my-5 flex flex-col items-center gap-10 lg:w-1/2">
        <h1 className="font-main2 text-3xl text-black">
          Frequently Asked Questions
        </h1>
        <p className="text-center font-main2 text-base text-gray-500">
          Please find detailed information below on our most commonly asked
          questions. If you feel your question has still not been answered, then
          just contact us below, and we will help you the best we can.
        </p>

        <Accordion />

        <div className="flex flex-col items-center">
          <p className="font-main2 text-2xl font-thin text-gray-800">
            Still have some <strong>Questions?</strong>
          </p>
          <p className="font-main2 text-base text-gray-800">Let us help you</p>
        </div>
        <Link
          className="cursor-pointer border-2 border-red-600 px-5 py-1 font-main2 font-thin text-gray-800 duration-200 ease-in hover:bg-red-600 hover:font-normal"
          to="contactUs"
          smooth={true}
          duration={800}
        >
          Send us an email...
        </Link>
      </div>
    </div>
  );
}

export default FAQ;
