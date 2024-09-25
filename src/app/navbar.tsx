// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Marketplace",
//     href: "/product",
//   },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   return (
//     <nav className="z-50 fixed  w-full bg-transparent">
//       <div className="container  py-3 w-full lg:w-4/5 mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <div className="flex items-center">
//             <Image
//               className="w-8 h-8 lg:w-10 lg:h-10"
//               src="/images/logo-1.png"
//               alt="Logo"
//               width={100}
//               height={100}
//             />
//             <h1 className="font-bold md:text-2xl bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent">
//               MyApp
//             </h1>
//           </div>
//           <div className="lg:flex hidden items-center ml-3">
//             <ul className="flex">
//               {navLinks.map((link, index) => (
//                 <li key={index} className="mx-3">
//                   <Link
//                     href={link.href}
//                     className={`text-xs lg:text-base font-normal ${
//                       pathname === link.href
//                         ? "text-cyan-400 underline underline-offset-8 decoration-inherit decoration-2 "
//                         : "text-slate-200"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {/* Hamburger menu for mobile */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-400 focus:outline-none"
//           >
//             <Image
//               src="/icons/hamburger.png"
//               alt="menu"
//               width={30}
//               height={30}
//             />
//           </button>
//         </div>
//         {/* Button for large screens */}
//         <div className="lg:flex items-center hidden">
//           <p className="mr-3 text-slate-200">Pak Vincent</p>
//           <button className="bg-cyan-500 text-slate-200 px-4 py-2 rounded-md">
//             Login
//           </button>
//         </div>
//       </div>
//       {/* Sidebar menu for mobile */}
//       <div
//         className={`bg-gray-800 w-64 h-full fixed top-0 right-0 transition-transform transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } duration-500 ease-in-out`}
//       >
//         <div className="flex flex-col p-4 text-slate-200">
//           <div className="flex items-center justify-between w-full">
//             <div className="flex items-center">
//               <Image
//                 src="/images/man.png"
//                 alt="profile"
//                 width={30}
//                 height={30}
//                 className="rounded-full w-7 h-7"
//               />
//               <p className="ml-3">Kanna Anissa</p>
//             </div>
//             <button onClick={() => setIsOpen(!isOpen)}>
//               <Image
//                 src="/icons/close.png"
//                 alt="close"
//                 width={30}
//                 height={30}
//               />
//             </button>
//           </div>
//           <ul className=" flex flex-col w-full">
//             {navLinks.map((link, index) => (
//               <li key={index} className="border-b border-gray-600 w-full py-4">
//                 <Link
//                   onClick={() => setIsOpen(!isOpen)}
//                   href={link.href}
//                   className={`${
//                     pathname === link.href ? "text-teal-300" : "text-slate-200"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <button className="bg-cyan-400 text-white px-4 py-2 rounded-md mt-6">
//             Login
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu
//       {isOpen && (
//         <div>
//           <ul>
//             {navLinks.map((link, index) => (
//               <li key={index} className="mx-3">
//                 <Link
//                   href={link.href}
//                   className={`text-xs lg:text-base font-normal ${
//                     pathname === link.href
//                       ? "text-teal-300 underline underline-offset-8 decoration-inherit decoration-2 "
//                       : "text-slate-200"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )} */}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Marketplace",
    href: "/product",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 fixed w-full bg-transparent transition-all duration-300 ${
        scrollY > 0 ? "backdrop-blur-md bg-opacity-30" : ""
      }`}
    >
      <div className="container py-3 w-full lg:w-4/5 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center px-2 lg:px-0">
            <Image
              className="w-8 h-8 lg:w-10 lg:h-10"
              src="/images/logo-1.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h1 className="font-bold md:text-2xl bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text text-transparent">
              MyApp
            </h1>
          </div>
          <div className="lg:flex hidden items-center ml-3">
            <ul className="flex">
              {navLinks.map((link, index) => (
                <li key={index} className="mx-3">
                  <Link
                    href={link.href}
                    className={`text-xs lg:text-base font-normal ${
                      pathname === link.href
                        ? "text-cyan-400 underline underline-offset-8 decoration-inherit decoration-2 "
                        : "text-slate-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center px-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 focus:outline-none"
          >
            <Image
              src="/icons/hamburger.png"
              alt="menu"
              width={30}
              height={30}
            />
          </button>
        </div>
        {/* Button for large screens */}
        <div className="lg:flex items-center hidden">
          {status === "authenticated" ? (
            <>
              <p className="mr-3 text-slate-200">{session?.user?.fullName}</p>
              <button
                className="bg-cyan-500 text-slate-200 px-4 py-2 rounded-md"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-cyan-500 text-slate-200 px-4 py-2 rounded-md"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
      {/* Sidebar menu for mobile */}
      <div
        className={`bg-gray-800 w-64 h-full fixed top-0 right-0 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-500 ease-in-out`}
      >
        <div className="flex flex-col p-4 text-slate-200">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Image
                src="/images/man.png"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full w-7 h-7"
              />
              <p className="ml-3 text-slate-200">{session?.user?.fullName}</p>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/icons/close.png"
                alt="close"
                width={30}
                height={30}
              />
            </button>
          </div>
          <ul className=" flex flex-col w-full">
            {navLinks.map((link, index) => (
              <li key={index} className="border-b border-gray-600 w-full py-4">
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  href={link.href}
                  className={`${
                    pathname === link.href ? "text-teal-300" : "text-slate-200"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" w-full mt-4">
            {status === "authenticated" ? (
              <button
                className="bg-cyan-500 text-slate-200 w-full px-4 py-2 rounded-md"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-cyan-500 text-slate-200 w-full px-4 py-2 rounded-md"
                onClick={() => signIn()}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
