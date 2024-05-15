import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../assets/sup.jpg"
import img2 from "./../assets/about2.jpg"
import img3 from "./../assets/court.jpg"
import img4 from "./../assets/im4.jpg"
import img5 from "./../assets/im1.jpg"
import img6 from "./../assets/im2.jpg"
import img7 from "./../assets/im3.jpg"
import img8 from "./../assets/sup.jpg"
import img9 from "./../assets/im4.jpg"
import img10 from "./../assets/laww.jpg"

const servicesData = [
  {
    id: 1,
    imageSrc: img1,
    subtitle: "SUBTITLE",
    title: "Legal Consultation",
    description:
      "Get expert legal advice for your business or personal matters.",
  },
  {
    id: 2,
    imageSrc: img2,
    subtitle: "SUBTITLE",
    title: "Contract Review",
    description:
      "Have your contracts reviewed and optimized by legal professionals.",
  },
  {
    id: 3,
    imageSrc: img3,
    subtitle: "SUBTITLE",
    title: "Intellectual Property",
    description:
      "Protect your intellectual property rights with our comprehensive services.",
  },
  {
    id: 4,
    imageSrc: img4,
    subtitle: "SUBTITLE",
    title: "Legal Documentation",
    description: "Draft and review legal documents with ease and accuracy.",
  },
  {
    id: 5,
    imageSrc: img5,
    subtitle: "SUBTITLE",
    title: "Litigation Support",
    description:
      "Receive professional support in legal proceedings and litigation matters.",
  },
  // Add more data
  {
    id: 6,
    imageSrc: img6,
    subtitle: "SUBTITLE",
    title: "Corporate Law",
    description:
      "Navigate complex corporate legal matters with confidence and expertise.",
  },
  {
    id: 7,
    imageSrc: img7,
    subtitle: "SUBTITLE",
    title: "Real Estate Law",
    description:
      "Ensure smooth transactions and mitigate risks in real estate ventures.",
  },
  {
    id: 8,
    imageSrc: img8,
    subtitle: "SUBTITLE",
    title: "Employment Law",
    description:
      "Protect your rights and interests as an employer or employee.",
  },
  {
    id: 9,
    imageSrc: img9,
    subtitle: "SUBTITLE",
    title: "Family Law",
    description: "Resolve family matters with compassion and legal expertise.",
  },
  {
    id: 10,
    imageSrc: img10,
    subtitle: "SUBTITLE",
    title: "Immigration Law",
    description:
      "Navigate the complexities of immigration law with professional assistance.",
  },
];

const Service = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap w-full mt-16 p-4">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="border-b-8 border-[#fdd14d] border-double  w-11/12 mx-auto pb-3 text-center text-gray-600 cor text-6xl  font-bold">
            Services By LawArt
          </h1>
          {/* <div className="h-1 w-20 bg-yellow-500 rounded"></div> */}
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dm">
          Crafting legal solutions with finesse, we redefine the boundaries of
          justice. Your compass in the legal labyrinth, guiding you towards
          clarity and resolution. From intricate contracts to complex
          litigation, we navigate with expertise and integrity. Trust us to
          safeguard your rights and champion your cause with unwavering
          dedication. Where law meets excellence, we stand as your steadfast
          ally.
        </p>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service) => (
            <div key={service.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#F4B183] p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={service.imageSrc}
                  alt="content"
                />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font cor">
                  {service.subtitle}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 cor">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-base dm">
                  {service.description}
                </p>
                <Link className="dm text-[#392f12] font-bold" to={`/learn-more/${service.id}`}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
