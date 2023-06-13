import React from "react";
import pic9 from "../../assets/pic9.jpg";

function GroupClasses2() {
  return (
    <div className="flex flex-col gap-10 bg-white px-5 md:px-24 lg:justify-between xl:flex-row-reverse xl:px-48">
      <img src={pic9} className="h-96 object-cover lg:h-bigPic" />
      <div className="flex flex-col gap-5 lg:w-8/12">
        <h2 className="font-main2 text-2xl text-red-600">
          Get Fast. Get Fit. Learn to Box.
        </h2>
        <h1 className="font-main3 text-5xl text-black">
          Joining Our Group Classes
        </h1>
        <p className="w-10/12 font-main2 text-base text-gray-500 lg:w-10/12">
          Due to current constraints, we have limitations on the size and
          frequency of our group classes. To ensure availability, please contact
          us before attending any group sessions. <br /> <br /> If you're
          interested, kindly inform us using the contact form below. We will
          notify you of any available spaces and keep you informed about
          potential updates or changes in the future. <br /> <br /> If you're
          unsure whether to join group classes or opt for one-on-one coaching,
          simply take a look at{" "}
          <a className="cursor-pointer text-red-600 hover:underline">
            the FAQ section below
          </a>
          , and then contact us letting us know which you might prefer. We will
          be happy to help you make the right choice.
        </p>
      </div>
    </div>
  );
}

export default GroupClasses2;
