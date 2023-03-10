import ExportedImage from "next-image-export-optimizer";

import Link from "next/link";
import React from "react";
import tekwizaLogo from "../../public/images/main logo.png";

const Hero = () => {
  return (
    <>
    <div className="overlay"></div>
      <video className="bgVideo" disablePictureInPicture playsInline autoPlay muted loop>
        <source src='/videos/bgplay.mp4' type="video/mp4" />
      </video>
    <div className="my-4 flex flex-col justify-center items-center">
      <ExportedImage alt="Tekwiza Logo" className="h-40 lg:h-56 w-auto" src={tekwizaLogo} />
      {/* <h1 className="text-2xl mt-2">Coming Soon...</h1> */}
      <Link className="border-2 px-2 py-[1.5] m-2 border-white transition-shadow hover:bg-white hover:text-black" href={'/events'}>
        <h2>Go to Events</h2>
      </Link>
      
      <h2 className="break-words text-center">Coming Soon @ University of Engineering and Management, Jaipur</h2>
    
    </div>
    </>
  );
};

export default Hero;
