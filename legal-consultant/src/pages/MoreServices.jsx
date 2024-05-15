// import React from "react";

// const MoreServices = () => {
//   return (
//     <div>
//       <section>
//         <h1>Heading</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet
//           architecto illum inventore, id voluptate nam dolor est vero distinctio
//           quod sapiente dolore ad, cupiditate enim! Tempore laborum ab
//           reprehenderit sunt animi sed quo, fugiat tenetur in minima eveniet
//           accusamus, asperiores, unde dolore!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet
//           architecto illum inventore, id voluptate nam dolor est vero distinctio
//           quod sapiente dolore ad, cupiditate enim! Tempore laborum ab
//           reprehenderit sunt animi sed quo, fugiat tenetur in minima eveniet
//           accusamus, asperiores, unde dolore!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet
//           architecto illum inventore, id voluptate nam dolor est vero distinctio
//           quod sapiente dolore ad, cupiditate enim! Tempore laborum ab
//           reprehenderit sunt animi sed quo, fugiat tenetur in minima eveniet
//           accusamus, asperiores, unde dolore!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet
//           architecto illum inventore, id voluptate nam dolor est vero distinctio
//           quod sapiente dolore ad, cupiditate enim! Tempore laborum ab
//           reprehenderit sunt animi sed quo, fugiat tenetur in minima eveniet
//           accusamus, asperiores, unde dolore!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet
//           architecto illum inventore, id voluptate nam dolor est vero distinctio
//           quod sapiente dolore ad, cupiditate enim! Tempore laborum ab
//           reprehenderit sunt animi sed quo, fugiat tenetur in minima eveniet
//           accusamus, asperiores, unde dolore!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet
//           architecto illum inventore, id voluptate nam dolor est vero distinctio
//           quod sapiente dolore ad, cupiditate enim! Tempore laborum ab
//           reprehenderit sunt animi sed quo, fugiat tenetur in minima eveniet
//           accusamus, asperiores, unde dolore!
//         </p>
//       </section>
//     </div>
//   );
// };

// export default MoreServices;

// LearnMorePage.js

import { useParams } from "react-router-dom";
import servicesData from "./../serviceData.js"; // Import your services data

const MoreServices = () => {
  const { id } = useParams();

  // Find the service data based on the ID
  const service = servicesData.find((service) => service.id === parseInt(id));
  console.log(service, id, "values");

  return (
    <div>
      <div className="service-details">
        <h1 className="border-b-8 border-[#fdd14d] border-double  w-11/12 mx-auto pb-3 text-center text-gray-600 cor text-6xl  font-bold">
          {service.title}
        </h1>
        <div className="flex sm:flex-row flex-col m-6 p-4">
          <img
            data-aos="zoom-out-right"
            className="w-2/5 rounded-3xl p-4"
            src={service.imageSrc}
            alt={service.title}
          />
          <p className="p-4 dm text leading-8 text-justify text-lg">
            {service.description}
          </p>
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default MoreServices;
