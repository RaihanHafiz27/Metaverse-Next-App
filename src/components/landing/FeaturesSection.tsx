// import Image from "next/image";

// const featuresData = [
//   {
//     title: "Virtual Reality",
//     description:
//       "Explore virtual worlds and the exciting Future of Technology.",
//     icon: "/icons/virtual-reality.png",
//   },
//   {
//     title: "Social Media",
//     description: "Access to various social media easily and securely.",
//     icon: "/icons/social-media.png",
//   },
//   {
//     title: "Artificial Intelligence",
//     description: "Work and Play in an AI-assisted virtual world.",
//     icon: "/icons/ai.png",
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="h-screen flex items-center justify-center border-2 border-pink-600">
//       <div className="w-4/5 justify-center items-center flex border border-slate-200">
//         <div
//           data-aos="fade-right"
//           className="w-1/2 border border-pink-500 flex justify-center items-center"
//         >
//           <Image
//             src="/images/vr.png"
//             alt="Logo"
//             className="w-1/2 h-auto rounded-lg"
//             width={1000}
//             height={1000}
//           />
//         </div>
//         <div className="w-1/2 border border-pink-500">
//           <h2
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             className="text-xl font-bold text-cyan-400"
//           >
//             Metaverse 3D World
//           </h2>
//           <p
//             data-aos="fade-up"
//             data-aos-duration="1500"
//             className="text-slate-200 mt-2 mb-4 text-2xl font-semibold"
//           >
//             Explore the virtual world with Future Technology.
//           </p>
//           <div className="text-slate-200">
//             {featuresData.map((feature, index) => (
//               <span className="flex my-6" key={index}>
//                 <Image
//                   data-aos="fade-up"
//                   data-aos-duration="2000"
//                   src={feature.icon}
//                   alt="Logo"
//                   className="w-12 h-auto"
//                   width={500}
//                   height={500}
//                 />
//                 <div className="ml-4">
//                   <p
//                     data-aos="fade-up"
//                     data-aos-duration="2000"
//                     className="text-lg font-bold text-cyan-400"
//                   >
//                     {feature.title}
//                   </p>
//                   <p
//                     data-aos="fade-up"
//                     data-aos-duration="2500"
//                     className="font-light"
//                   >
//                     {feature.description}
//                   </p>
//                 </div>
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const featuresData = [
  {
    title: "Virtual Reality",
    description:
      "Explore virtual worlds and the exciting Future of Technology.",
    icon: "/icons/virtual-reality.png",
  },
  {
    title: "Social Media",
    description: "Access to various social media easily and securely.",
    icon: "/icons/social-media.png",
  },
  {
    title: "Artificial Intelligence",
    description: "Work and Play in an AI-assisted virtual world.",
    icon: "/icons/ai.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-10 lg:pt-0">
      <div className="w-11/12 lg:w-4/5 flex flex-col lg:flex-row justify-center items-center ">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
        >
          <Image
            src="/images/vr.png"
            alt="Virtual Reality"
            className="w-2/3 h-auto rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl font-bold text-cyan-400"
          >
            Metaverse 3D World
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-slate-200 mt-2 mb-4 text-2xl font-semibold"
          >
            Explore the virtual world with Future Technology.
          </p>
          <div className="text-slate-200">
            {featuresData.map((feature, index) => (
              <span className="flex items-start my-6" key={index}>
                <Image
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-auto"
                  width={500}
                  height={500}
                />
                <div className="ml-4">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="text-lg font-bold text-cyan-400"
                  >
                    {feature.title}
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="font-light"
                  >
                    {feature.description}
                  </p>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
