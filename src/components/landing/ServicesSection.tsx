// import Image from "next/image";

// const featuresData = [
//   {
//     title: "Virtual Training",
//     description:
//       "Jelajahi dunia virtual dengan Masa Depan Teknologi yang menyenangkan",
//     icon: "/icons/service.png",
//   },
//   {
//     title: "24 Hours Online Service",
//     description: "Akses ke berbagai media sosial yang mudah dan menyenangkan",
//     icon: "/icons/service-1.png",
//   },
//   {
//     title: "Cloud Service",
//     description: "Bekerja dan Bermain di dunia virtual yang dibimbing oleh AI",
//     icon: "/icons/service-2.png",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="h-screen flex items-center justify-center border-2 border-pink-600">
//       <div className="flex justify-center items-center border-2 border-white w-4/5">
//         <div className="w-1/2 border border-pink-500">
//           <span
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             className="flex text-xl font-bold text-cyan-400"
//           >
//             <Image
//               src="/images/logo-1.png"
//               alt="Logo"
//               className="w-14 h-auto"
//               width={1000}
//               height={1000}
//             />
//             <p>
//               3D World <br />
//               Virtual Comunication{" "}
//             </p>
//           </span>
//           <p
//             data-aos="fade-up"
//             data-aos-duration="1500"
//             className="text-slate-200 mt-2 mb-4 text-2xl font-semibold"
//           >
//             Jelajahi dunia virtual dengan Teknologi Masa Depan.
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
//         <div
//           data-aos="fade-left"
//           className="flex justify-center items-center w-1/2"
//         >
//           <Image
//             src="/images/robot.png"
//             alt="Logo"
//             className="w-4/5 h-auto rounded-lg"
//             width={1000}
//             height={1000}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import Image from "next/image";

const featuresData = [
  {
    title: "Virtual Training",
    description:
      "Jelajahi dunia virtual dengan Masa Depan Teknologi yang menyenangkan",
    icon: "/icons/service.png",
  },
  {
    title: "24 Hours Online Service",
    description: "Akses ke berbagai media sosial yang mudah dan menyenangkan",
    icon: "/icons/service-1.png",
  },
  {
    title: "Cloud Service",
    description: "Bekerja dan Bermain di dunia virtual yang dibimbing oleh AI",
    icon: "/icons/service-2.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center ">
      <div className="container w-11/12 lg:w-4/5 flex flex-col lg:flex-row justify-center items-center ">
        <div className="w-full lg:w-1/2 lg:px-4">
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
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
        >
          <Image
            src="/images/robot.png"
            alt="Virtual Reality"
            className="w-2/3 h-auto rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
