
import React from "react";
import Image from "next/image";

const ProjectShowCase = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-100 to-blue-50 py-16 group rounded-lg">
        {/* Background transition overlay */}
        <div className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-indigo-50 to-blue-100 transition-transform duration-500 ease-out group-hover:translate-x-full"></div>

        {/* Content wrapper */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Portfolio Header Section */}
          <div className="text-center mb-12">
            <h3 className="text-blue-500 font-medium mb-2">
              Creative Portfolios
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my diverse portfolio of web development projects showcasing expertise in React, Next.js, and responsive design. Each project demonstrates my commitment to clean code, intuitive user experiences, and innovative solutions.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition">
              <div className="relative">
                <Image
                  src="/bookstore.png"
                  alt="Landing template for startups"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <a
                      href="https://ehsan-mad.github.io/BOOK-Inventory/index.html"
                      className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Admin Dashboard</h3>
                <p className="text-gray-600">BOOK-Inventory</p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition">
              <div className="relative">
                <Image
                  src="/Agency.png"
                  alt="Job search platform"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <a
                      href="https://next-agenw-481uck5li-ehsan-mads-projects.vercel.app/"
                      className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Agency Website</h3>
                <p className="text-gray-600">Next-Agency X made with Next.js</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition">
              <div className="relative">
                <Image
                  src="/ShadcnEcommerce.png"
                  alt="Mobile app interface"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity">
                    <a
                      href="https://ecommte.netlify.app/"
                      className="bg-white text-blue-500 px-4 py-2 rounded-md font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">E-comTech</h3>
                <p className="text-gray-600">
                  React Project with real api calling. Loading data dynamically.
                </p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/ehsan-mad"
              className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowCase;
