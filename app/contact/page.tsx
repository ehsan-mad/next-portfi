import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <div className="w-full md:w-[1900px] h-[300px] md:h-[600px]">
          <iframe
            src="https://my.spline.design/robotinteractiveevents-e9f18bb7007b102dc1d9470f105e1b2f/"
            className="w-full h-full border-none rounded-lg"
          ></iframe>
        </div>
      </div>

      <section className="py-16 bg-gray-50 mb-0">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-blue-500 font-medium mb-2">Get in Touch</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Feel free to reach out for collaborations, job opportunities, or
            just to say hello!
          </p>

          {/* Contact Grid  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone  */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <span className="text-blue-500 text-3xl">📞</span>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">
                  <a
                    href="tel:+8801531540639"
                    className="text-blue-500 hover:underline"
                  >
                    +880 1531 540 639
                  </a>
                </p>
              </div>
            </div>

            {/* Email  */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <span className="text-blue-500 text-3xl">📧</span>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:saadkhan420000@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    saadkhan420000@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location  */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <span className="text-blue-500 text-3xl">📍</span>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  Location
                </h3>
                <p className="text-gray-600">
                  27/7/1 East Madartek, Adorshopara, Dhaka
                </p>
              </div>
            </div>

            {/* LinkedIn  */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <span className="text-blue-500 text-3xl">🔗</span>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  LinkedIn
                </h3>
                <p className="text-gray-600">
                  <a
                    href="https://www.linkedin.com/in/ehsan-abdullah-khan-saad-965b48150/"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    linkedin.com/in/ehsan-abdullah-khan-saad
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form  */}
          <div className="mt-12 w-full mx-auto bg-white p-8 rounded-lg shadow-md mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Send a Message
            </h3>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="mt-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition placeholder:text-gray-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
