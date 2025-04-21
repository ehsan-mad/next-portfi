
"use client";
import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <div className="w-full md:w-[1900px] h-[300px] md:h-[800px]">
          <iframe
            src="https://my.spline.design/cutecomputerfollowcursor-f7c21f1b837e42f9df6bd691dab25a2a/"
            className="w-full h-full border-none rounded-lg pointer-events-none"
          >
          </iframe>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h3 className="text-blue-500 font-medium mb-2">Skills & Expertise</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">My Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            With extensive experience in full-stack development, I deliver robust solutions using modern technologies.
            My technical expertise spans across multiple domains, allowing me to create scalable and efficient applications.
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Language Skills */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                {/* PHP */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-green-500 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="60"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    80%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">PHP</p>
                </div>

                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-red-500 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="40"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    90%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">Python</p>
                </div>

                {/* JavaScript */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-yellow-500 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="80"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    75%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">JavaScript</p>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                {/* Tailwind CSS */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-blue-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="40"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    85%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">Tailwind</p>
                </div>

                {/* React */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-blue-500 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="20"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    95%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">React</p>
                </div>
              </div>
            </div>

            {/* Backend Frameworks */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                Backend Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                {/* Laravel */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-amber-950 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="60"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    75%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">Laravel</p>
                </div>

                {/* Django */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-violet-500 stroke-current"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="70"
                    ></circle>
                  </svg>
                  <p
                    className="absolute inset-0 flex items-center justify-center text-base md:text-lg font-bold text-black"
                  >
                    70%
                  </p>
                  <p className="mt-1 text-sm md:text-base text-gray-700">Django</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-blue-500 font-medium mb-2">Tech Stack</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Languages & Frameworks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            My development toolkit includes cutting-edge technologies that enable me to build 
            responsive, scalable, and maintainable applications with optimal performance.
          </p>

          {/* Scrolling Logos */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {/* Duplicate logos to create seamless effect */}
              <div className="flex space-x-8">
                {/* PHP */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                    alt="PHP"
                  />
                </div>
                {/* JavaScript */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                  />
                </div>
                {/* HTML */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    alt="HTML"
                  />
                </div>
                {/* CSS */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="CSS"
                  />
                </div>
                {/* Python */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                  />
                </div>
                {/* Tailwind */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="Tailwind"
                  />
                </div>
                {/* Bootstrap */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                    alt="Bootstrap"
                  />
                </div>
                {/* React */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                  />
                </div>
                {/* Next.js */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                  />
                </div>
                {/* Laravel */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                    alt="Laravel"
                  />
                </div>
                {/* Django */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                    alt="Django"
                  />
                </div>

                {/* DUPLICATE SET TO REMOVE THE GAP */}
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                    alt="PHP"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    alt="HTML"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="CSS"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="Tailwind"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                    alt="Bootstrap"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                    alt="Laravel"
                  />
                </div>
                <div className="logo-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                    alt="Django"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tailwind Animation */}
        <style jsx>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 15s linear infinite;
          }
          .logo-card {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 120px;
          }
          .logo-card img {
            max-width: 70%;
            max-height: 70%;
          }
          
          @media (max-width: 640px) {
            .logo-card {
              width: 90px;
              height: 90px;
              padding: 0.75rem;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default ServicesPage;
