// import Image from "next/image";

// const DataReview = [
//   {
//     id: 1,
//     name: "Alice Thompson",
//     job: "Designer",
//     image: "/images/woman-1.png",
//     review:
//       "The metaverse world here is mind-blowing! I can truly immerse myself and connect with people in ways I never thought possible.",
//     animation: "fade-down-right",
//     duration: 1500,
//   },
//   {
//     id: 2,
//     name: "Michael Rivera",
//     job: "Artist",
//     image: "/images/woman-2.png",
//     review:
//       "The graphics and user experience are next level. It feels like I'm part of a living, breathing digital universe",
//     animation: "fade-down",
//     duration: 2000,
//   },
//   {
//     id: 3,
//     name: "Sophia Nguyen",
//     job: "Student",
//     image: "/images/woman-3.png",
//     review:
//       "I love how easy it is to build and customize my own space. It's like creating a personal dream world!",
//     animation: "fade-down",
//     duration: 2000,
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     job: "Developer",
//     image: "/images/man.png",
//     review:
//       "The social interaction features are amazing. It’s so much fun to meet new people and explore together.",
//     animation: "fade-down",
//     duration: 2000,
//   },
//   {
//     id: 5,
//     name: "Emma Patel",
//     job: "Real Estate Agent",
//     image: "/images/woman-4.png",
//     review:
//       "I’ve tried several virtual platforms, but nothing comes close to the immersion and detail offered here.",
//     animation: "fade-down-left",
//     duration: 1500,
//   },
//   {
//     id: 6,
//     name: "James Martinez",
//     job: "Product Manager",
//     image: "/images/man-1.png",
//     review:
//       "The metaverse world here is mind-blowing! I can truly immerse myself and connect with people in ways I never thought possible.",
//     animation: "fade-up-right",
//     duration: 1500,
//   },
//   {
//     id: 7,
//     name: "Isabella Lee",
//     job: "Doctor",
//     image: "/images/woman-5.png",
//     review:
//       "A perfect blend of creativity and technology. I never knew a metaverse could feel this alive!",
//     animation: "fade-up",
//     duration: 2000,
//   },
//   {
//     id: 8,
//     name: "William Johnson",
//     job: "Builder",
//     image: "/images/man-3.png",
//     review:
//       "It’s a virtual escape like no other. Whether for work or play, I spend hours here every day.",
//     animation: "fade-up",
//     duration: 2000,
//   },
//   {
//     id: 9,
//     name: "Olivia Smith",
//     job: "UI/UX Designer",
//     image: "/images/woman-6.png",
//     review:
//       "The community is super welcoming and creative. I’ve made great friends and even collaborated on projects!",

//     animation: "fade-up",
//     duration: 2000,
//   },
//   {
//     id: 10,
//     name: "Ethan Davis",
//     job: "Software Engineer",
//     image: "/images/man-4.png",
//     review:
//       "I love how easy it is to build and customize my own space. It's like creating a personal dream world!",
//     animation: "fade-up-left",
//     duration: 1500,
//   },
// ];

// const ReviewSection = () => {
//   return (
//     <section className="border-white border h-screen flex flex-col justify-evenly items-center">
//       <div className="text-center">
//         <p
//           data-aos="fade-down"
//           data-aos-duration="1000"
//           className="text-cyan-400"
//         >
//           Testimonial
//         </p>
//         <h2
//           data-aos="zoom-out"
//           data-aos-duration="1000"
//           className="text-4xl my-4 font-bold text-slate-200"
//         >
//           Over 1000+ People trust us
//         </h2>
//         <p
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           className="text-slate-400"
//         >
//           Our community is growing every day, and people are loving <br /> their
//           immersive experiences in our virtual world.
//         </p>
//       </div>
//       <div className="grid grid-cols-5 gap-x-2 gap-y-4 w-4/5 border border-pink-600">
//         {DataReview.map((review, index) => (
//           <div
//             data-aos={review.animation}
//             data-aos-duration={review.duration}
//             key={index}
//             className="max-w-xs bg-gray-200 p-4 rounded-lg "
//           >
//             <span>⭐⭐⭐⭐⭐</span>
//             <p className="text-sm text-justify py-2">
//               {review.review.substring(0, 100)}
//             </p>
//             <div className="flex items-center">
//               <Image
//                 className="rounded-full w-10 h-10"
//                 src={review.image}
//                 alt="Testimonial"
//                 width={100}
//                 height={100}
//               />
//               <div className="ml-4 text-sm">
//                 <p>{review.name}</p>
//                 <p>{review.job}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ReviewSection;

import Image from "next/image";

const DataReview = [
  {
    id: 1,
    name: "Alice Thompson",
    job: "Designer",
    image: "/images/woman-1.png",
    review:
      "The metaverse world here is mind-blowing! I can truly immerse myself and connect with people in ways I never thought possible.",
    animation: "fade-down-right",
    duration: 1500,
  },
  {
    id: 2,
    name: "Michael Rivera",
    job: "Artist",
    image: "/images/woman-2.png",
    review:
      "The graphics and user experience are next level. It feels like I'm part of a living, breathing digital universe",
    animation: "fade-down",
    duration: 2000,
  },
  {
    id: 3,
    name: "Sophia Nguyen",
    job: "Student",
    image: "/images/woman-3.png",
    review:
      "I love how easy it is to build and customize my own space. It's like creating a personal dream world!",
    animation: "fade-down",
    duration: 2000,
  },
  {
    id: 4,
    name: "David Kim",
    job: "Developer",
    image: "/images/man.png",
    review:
      "The social interaction features are amazing. It’s so much fun to meet new people and explore together.",
    animation: "fade-down",
    duration: 2000,
  },
  {
    id: 5,
    name: "Emma Patel",
    job: "Real Estate Agent",
    image: "/images/woman-4.png",
    review:
      "I’ve tried several virtual platforms, but nothing comes close to the immersion and detail offered here.",
    animation: "fade-up-right",
    duration: 1500,
  },
  {
    id: 6,
    name: "James Martinez",
    job: "Product Manager",
    image: "/images/man-1.png",
    review:
      "The metaverse world here is mind-blowing! I can truly immerse myself and connect with people in ways I never thought possible.",
    animation: "fade-up-right",
    duration: 1500,
  },
  {
    id: 7,
    name: "Isabella Lee",
    job: "Doctor",
    image: "/images/woman-5.png",
    review:
      "A perfect blend of creativity and technology. I never knew a metaverse could feel this alive!",
    animation: "fade-up",
    duration: 2000,
  },
  {
    id: 8,
    name: "William Johnson",
    job: "Builder",
    image: "/images/man-3.png",
    review:
      "It’s a virtual escape like no other. Whether for work or play, I spend hours here every day.",
    animation: "fade-up",
    duration: 2000,
  },
  {
    id: 9,
    name: "Olivia Smith",
    job: "UI/UX Designer",
    image: "/images/woman-6.png",
    review:
      "The community is super welcoming and creative. I’ve made great friends and even collaborated on projects!",
    animation: "fade-down-left",
    duration: 2000,
  },
  {
    id: 10,
    name: "Ethan Davis",
    job: "Software Engineer",
    image: "/images/man-4.png",
    review:
      "I love how easy it is to build and customize my own space. It's like creating a personal dream world!",
    animation: "fade-down-left",
    duration: 1500,
  },
  {
    id: 11,
    name: "Ava Wilson",
    job: "Photographer",
    image: "/images/woman.png",
    review:
      "I’ve tried several virtual platforms, but nothing comes close to the immersion and detail offered here.",
    animation: "fade-down-right",
    duration: 1500,
  },
  {
    id: 12,
    name: "Ava Wilson",
    job: "Photographer",
    image: "/images/man-2.png",
    review:
      "I’ve tried several virtual platforms, but nothing comes close to the immersion and detail offered here.",
    animation: "fade-down-right",
    duration: 1500,
  },
];

const ReviewSection = () => {
  return (
    <section className=" min-h-screen w-full flex flex-col justify-evenly items-center overflow-x-hidden">
      <div className="container w-11/12 text-center mb-8">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-cyan-400"
        >
          Testimonial
        </p>
        <h2
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="text-2xl lg:text-4xl my-4 font-bold text-slate-200"
        >
          Over 1000+ People trust us
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-sm lg:text-base text-slate-400"
        >
          Our community is growing every day, and people are loving <br /> their
          immersive experiences in our virtual world.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-11/12 mx-auto px-4 lg:px-0">
        {DataReview.map((review) => (
          <div
            data-aos={review.animation}
            data-aos-duration={review.duration}
            key={review.id}
            className="bg-gray-200 p-4 rounded-lg flex flex-col justify-between"
          >
            <span>⭐⭐⭐⭐⭐</span>
            <p className="text-sm text-justify py-2">
              {review.review.substring(0, 100)}...
            </p>
            <div className="flex items-center mt-4">
              <Image
                className="rounded-full w-10 h-10 max-w-full"
                src={review.image}
                alt="Testimonial"
                width={100}
                height={100}
              />
              <div className="ml-4 text-sm">
                <p>{review.name}</p>
                <p>{review.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
