import React from "react";

const about = () => {
  return (
    <div>
      <section className="py-40 bg-gray-50 ">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Section  */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="w-full md:w-full h-[300px] md:h-[600px]">
                <iframe
                  src="https://my.spline.design/threehappyeggs-e71e1dde8f65c49326c35a693763293f/"
                  className="w-full h-full border-none rounded-lg"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Text Section  */}
            <div className="w-full md:w-2/3 md:pl-12">
              <h3 className="text-blue-500 font-medium mb-2">About Me</h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                I'm Ehsan, a Passionate FullStack Developer.
              </h2>
              <p className="text-gray-600 mb-4">
                I specialize in Frontend/Backend, with experience in PRAN-RFL
                Group. My journey began in 2024, and since then, I've been
                dedicated to crafting new application throughout the journey.
              </p>
              <p className="text-gray-600 mb-4">
                When I'm not working, you can find me playing games, which
                constantly pushes the boundaries of my creativity.
              </p>

              {/* Highlights  */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-2xl">🚀</span>
                  <p className="text-gray-700 font-medium">Backend</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-2xl">🎨</span>
                  <p className="text-gray-700 font-medium">Frontend</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-2xl">💡</span>
                  <p className="text-gray-700 font-medium">Database</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-2xl">📚</span>
                  <p className="text-gray-700 font-medium">AI</p>
                </div>
              </div>

              {/* Call to Action  */}
              <div className="mt-8">
                <a
                  href="your-cv.pdf"
                  download
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-blue-700 transition"
                >
                  Download CV
                </a>
                <a
                  href="contact.html"
                  className="ml-4 text-blue-600 font-medium hover:underline"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
