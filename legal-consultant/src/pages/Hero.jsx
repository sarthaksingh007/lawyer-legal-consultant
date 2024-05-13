import React from "react";
import Img1 from "./../assets/slider-image.png";
import { FaLocationArrow } from "react-icons/fa6";
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 data-aos="fade-right" className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 cor">
              We Provide 
              <br className="hidden lg:inline-block cor" />
              The Best Possible Legal Services Globally
            </h1>
            <p data-aos="fade-right" className="mb-8 leading-relaxed text-lg dm">
              Vitae auctor eu augue ut lectus arcu. Dictum fusce ut placerat
              orci nulla pellentesque dignissim enim. Enim nunc faucibus a
              pellentesque sit amet porttitor eget dolor.
            </p>
            <div className="flex justify-center">
              <button className=" flex justify-center items-center rounded-xl border-2 border-[#fdd14d] text-[#fdd14d] text-lg p-2 hover:text-white hover:bg-[#fdd14d]">
                Get Started <FaLocationArrow />
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
            data-aos="fade-left"
              className="object-cover object-center rounded"
              alt="hero"
              src={Img1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
