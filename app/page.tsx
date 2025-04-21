"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import HeroSection from "./components/heroSection";
import ProjectShowCase from "./components/projectsshowcase";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle iframe overlay
  useEffect(() => {
    const overlay = document.getElementById("iframe-overlay");
    const iframeContainer = overlay?.parentElement;

    if (overlay && iframeContainer) {
      // Remove overlay when clicked to allow interaction with the iframe
      overlay.addEventListener("click", function () {
        this.style.display = "none";
      });

      // Add overlay back when mouse leaves the iframe area to allow scrolling
      iframeContainer.addEventListener("mouseleave", function () {
        if (overlay) overlay.style.display = "block";
      });

      // For mobile: add overlay back after a short delay when touching outside
      document.addEventListener("touchstart", function (e) {
        if (iframeContainer && !iframeContainer.contains(e.target as Node)) {
          if (overlay) overlay.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <HeroSection />

        <div className="bg-blue-100 rounded-lg">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* About Me Section */}
              <div className="w-full md:w-1/2">
                <h3 className="text-blue-500 font-medium uppercase mb-2">
                  ABOUT ME
                </h3>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Better design,
                  <br />
                  better experience
                </h2>
                <p className="text-gray-600">
                  I try to implement new stuffs. I think this keeps me engaged
                  with the real world.
                </p>
              </div>

              {/* Connect With Me Section */}
              <div className="w-full md:w-1/2 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Connect With Me
                </h2>
                <p className="text-gray-600 mb-6">
                  I hope you can find me through the emails. Social links work
                  too!! O_O
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100008648430082"
                    className="text-gray-500 hover:text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@gamingkarkhana/videos"
                    className="text-gray-500 hover:text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube text-lg"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ehsan-abdullah-khan-saad-965b48150/"
                    className="text-gray-500 hover:text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-150">
          {/* Services Section Header */}
          <div className="text-center mb-16 p-4">
            <h3 className="text-blue-500 font-medium mb-2">What I Offer?</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            I provide comprehensive web development solutions tailored to your specific needs. 
              From user research to final deployment, I focus on creating intuitive, 
              high-performance applications that deliver exceptional user experiences.
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
            {/* Card 1: User Research */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm-3 4a6 6 0 00-5.94 5H17.94A6 6 0 0012 12zm-1 6a1 1 0 100 2h2a1 1 0 100-2h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                User Research
              </h3>
              <p className="text-gray-600">
                I want try to understand the clients to meet their requirement.
              </p>
            </div>

            {/* Card 2: Visual Design */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Visual Design
              </h3>
              <p className="text-gray-600">
                Trying to make the design visually appealing is my key to ensure
                development success.
              </p>
            </div>

            {/* Card 3: User Testing */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-7 9a6 6 0 1112 0v1H5v-1zm7-14a8 8 0 00-8 8v3h16v-3a8 8 0 00-8-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                User Debugging
              </h3>
              <p className="text-gray-600">
                Trying to debug is hectic i try to manage it by testing
              </p>
            </div>

            {/* Card 4: Prototype */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prototype
              </h3>
              <p className="text-gray-600">
                Before publishing prototyping helps me to ensure the project
                credibility
              </p>
            </div>
          </div>
        </div>

        {/* project showcase */}
        <ProjectShowCase />

        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Resume Header */}
            <div className="text-center mb-12">
              <h3 className="text-blue-500 font-medium mb-2">
                Education & Experience
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                My Resume
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I am a learner ... i think this keeps me going even though we
                are not getting to that final spot.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto pt-10">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 hidden md:block"></div>

              {/* Timeline Item 1 */}
              <div className="relative mb-16">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 hidden md:block"></div>

                {/* Left side content (for desktop) / Full width (mobile) */}
                <div className="ml-0 md:w-1/2 md:pr-8 md:ml-0">
                  <h3 className="text-xl font-bold text-black">Full Stack Developer</h3>
                  <p className="text-gray-500">PRAN-RFL Group</p>
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mt-2">
                    2024
                  </div>
                  <p className="mt-3 text-gray-600">
                    I have worked here for 4 months. Learned a lot. Gained hands
                    on experience on c#, jQuery and bootstrap. I single-handedly
                    handled two projects that time.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative mb-16">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 hidden md:block"></div>

                {/* Right side content (for desktop) / Full width (mobile) */}
                <div className="ml-0 md:ml-auto md:w-1/2 md:pl-8 text-left md:text-left mb-10 md:mb-0">
                  <h3 className="text-xl font-bold text-black">University</h3>
                  <p className="text-gray-500 ">Brac University | Dhaka</p>
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mt-2">
                    2020 - 2024
                  </div>
                  <p className="mt-3 text-gray-600">
                    B.Sc in Computer Science and Engineering.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 hidden md:block"></div>

                {/* Left side content (for desktop) / Full width (mobile) */}
                <div className="ml-0 md:w-1/2 md:pr-8 md:ml-0">
                  <h3 className="text-xl font-bold text-black">College</h3>
                  <p className="text-gray-500">Dhaka Imperial | Dhaka</p>
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mt-2">
                    2018 - 2019
                  </div>
                  <p className="mt-3 text-gray-600">Science</p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 hidden md:block"></div>

                {/* Left side content (for desktop) / Full width (mobile) */}
                <div className="ml-0 md:ml-auto md:w-1/2 md:pl-8 text-left md:text-left mb-10 md:mb-0">
                  <h3 className="text-xl font-bold text-black">School</h3>
                  <p className="text-gray-500">
                    Motijheel Model School | Dhaka
                  </p>
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mt-2">
                    2013 - 2017
                  </div>
                  <p className="mt-3 text-gray-600">Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
