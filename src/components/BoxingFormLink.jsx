import React from "react";

function BoxingFormLink() {
  return (
    <div className="mg:px-24 h-60 w-full bg-footer px-5 lg:my-0 lg:px-48">
      <div className="flex h-full  flex-col items-center justify-center gap-5 lg:flex-row lg:justify-between lg:gap-96">
        <h1 className="w-64 text-center font-main3 text-4xl text-white lg:w-max lg:text-start xl:text-5xl">
          Want to Start Boxing?
        </h1>
        <div className="flex h-14 w-64 cursor-pointer items-center justify-center border-2 text-white duration-200 ease-in hover:bg-white hover:text-gray-600 lg:h-16">
          <p className="text-center font-main2 text-base font-semibold lg:text-xl">
            Book Your First Lesson
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoxingFormLink;
