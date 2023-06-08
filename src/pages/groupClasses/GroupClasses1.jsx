import React from "react";
import pic8 from "../../assets/pic8.jpg";

function GroupClasses1() {
  return (
    <div className="flex flex-col gap-10 bg-white px-5 md:px-24 lg:justify-between lg:px-48 xl:flex-row">
      <div className="w-full">
        <img src={pic8} className="h-96 w-max object-cover lg:h-bigPic" />
      </div>
      <div className="flex flex-col gap-5 lg:w-8/12">
        <h2 className="font-main2 text-2xl text-red-600">
          Learn to Box as a Group
        </h2>
        <h1 className="font-main3 text-5xl text-black">
          How Group Classes Work
        </h1>
        <p className="w-10/12 font-main2 text-base text-gray-500 lg:w-10/12">
          Group classes are a great way to start learning how to box. We will
          teach you the basics, while also working on your overall fitness and
          stamina. <br /> <br /> We focus on high intensity training and
          important boxing drills. These workouts will help you to perform at
          your peak longer, and see improvements in your overall strength and
          coordination. <br /> <br /> Working as a group, you will quickly learn
          the fundamentals of good boxing, covering key areas like technique,
          coordination and timing. <br /> <br /> Group classes can also help
          with many of your fitness goals - getting in better shape, feeling
          more confident, losing any fat, and adding lean muscle.
        </p>
      </div>
    </div>
  );
}

export default GroupClasses1;
