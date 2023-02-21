"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { close, logo, menu } from "../../../public/assets";
import { navLinks } from "../../../constants/constants";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="HooBank" width={124} height={32} />
      {/* Desktop devices */}
      <ul className="list-nobe sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      {/* Mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="Menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? "flex" : "hidden"} p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

        </div>
      </div>
    </nav>
  );
}
