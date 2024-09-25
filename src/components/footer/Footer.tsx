import Image from "next/image";
import Link from "next/link";

const dataContact = [
  {
    id: 1,
    image: "/icons/facebook.png",
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    image: "/icons/instagram.png",
    link: "https://www.instagram.com",
  },
  {
    id: 3,
    image: "/icons/tiktok.png",
    link: "https://www.twitter.com",
  },
  {
    id: 4,
    image: "/icons/linkedin.png",
    link: "https://www.discord.com",
  },
  {
    id: 5,
    image: "/icons/twitter.png",
    link: "https://www.tiktok.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-transparent  flex flex-col items-center p-4">
      <div className="text-slate-200 w-full max-w-6xl ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="flex justify-center md:justify-start items-center mb-2">
              <Image
                className="w-8 h-8 lg:w-14 lg:h-14"
                src="/images/logo-1.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent ml-2">
                MyApp
              </h2>
            </div>
            <p className="my-4 text-center md:text-start text-sm lg:text-base">
              MyApp adalah situs web terbaik yang menyediakan layanan terbaik
              untuk semua kebutuhan kamu di dunia virtual dengan teknologi masa
              depan.
            </p>
          </div>
          <div className="flex justify-between md:justify-evenly w-full md:w-1/2">
            <div>
              <h2 className="text-base lg:text-lg font-semibold mb-2">
                Jelajahi
              </h2>
              <ul className="text-sm">
                <li>Marketplace</li>
                <li>About</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base lg:text-lg font-semibold mb-2">
                Bantuan
              </h2>
              <ul className="text-sm">
                <li>Syarat & Ketentuan</li>
                <li>Kebijakan Privasi</li>
                <li>EULA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-2 py-2">
          <div className="text-sm lg:text-base w-full md:w-1/2 mb-4 md:mb-0 tracking-wider">
            <p className="font-bold mb-2">
              LordVincent@gmail.com | +62 813-1234-1234
            </p>
            <p>MyApp Jl. Kenangan Indah 2, Gg Sutoyo 123, Bekasi 17425</p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <ul className="flex">
              {dataContact.map((item) => (
                <li
                  key={item.id}
                  className="mx-2 filter grayscale hover:grayscale-0 transition duration-500 hover:-translate-x-2 hover:-translate-y-2"
                >
                  <Link href={item.link}>
                    <Image
                      className="w-14 h-14"
                      src={item.image}
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center text-slate-400 my-4">
          © 2024 MyApp. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
