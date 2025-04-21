import React from "react";
import  Link  from 'next/link';

const HeroSection = () => {
  return (
    <div>
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-20 space-y-10 md:space-y-0 ">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <p className="text-blue-500 font-semibold">Hey There 👋 I am</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black">Ehsan</h1>
          <p className="text-green-500 text-lg mt-2">
            Professional
            <span className="font-semibold text-gray-800">
              {" "}
              Full Stack Developer
            </span>
          </p>
          <p className="text-gray-600 mt-4">
            I love Exploring..... Experiencing newer things makes me alive!!!
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md w-full md:w-auto text-center"
            >
              Contact Me
            </Link>
            <Link
              href="#"
              className="bg-black text-white px-6 py-2 rounded-md w-full md:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Spline 3D Viewer (Resizes on Mobile) */}
        <div className="w-full md:w-full h-[300px] md:h-[600px] relative">
          {/* Adding a transparent overlay that can be toggled */}
          <div
            id="iframe-overlay"
            className="absolute inset-0 z-10 bg-transparent pointer-events-auto"
          ></div>
          <iframe
            src="https://my.spline.design/keyboard-75fb06060cf4a37585891b4dbcae05f4/"
            className="w-full h-full border-none rounded-lg"
            loading="lazy"
            title="3D Keyboard Model"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
