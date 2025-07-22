"use client";
import Image from "next/image";
import Link from "next/link";

const LOGO = "/logo_buildsec.png";

const navItems = {
  "/": {
    name: "Home",
  },
    "/program": {
    name: "Program",
  }, 
    "/registration": {
    name: "Registration",
  },
    "/camera-ready": {
    name: "Camera Ready Instructions",
  },
    "/taste-of-research": {
    name: "Taste of Research",
  },
  "/call-for-papers": {
    name: "Call for Papers",
  },
  "/posters": {
    name: "Posters and Doctoral Colloquium",
  },
  "/local_information": {
    name: "Venue & Accommodation",
  },
  "/visa_information": {
    name: "Visa Information",
  },
  "/awards": {
    name: "Awards",
  },
    "/sponsorship": {
    name: "Sponsorship Opportunities",
  },
    "/organisers": {
    name: "Organisers",
  },
    "/#Sponsors": {
    name: "Our Proud Sponsors",
  },
};

export function Navbar({ isMenuOpen, setMenuOpen }) {
  return (
    // <aside
    //   className={`${
    //     isMenuOpen ? "block" : "hidden"
    //   } md:block fixed w-full md:w-1/7 bg-gray-100 px-4 dark:bg-neutral-900 text-black dark:text-white tracking-normal transition-all ease-in-out duration-150 min-h-screen max-h-full z-50 md:z-0 whitespace-nowrap`}
    // >
    // <aside className="md:w-48">
    <aside className="w-45">
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="md:hidden w-5 h-5 absolute top-5 right-5 z-60"
      >
        <svg  
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="#000"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
      {/* <div className="fixed pt-16 h-full w-full  overflow-x-auto"> */}
      <nav
        id="nav"
        className="flex flex-col items-center md:items-start min-h-full fade pt-4 text-wrap overflow-y-auto space-y-4"
        // className="flex flex-col items-start"
      >
        <Image src={LOGO} alt="Logo" width={220} height={55} className="mb-4" />
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all duration-200 font-semibold hover:text-fuchsia-900 align-middle text-xl md:text-base "
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          );
        })}
      </nav>
      {/* </div> */}
    </aside>
  );
}
