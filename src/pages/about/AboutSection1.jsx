import React from "react";
import pic4 from "../../assets/pic4.jpg";
import pic1 from "../../assets/pic1.jpg";
import pic3 from "../../assets/pic3.jpg";

function AboutSection1() {
  return (
    <div className="relative h-max">
      <div className="h-14 -translate-y-7 -skew-y-2 bg-white xl:h-24"></div>
      <div className="flex flex-col justify-between gap-20 px-5 md:flex-row md:px-24 xl:px-48">
        <div className=" flex w-10/12 flex-col gap-5 md:w-max">
          <p className="font-main2 text-2xl text-red-600">
            12Rounds Boxing Club, Tbilisi
          </p>
          <h1 className="font-main3 text-5xl">Georgia's Top Boxing Gym</h1>
          <p className="w-full font-main2 text-base text-gray-500 lg:w-10/12">
            12Rounds Boxing is a specialized boxing facility that welcomes
            individuals of all age groups and skill levels. No matter what your
            boxing aspirations may be, our team is here to provide the guidance
            and support you need to reach them
            <br />
            <br />
            We offer the ideal environment for you to excel in the art of
            boxing, placing a high emphasis on comprehensive training and honing
            your boxing skills with precision
            <br />
            <br />
            If you're seeking professional guidance and a safe learning
            environment to acquire proper boxing techniques, we're here to
            assist you in mastering the art of boxing with expert instruction.
          </p>
        </div>
        <div className="relative hidden w-full justify-center md:mt-12 md:w-mid lg:mt-0 lg:flex">
          <img
            src={pic1}
            className="z-10 hidden h-80 scale-125 md:absolute md:block md:h-56"
          />
          <img
            src={pic4}
            className="absolute z-10 hidden h-36 md:-right-20 md:top-40 lg:-bottom-5 lg:-right-20 lg:top-48 lg:block lg:h-48"
          />
          <img
            src={pic3}
            className="absolute -left-24 top-52 hidden h-32 lg:-left-36 lg:top-40 lg:block lg:h-44"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection1;
