import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MainContent1() {
  return (
    <div
      className={`h-halfScreen bg-[url(${null})] bg-cover bg-bottom bg-no-repeat`}
    >
      <div className="backdrop-brightness-80 font-main2  flex h-full w-full items-center justify-center bg-red-700/70 text-center text-white">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-thin">12Rounds Boxing Club</p>
          <h1 className="font-main3 text-7xl">Elite Boxing Training</h1>
          <button className="mt-10 h-16 w-72 bg-black px-8 text-xl font-bold text-gray-200 hover:text-white">
            LEARN MORE ABOUT 12ROUNDS
          </button>
          <i className="flex h-24 items-end">
            <ExpandMoreIcon
              fontSize="large"
              className="hover: cursor-pointer"
            />
          </i>
        </div>
      </div>
    </div>
  );
}

export default MainContent1;
