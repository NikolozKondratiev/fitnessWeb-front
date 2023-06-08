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
          Class sessions provide an excellent opportunity to embark on your
          boxing journey. Our instructors will guide you through fundamental
          techniques, enhancing your overall physical fitness and endurance.{" "}
          <br /> <br /> Our training program emphasizes high-intensity workouts
          and essential boxing drills to enhance endurance, strength, and
          coordination. Experience notable performance improvements through our
          targeted approach. <br /> <br /> In a supportive group setting, you'll
          rapidly acquire essential boxing fundamentals, including technique,
          coordination, and timing. <br /> <br /> Group classes improve fitness,
          confidence, and body composition. Embrace the supportive group
          environment to reach your goals.
        </p>
      </div>
    </div>
  );
}

export default GroupClasses1;
