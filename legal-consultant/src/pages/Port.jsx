
const Port = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="border-b-8 border-[#fdd14d] border-double sm:w-2/4 w-11/12 mx-auto pb-3 text-center text-gray-600 cor text-5xl mb-[-50px] font-bold">
        <span className="text-[#fdd14d]">Our</span> Portfolio
        <br className="hidden sm:block" />
        Selfies Wayfarers
      </h1>
      <div className="container px-5 py-24 mx-auto" >
        <div className="flex sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 sm:flex-row flex-col" >
          <div className="p-4 md:w-1/3 flex rounded-tl-lg  bg-[#FFF2CC] m-4" data-aos="flip-left">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFF2CC] text-[#fdd14d] mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6 ">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2 cor">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base dm">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a className="mt-3 text-[#fdd14d] inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex rounded-tr-lg bg-[#FFF2CC] m-4" data-aos="flip-right">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFF2CC] text-[#fdd14d] mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6 ">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2 cor">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base dm">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a className="mt-3 text-[#fdd14d] inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex rounded-bl-lg bg-[#FFF2CC] m-4" data-aos="flip-left">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFF2CC] text-[#fdd14d] mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-6 ">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2 cor">
                Neptune
              </h2>
              <p className="leading-relaxed text-base dm">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a className="mt-3 text-[#fdd14d] inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Port;
