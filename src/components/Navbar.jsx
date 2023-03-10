
import Link from "next/link";
import React, { useState } from "react";
import tekwizaLogo from "/public/images/main logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import ExportedImage from "next-image-export-optimizer";

const Navbar = () => {
  const [ToggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
      <div className=" Navbar flex text-white lg:px-7 px-2 py-2 h-12 w-screen justify-between items-center ">
        <div className="LogoContainer flex">
          <Link href={"/"}>
            <ExportedImage
              alt="Tekwiza Logo"
              className="h-6 lg:h-8 w-auto"
              src={tekwizaLogo}
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={ToggleNavbar ? faWindowClose : faBars}
            onClick={() => setToggleNavbar(!ToggleNavbar)}
            className=" cursor-pointer mx-2"
          />
        </div>
        <div className="Links hidden lg:flex">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
            <Link href="/events">Events </Link>
          </h3>

          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
            <Link href="/google-events">
              <FontAwesomeIcon className="text-xs" icon={faGoogle} /> Online Events{" "}
            </Link>
          </h3>

          <Link href="/workshops">
            <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
              Workshops
            </h3>
          </Link>
          {/* <Link href="/the-team">
            <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
              The Team
            </h3>
          </Link> */}
          <Link href="/contact-us">
            <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
              Contact Us
            </h3>
          </Link>
        </div>
      </div>
      <div
        className={`NavBarLinks h-screen w-screen bg-transparent ${
          ToggleNavbar ? "flex flex-col" : "hidden"
        } items-center mx-auto py-4 z-[5]`}
      >
        <Link href="/">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1 text-white">
            Home
          </h3>
        </Link>
        <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1 text-white">
          <Link href="/events">Events</Link>
        </h3>
        <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1 text-white">
          <Link href="/google-events">
            <FontAwesomeIcon className="text-xs" icon={faGoogle} /> Events
          </Link>
        </h3>
        <Link href="/workshops">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1">
            Workshops
          </h3>
        </Link>
        {/* <Link href="/the-team">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1">
            The Team
          </h3>
        </Link> */}
        <Link href="/contact-us">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1">
            Contact Us
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
