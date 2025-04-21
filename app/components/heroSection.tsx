"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CodeBlock } from "./ui/codeblock";
import React, { useEffect } from "react";
import Link from 'next/link';

const HeroSection = () => {
  const greetingText = "Hey There 👋 I am";
  const nameText = "Ehsan";
  const professionText = "Professional Full Stack Developer";
  const bioText = "I love Exploring. Experiencing newer things makes me alive!";
  
  // Sample code for the CodeBlock
  const sampleCode = `function greeting() {
  return "Hello, I'm Ehsan!";
}

// Full Stack Developer
const skills = [
  "React", 
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS"
];

// Let's build something amazing together!
`;
  
  // Handle iframe overlay
  useEffect(() => {
    const overlay = document.getElementById("iframe-overlay");
    const iframeContainer = overlay?.parentElement;

    if (overlay && iframeContainer) {
      // Remove overlay when clicked to allow interaction with the iframe
      overlay.addEventListener("click", function() {
        this.style.display = "none";
      });

      // Add overlay back when mouse leaves the iframe area to allow scrolling
      iframeContainer.addEventListener("mouseleave", function() {
        if (overlay) overlay.style.display = "block";
      });

      // For mobile: add overlay back after a short delay when touching outside
      document.addEventListener("touchstart", function(e) {
        if (iframeContainer && !iframeContainer.contains(e.target as Node)) {
          if (overlay) overlay.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-80 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout: text on left, code on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column: Text content */}
          <div className="order-2 lg:order-1">
            <div className="text-blue-500 font-semibold">
              <TextGenerateEffect words={greetingText} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
              <TextGenerateEffect words={nameText} />
            </h1>
            
            <p className="text-lg mt-2">
              <span className="text-green-500">Professional</span>
              <span className="font-semibold text-gray-800"> Full Stack Developer</span>
            </p>
            
            <p className="text-gray-600 mt-4">
              <TextGenerateEffect words={bioText} />
            </p>
          
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto text-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
              <Link
                href="/about"
                className="bg-black text-white px-6 py-3 rounded-md w-full sm:w-auto text-center hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right column: Code Block */}
          <div className="order-1 lg:order-2 h-[300px] md:h-[400px] lg:h-[500px] relative flex items-center">
            <div className="w-full transform transition-all duration-300 hover:scale-105 shadow-2xl rounded-lg">
              <CodeBlock
                language="javascript"
                filename="developer.js"
                code={sampleCode}
                highlightLines={[1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 14]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;