import React from "react";
const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute  inset-0 bg-[#312c1c]">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }} // Corrected style attribute
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex" data-aos="zoom-out-right">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="border-b-8 border-[#fdd14d] border-double sm:w-3/4 w-11/12 mx-auto pb-3 text-center text-gray-600 cor text-5xl mb-3 font-bold">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 cor font-bold">
              Expert Guidance, Personalized Solutions: Connect with Our Legal
              Team Today, Your Legal Journey Starts Here: Reach Out for Trusted
              Counsel
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 cor font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full cor font-bold bg-white rounded border border-[#fdd14d] focus:border-[#fdd14d] focus:ring-2 focus:ring-[#fdd14d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 cor font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full cor font-bold bg-white rounded border border-[#fdd14d] focus:border-[#fdd14d] focus:ring-2 focus:ring-[#fdd14d] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-[#fdd14d] bg-white  py-2 px-6 focus:outline-none hover:text-white  border-[#fdd14d] border-2 hover:bg-[#fdd14d] rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3 cor font-bold">
              Tailored Legal Solutions Just a Click Away: Contact Us Now
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
