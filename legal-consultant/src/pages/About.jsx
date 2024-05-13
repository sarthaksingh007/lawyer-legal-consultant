import "./../pages/about.css";
import about from "./../assets/about1.jpg";
import about1 from "./../assets/about2.jpg";
const About = () => {
  return (
    <>
      <h1 className="border-b-8 my-8 border-[#fdd14d] border-double sm:w-2/4 w-11/12 mx-auto pb-3 text-center text-gray-600 cor text-6xl  font-bold ">
        <span className="text-[#fdd14d]">A</span>bout{" "}
        <span className="text-[#fdd14d]">U</span>s
      </h1>
      <div className="we-are-block">
        <div id="about-us-section">
          <div
            className="about-us-image"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img src={about} width="808" height="458" alt="Lobby Image" />
          </div>

          <div className="about-us-info">
            <h2 className="border-b-8 border-[#fdd14d] border-double  sm:w-11/12 w-full mx-auto pb-3 text-center text-gray-600 cor text-6xl mb-4 font-bold">
              We are Digital Upgrade
            </h2>

            <p className="dm text-justify text-white" data-aos="zoom-out-right">
              Digital Upgrade, located in Evansville, IN, makes it easy for
              businesses to create and manage their digital presence and
              logistics, meaning we can make your business more efficient and
              profitable! We believe in our community and want to help our local
              business economy grow and expand. We believe in our clients, and
              want to assist in their digital success. The D-UP team grades
              ourselves on outcomes, not on sales.
            </p>

            <a href="#" title="About Us Button dm">
              ABOUT US
            </a>
          </div>
        </div>

        <div id="history-section">
          <div
            className="history-image"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={about1} width="951" height="471" alt="Building Pic" />
          </div>

          <div className="history-info">
            <h2 className="border-b-8 border-[#fdd14d] border-double  sm:w-11/12 w-full mx-auto pb-3 text-center text-gray-600 cor text-6xl mb-4 font-bold">
              Preserving Local History
            </h2>

            <p className="dm text-justify" data-aos="zoom-out-right">
              In 2018, technology companies, Desktop Doctors & Digital Upgrade
              found a new place to call home, at 816 N. 9th Ave. Since the
              takeover of the 118-year-old building (formally Stippler Tool &
              Supply and Crown Chair Company), there have been many renovations
              completed to preserve this local piece of Evansville, IN history.
            </p>

            <a href="#" title="History Button dm">
              CHECK IT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
