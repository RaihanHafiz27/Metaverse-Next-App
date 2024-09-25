"use client";
import Image from "next/image";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hehe: React.FC = () => {
  const [doneTyping, setDoneTyping] = useState(false);
  return (
    <section className="h-screen w-full flex items-center justify-center border-2 border-pink-600">
      <div className="flex flex-col lg:flex-row border-2 border-white w-full lg:w-4/5 p-4">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-start w-full lg:w-1/2"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-slate-200">
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
          <p className="my-5 text-slate-400 text-sm md:text-base">
            Explore the world of technology with the highly advanced Future of
            Technology from start <br /> to finish with your friends.
          </p>
          <button className="relative inline-block px-6 md:px-8 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-md hover:translate-y-1 focus:outline-none">
            <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></span>
            <span className="relative z-10 mr-2">Contact us</span>
            <svg
              className="absolute right-1 top-3 w-6 h-6 text-white transition-transform duration-300 transform hover:translate-x-1"
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
        <div
          data-aos="fade-left"
          className="flex justify-center w-full lg:w-1/2 mt-5 lg:mt-0"
        >
          <Image
            src="/images/home-1.jpg"
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

export default Hehe;
