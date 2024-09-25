import Image from "next/image";

const dataCard = [
  {
    image: "/images/card-1.jpg",
    title: "Passionate People",
    animation: "flip-left",
    duration: 3000,
  },
  {
    image: "/images/card-2.jpg",
    title: "Powerful Mission",
    animation: "flip-left",
    duration: 3000,
  },
  {
    image: "/images/card-3.jpg",
    title: "Building a Better Tomorrow",
    animation: "flip-left",
    duration: 3000,
  },
  {
    image: "/images/card.jpg",
    title: "University Collaboration",
    animation: "flip-left",
    duration: 3000,
  },
  {
    image: "/images/metaverse-3.jpg",
    title: "Excellence & Integrity",
    animation: "flip-left",
    duration: 3000,
  },
  {
    image: "/images/metaverse-1.jpg",
    title: "Government Support",
    animation: "flip-left",
    duration: 3000,
  },
];

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center h-screen border border-pink-500">
      <div className="w-4/5 flex flex-col justify-center items-center border border-green-300">
        <h2 className="text-3xl font-bold text-slate-200">About Us</h2>
        <p className="text-slate-400 text-center my-8">
          MyApp merupakan sebuah platform interaksi virtual, di mana pengguna
          dapat berinteraksi, berkolaborasi, dan berkreasi dengan lingkungan
          digital yang mendukung. Layaknya dunia sungguhan, MyApp memiliki
          beragam environment yang dapat berkembang sesuai dengan kebutuhan
          pengguna.
        </p>
        <div className="border border-white w-full flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4 ">
            {dataCard.map((item, index) => (
              <div
                data-aos={item.animation}
                data-aos-duration={item.duration}
                data-aos-delay={index * 300}
                className="relative border border-pink-500 max-w-lg h-80"
                key={index}
              >
                <Image
                  className="w-full h-full object-cover rounded-md"
                  src={item.image}
                  alt="Logo"
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-blue-500 to-transparent"></div>
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <h3 className="text-2xl font-semibold text-slate-200">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
