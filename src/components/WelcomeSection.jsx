import { faCalendarAlt, faDirections } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="lg:px-10 gap-4 px-1 WelcomeSection items-center my-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex h-40 w-auto justify-center">
        <video className=" rounded-lg" playsInline controlsList="nodownload noremoteplayback" controls src={require('../../public/videos/TechUthopia.mp4')}/>
      </div>
      <div className="text-sm mt-6 lg:mt-0 bg-slate-900 bg-opacity-30 py-5 rounded-lg px-5">
        <h1 className="text-3xl text-center">Welcome to TechUthopia</h1>
        <br />
        <h3 className="font-display text-xs">
        This Time TECH-UTOPIA 2023, the annual Tech-Fest of The UEM, Jaipur, First Metaverse, and Innovation College Tech fest, stretches for three heart-throbbing days. It witnesses immense participation from college students all across the country and is an exhilarating culmination of science, festivities, and interactions with renowned personalities, making it a once-in-a-lifetime experience for those in attendance.
        </h3>
        <br />
        <Link
          className="hover:underline pink decoration-purple-600 underline-offset-4 "
          href={"shorturl.at/buwx9"}
        >
          <h3>
            <FontAwesomeIcon icon={faDirections} /> Get Directions
          </h3>
        </Link>
        <h3>
          <FontAwesomeIcon icon={faCalendarAlt} /> Coming Soon, 2k23
        </h3>
      </div>
    </div>
  );
};
export default WelcomeSection;