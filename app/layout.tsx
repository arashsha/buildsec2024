"use client";
import "./global.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "./components/Footer";
import { Navbar } from "./components/Nav";

import { useState } from "react";
import Sponsorship from './components/Sponsorship'; // import the Sponsorship component
import sponsorshipData from './data/sponsorship.json'; // import the sponsorship data

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <html
      lang="en"
      className={cx(
        "text-black dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased w-full h-full">
        {/* Uncomment if banner is needed */}
        {/* <div className='banner'>
          <p>Industry day position paper submission date is extended till 18th May 2024, 11:59PM AoE.</p>
        </div> */}
        <div className="md:flex md:flex-row md:justify-between min-h-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-5 h-5 absolute top-6 left-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#000"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          {/* <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} /> */}
          {/* Uncomment if sidebar is needed */}
          {/* <div className="w-1/4 bg-black text-white px-10 pt-16">
            <nav className="fixed">
              <ul>
                <li><a href="#key-dates">Key Dates</a></li>
                <li><a href="#registration">Registration</a></li>
                <li><a href="#venue">Venue</a></li>
              </ul>
            </nav>
          </div> */}
          {/* <div className="md:w-1/5 md:bg-black md:text-white md:px-10 md:pt-16"> */}
          {/* <div className={`${
        isMenuOpen ? "block" : "hidden"
      } md:block flex-grow bg-gray-100 px-4 md:px-10 dark:bg-neutral-900 text-black dark:text-white tracking-normal transition-all ease-in-out duration-150 min-h-screen max-h-full z-50 md:z-0 whitespace-nowrap`}> */}
          <div
            className={`${isMenuOpen ? "fixed" : "hidden"}
        bg-gray-100 px-10 min-h-screen pt-10 w-full md:w-80 md:block dark:bg-neutral-900 dark:text-white tracking-normal transition-all ease-in-out duration-150`}
          >
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
          </div>
          <main className={`${isMenuOpen ? "hidden" : "block"}
            md:flex-grow pt-10 flex flex-col min-h-full md:w-full md:min-h-screen`}>
            {/* <main className="w-full md:w-full md:ml-80 pt-10 flex flex-col min-h-full md:z-40"> */}
            <Sponsorship data={sponsorshipData} /> 
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
