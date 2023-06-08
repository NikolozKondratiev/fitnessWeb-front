import React from "react";
import pic9 from "../../assets/pic9.jpg";

function GroupClasses2() {
  return (
    <div className="flex flex-col gap-10 bg-white px-5 md:px-24 lg:justify-between lg:px-48 xl:flex-row-reverse">
      <img src={pic9} className="h-96 object-cover lg:h-bigPic" />
      <div className="flex flex-col gap-5 lg:w-8/12">
        <h2 className="font-main2 text-2xl text-red-600">
          Get Fast. Get Fit. Learn to Box.
        </h2>
        <h1 className="font-main3 text-5xl text-black">
          Joining Our Group Classes
        </h1>
        <p className="w-10/12 font-main2 text-base text-gray-500 lg:w-10/12">
          We are currently limited on the size and frequency of our group
          classes. While we <br /> still do run group classes, it is essential
          you contact us first to enquire about <br /> availability. <br />{" "}
          <br /> If you are interested, please let us know using the contact
          form below. We will let <br /> you know of any available spaces that
          exist, and also notify you of any possible <br />
          future changes or updates. <br /> <br /> If you are unsure of whether
          to start group classes or one-on-one coaching, just <br />
          check out{" "}
          <a className="cursor-pointer text-red-600 hover:underline">
            the FAQ section below
          </a>
          , and then contact us letting us know which you <br /> might prefer.
          We will be happy to help you make the right choice.
        </p>
      </div>
    </div>
  );
}

export default GroupClasses2;
