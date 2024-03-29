import { useState, useRef, useContext } from "react";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-scroll";

export const Links = [
  { name: "About Us", link: "aboutUs", id: 1 },
  { name: "Group Classes", link: "groupClasses", id: 2 },
  { name: "FAQ", link: "faq", id: 3 },
  { name: "Contact", link: "contactUs", id: 4 },
];

function NavBar() {
  const socMedIcons = [
    { name: <FacebookIcon fontSize="small" />, id: 1 },
    { name: <InstagramIcon fontSize="small" />, id: 2 },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="relative top-0 z-40 w-full">
      <div className="flex h-12 w-full justify-start border-b-2 border-gray-200 bg-white px-5 font-main2 text-base text-gray-900 md:justify-between lg:px-24 xl:px-48">
        <div className="flex items-center bg-white">
          <ul className="flex gap-12">
            <li className="flex flex-row gap-2">
              <p>Phone:</p>
              <a className="font-semibold">+995 555 555 555</a>
            </li>
            <li className="hidden md:block">
              <p>
                Email: <a className="font-semibold">12BoxingClub@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="hidden items-center md:flex">
          <ul className="header-contact invisible flex items-center gap-5 md:visible">
            <div className="flex gap-1">
              {socMedIcons.map((icon) => (
                <li key={icon.id} className="hover: cursor-pointer">
                  {icon.name}
                </li>
              ))}
            </div>
            <li>
              <button className="h-10 w-40 rounded-xl bg-red-600">
                <Link
                  to="contactUs"
                  smooth={true}
                  duration={800}
                  className="text-white"
                >
                  Book a session
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="left-0 top-0 h-28 w-full bg-white px-5 text-gray-600 lg:px-24 xl:px-48">
        <div className="items-center justify-between md:flex">
          <div className="flex h-28 items-center">
            <p className="font-main3 text-2xl text-black xl:text-4xl">
              12Rounds Boxing
            </p>
          </div>

          <div className="absolute right-8 top-20 text-3xl md:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center bg-red-600"
            >
              <MenuIcon className="font text-white" fontSize="small" />
            </div>
          </div>

          <ul
            className={`duration-400 absolute left-0 -z-20 flex w-full flex-col whitespace-nowrap bg-white pb-5 pl-9
                text-lg transition-all ease-in md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:gap-16 md:pb-0 md:pl-0 ${
                  open ? "top-36" : "top-[-300px]"
                }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="my-3 cursor-pointer md:my-0 lg:w-full"
              >
                <Link
                  to={link.link}
                  smooth={true}
                  duration={800}
                  className="font-main2 text-gray-800 duration-150 hover:text-red-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
