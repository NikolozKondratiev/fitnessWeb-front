import React from "react";
import pic10 from "../../assets/pic10.jpg";

function AboutSection4() {
  return (
    <div className="flex flex-col justify-between gap-10 bg-white px-5 md:px-24 lg:flex-row lg:px-48">
      <div className="flex h-max w-full justify-center md:justify-start">
        <img src={pic10} className="top-0 h-96 md:h-bigPic lg:object-contain" />
      </div>
      <div className="flex flex-col gap-5 lg:w-8/12">
        <h2 className="font-main2 text-2xl text-red-600">
          Expert Equipment and Facilities
        </h2>
        <h1 className="font-main3 text-5xl text-black">
          Expert Equipment and Facilities
        </h1>
        <p className="w-10/12 font-main2 text-base text-gray-500 lg:w-10/12">
          At our gym, we have created a dedicated space designed specifically
          for professional boxing training. Featuring 12Rounds's only 6x6 meter
          boxing ring and a comprehensive selection of top-notch boxing and
          training equipment, we are fully equipped to cater to your needs and
          ensure rapid progress, regardless of your skill level. <br /> <br />{" "}
          In addition to providing top-quality equipment, our gym boasts a team
          of dedicated staff who specialize in nutrition, sports recovery, and
          optimizing overall fitness. If you are committed to learning boxing
          the proper way, we are fully prepared to assist you in getting started
          on your journey.
        </p>
      </div>
    </div>
  );
}

export default AboutSection4;
