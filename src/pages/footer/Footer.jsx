import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Links } from "../../components/NavBar";
import { Link } from "react-scroll";

const icons = [
  {
    element: <FacebookIcon className="text-footer" fontSize="medium" />,
    id: 1,
  },
  {
    element: <InstagramIcon className="text-footer" fontSize="medium" />,
    id: 2,
  },
];

const hours = [
  {
    text: "Mon - Thur: 3:00 pm - 9:00 pm",
    id: 1,
  },
  {
    text: "Friday: 3:00 pm - 8:00 pm",
    id: 2,
  },
  {
    text: "Friday: 3:00 pm - 8:00 pm",
    id: 1,
  },
  {
    text: "Sunday: Closed",
    id: 4,
  },
];

function Footer() {
  return (
    <div className="flex h-auto flex-col gap-10 bg-footer">
      <div className="mt-10 flex h-auto flex-col gap-10 bg-footer px-5 md:flex-row md:justify-between md:px-24 lg:px-48">
        <div className="flex flex-col gap-2">
          <h1 className="font-main3 text-3xl font-bold text-white">
            12Rounds Boxing Club
          </h1>
          <p className="font-main2 text-base font-thin text-gray-400">
            Tbilisi, Georgia
          </p>
          <div className="flex gap-2">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 hover:bg-white"
              >
                <i>{icon.element}</i>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-2 font-main3 text-xl text-gray-100">
            Useful Links
          </h1>
          {Links.map((nav) => (
            <ul key={nav.id}>
              <Link
                className="cursor-pointer font-main2 font-thin text-gray-400 hover:text-gray-200"
                to={nav.link}
                smooth={true}
                duration={800}
              >
                {nav.name}
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="mb-2 font-main3 text-xl text-gray-100">
            OPENING HOURS
          </h1>
          {hours.map((el) => (
            <ul key={el.id}>
              <p className="pb-2 font-main2 font-thin text-gray-400 underline hover:text-gray-200">
                {el.text}
              </p>
            </ul>
          ))}
        </div>
      </div>
      <div className="border-top w-100% bg-red flex h-32 items-center justify-center border-t border-gray-700 bg-footerSecndary py-7 md:h-auto">
        <p className="font-main2 text-sm font-thin text-gray-400">
          12 Rounds Boxing Club © 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
