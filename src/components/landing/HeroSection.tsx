// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Typewriter } from "react-simple-typewriter";

// const HeroSection: React.FC = () => {
//   const [doneTyping, setDoneTyping] = useState(false);
//   return (
//     <section className="h-screen flex items-center justify-center border-2 border-pink-600">
//       <div className="flex border-2 border-white w-4/5">
//         <div
//           data-aos="fade-right"
//           className="w-1/2  flex flex-col justify-center items-start"
//         >
//           <h1 className="text-5xl font-bold text-slate-200">
//             {!doneTyping ? (
//               <>
//                 <Typewriter
//                   words={[
//                     "The future of the world is in our hands.",
//                     "The future of technology is in our hands.",
//                   ]}
//                   loop={1} // Specify that it should loop only once
//                   cursor={true} // Show cursor
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                   onLoopDone={() => setDoneTyping(true)} // Trigger when loop is done
//                 />
//               </>
//             ) : (
//               // Show final text after typing is done
//               "The future of technology is in our hands."
//             )}
//           </h1>
//           <p className="my-5 text-slate-400">
//             Explore the world of technology with the highly advanced Future of
//             Technology from start <br /> to finish with your friends.
//           </p>
//           <button className="relative inline-block px-8 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-md hover:translate-y-1 focus:outline-none">
//             <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></span>
//             <span className="relative z-10 mr-2">Contact us</span>
//             <svg
//               className="absolute right-1 top-3 w-6 h-6 text-white transition-transform duration-300 transform hover:translate-x-1"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8 12h8m-4-4l4 4-4 4"
//               />
//             </svg>
//           </button>

//           {/* <button className="bg-cyan-500 text-slate-200 px-6 py-2 rounded-md">
//             Contact us
//           </button> */}
//         </div>
//         <div data-aos="fade-left" className="w-1/2 flex justify-end">
//           <Image
//             src="/images/home-1.jpg"
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

// export default HeroSection;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection: React.FC = () => {
  const [doneTyping, setDoneTyping] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update mouse position on mouse move
  const handleMouseMove = (event: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (event.clientX - innerWidth / 2) / (innerWidth / 2);
    const offsetY = (event.clientY - innerHeight / 2) / (innerHeight / 2);

    setMousePos({ x: offsetX, y: offsetY });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getParallaxValue = (offset: number, factor: number) => {
    return offset * factor * 15; // Adjust sensitivity for smoother movement
  };

  return (
    <section
      className="h-screen w-full flex items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage: `url("/images/bg.jpg")`, // Ganti dengan URL gambar latar belakang
        backgroundPosition: `center ${scrollY * 0.5}px`, // Efek scroll
        backgroundSize: "cover",
        transition: "background-position 0.1s ease-out",
      }}
    >
      <div className="h-auto flex w-11/12 lg:w-4/5 relative flex-col lg:flex-row">
        {/* Left side (Text content) */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex flex-col justify-center items-start"
          style={{
            transform: `translate(${getParallaxValue(
              mousePos.x,
              0.5
            )}px, ${getParallaxValue(mousePos.y, 0.5)}px)`, // Efek mouse move pada teks
            transition: "transform 0.1s ease-out",
            opacity: 1 - scrollY * 0.001,
          }}
        >
          <h1
            className="text-center lg:text-start text-2xl md:text-4xl 2xl:text-5xl font-bold text-slate-200"
            style={{
              transform: `translateY(${scrollY * 0.1}px) scale(${
                1 + scrollY * 0.0005
              })`, // Efek scroll pada teks
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
              opacity: 1 - scrollY * 0.002,
            }}
          >
            {!doneTyping ? (
              <Typewriter
                words={[
                  "The future of the world is in our hands.",
                  "The future of technology is in our hands.",
                ]}
                loop={1}
                cursor={true}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => setDoneTyping(true)}
              />
            ) : (
              "The future of technology is in our hands."
            )}
          </h1>
          <p
            className="my-5 text-slate-400 text-sm md:text-base"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`, // Efek scroll pada teks
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
              opacity: 1 - scrollY * 0.002,
            }}
          >
            Explore the world of technology with the highly advanced Future of
            Technology from start <br /> to finish with your friends.
          </p>
          <button className="mx-auto lg:mx-0 relative inline-block px-6 md:px-8 py-2 md:py-3 font-bold text-white rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-md hover:translate-y-1 focus:outline-none">
            <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></span>
            <span className="relative z-10 mr-2 text-xs md:text-sm">
              Contact us
            </span>
            <svg
              className="absolute right-1 top-2 md:top-3 w-6 h-6 text-white transition-transform duration-300 transform hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h8m-4-4l4 4-4 4"
              />
            </svg>
          </button>
        </div>

        {/* Right side (Image) */}
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-5 lg:mt-0"
          style={{
            transform: `translate(${getParallaxValue(
              mousePos.x,
              -0.3
            )}px, ${getParallaxValue(mousePos.y, -0.3)}px) translateY(${
              scrollY * 0.2
            }px) scale(${1 + scrollY * 0.0008})`, // Efek mouse move pada gambar
            transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
            opacity: 1 - scrollY * 0.0015,
          }}
        >
          <Image
            src="/images/home-1.jpg" // Ganti dengan URL gambar
            alt="Logo"
            className="w-full md:w-4/5 h-auto rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
