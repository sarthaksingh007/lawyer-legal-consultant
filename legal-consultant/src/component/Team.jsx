import Img1 from "./../assets/im1.jpg";
import Img2 from "./../assets/im2.jpg";
import Img3 from "./../assets/im3.jpg";
import Img4 from "./../assets/im4.jpg";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
const Team = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="flex flex-col text-center w-full mt-16">
        <h1 className="border-b-8 border-[#fdd14d] border-double sm:w-2/4 w-11/12 mx-auto pb-3 text-center text-gray-600 cor text-6xl  font-bold">
          <span className="text-[#fdd14d]">O</span>UR{" "}
          <span className="text-[#fdd14d]">T</span>EAM
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-8 dm">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably
          haven`&rsquo;t heard of them.
        </p>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-4 border-[#fdd14d] rounded-xl">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg sm:w-48 sm:h-48 w-96 h-96 object-cover object-center sm:mb-0 mb-4"
                src={Img1}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Sarthak Raj
                </h2>
                <h3 className="text-gray-500 mb-3">Senior Advisor</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <SlSocialFacebook className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialLinkedin className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialInstagram className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <RiTwitterXLine className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-4 border-[#fdd14d] rounded-xl">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg sm:w-48 sm:h-48 w-96 h-96 object-cover object-center sm:mb-0 mb-4"
                src={Img2}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Amit Singh
                </h2>
                <h3 className="text-gray-500 mb-3">Senior Advocate</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <SlSocialFacebook className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialLinkedin className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialInstagram className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <RiTwitterXLine className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-4 border-[#fdd14d] rounded-xl">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg sm:w-48 sm:h-48 w-96 h-96 object-cover object-center sm:mb-0 mb-4"
                src={Img3}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Suresh Khanna
                </h2>
                <h3 className="text-gray-500 mb-3">Contracts lawyer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <SlSocialFacebook className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialLinkedin className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialInstagram className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <RiTwitterXLine className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-4 border-[#fdd14d] rounded-xl">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg sm:w-48 sm:h-48 w-96 h-96 object-cover object-center sm:mb-0 mb-4"
                src={Img4}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Rajan Nath
                </h2>
                <h3 className="text-gray-500 mb-3">Senior Clerk</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  itaque recusandae doloribus exercitationem beatae sed quas
                  debi.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <SlSocialFacebook className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialLinkedin className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <SlSocialInstagram className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <RiTwitterXLine className="text-xl font-bold cor hover:text-[#fdd14d]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
