"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { close, logo, menu } from "../../../public/assets";
import { navLinks } from "../../../constants/constants";

export default function NavBar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="hoobank" width={124} height={32} />
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
    </nav>
  );
}
