import React from "react";
import pic2 from "../../assets/pic2.jpg";

function AboutSection3() {
  return (
    <div className="flex flex-col-reverse gap-10 bg-white px-5 md:px-24 lg:flex-row lg:justify-between xl:px-48">
      <div className="flex flex-col gap-5">
        <h2 className="font-main2 text-2xl text-red-600">
          Progress with Confidence
        </h2>
        <h1 className="font-main3 text-5xl text-black">
          Start Boxing The Right Way
        </h1>
        <p className="w-10/12 font-main2 text-base text-gray-500 lg:w-10/12">
          In addition to providing professional boxing training, our primary
          goal is to empower our clients to unleash their full potential. We are
          dedicated to fostering a winning mindset, building inner confidence,
          and equipping you with the resilience to overcome any life situation
          or challenge. <br />
          <br /> For numerous individuals, boxing serves as a catalyst for
          personal growth. Whether you aspire to achieve specific boxing goals
          or seek personal development beyond the ring, our unwavering
          commitment is to support your journey towards success.
        </p>
      </div>
      <div className="flex h-max w-full justify-center md:justify-start">
        <img
          src={pic2}
          className="top-0 h-96 md:h-bigPic lg:w-mid lg:object-contain"
        />
      </div>
    </div>
  );
}

export default AboutSection3;
