import React from "react";
import pic6 from "../../assets/pic6.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const checkIconText = [
  "Beginner Friendly",
  "Top Expert Instruction and Safety",
  "Fluent English Speaking Staff and Coaches",
  "Professional Equipment and 6x6m Boxing Ring",
];

function AboutSection2() {
  return (
    <div className="flex h-max flex-col justify-between gap-10 bg-white px-5 md:px-24 lg:flex-row lg:items-center xl:px-48">
      <div className="flex">
        <img src={pic6} className="h-96 object-cover" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="font-main2 text-2xl text-red-600">
            Over 12 Years of Professional Boxing Experience
          </h2>
          <h1 className="text-balck font-main3 text-5xl">
            Learn to Box Like a Pro
          </h1>
          <p className="w-10/12 font-main2 text-base text-gray-500">
            When learning to box, professional coaching makes a difference.{" "}
            <br /> All our students receive expert advice on proper boxing
            technique, training and mindset. <br /> <br /> Our goal is to
            prepare you as a real boxer - ready to take on any new challenge,{" "}
            and in the best physical and mental shape of your life.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {checkIconText.map((text) => (
            <div key={text} className="flex items-center gap-3">
              <CheckCircleIcon
                fontSize="medium"
                className="scale-110 text-red-600"
              />
              <p className="font-main2 text-base font-semibold text-black">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection2;
