// 'use client'
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/utils/mdxParser";
import clsx from "clsx";
import { notFound } from "next/navigation";
import Headinig from "./components/Heading";
import Introduction from "./components/Introduction";
import KeyDates from "./components/KeyDates";
import Schedule from "./components/Schedule";
import Sponsorshipp from "./components/Sponsors";
import Speaker from "./components/Speaker";
import Sponsorship from "./components/Sponsorship";
import Venue from "./components/Venue";
import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import heading from "./data/heading.json";
import introdcution from "./data/introduction.json";
import venue from "./data/venue.json";
import sponsorship from "./data/sponsorship.json";
import Sponsors from "./data/sponsorshipp.json";
import speaker from "./data/speaker.json";
import sessionSchedule from "./data/session-schedule.json";
import keyDates from "./data/key-dates.json";
import Image from "next/image";
import type { Metadata } from "next";
import { baseUrl } from "./sitemap";

const marginValue = 20;
const LOGO = "/logo_buildsec.png";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BuildSec 2024",
    template: "%s | BuildSec 2024",
  },
  description:
    "BuildSEC'24 is your chance to be part of the solution in safeguarding our increasingly digital society. This conference goes beyond technical discussions, offering a unique platform to collectively address the most critical cybersecurity and privacy challenges we face today. We explore how cutting-edge technologies and user studies can be leveraged to protect citizens in cyberspace. By bringing together academics, industry leaders, and government officials, we foster collaborative solutions that address real-world concerns. Our research tracks delve into advanced security methods, risk analysis, and the impact of technology choices, ultimately aiming to make the digital world safer for everyone. Join BuildSEC'24 and be a part of the movement to build a more secure and trusted digital future for all.",
  openGraph: {
    title: "BuildSec 2024",
    description:
      "BuildSEC'24 is your chance to be part of the solution in safeguarding our increasingly digital society. This conference goes beyond technical discussions, offering a unique platform to collectively address the most critical cybersecurity and privacy challenges we face today. We explore how cutting-edge technologies and user studies can be leveraged to protect citizens in cyberspace. By bringing together academics, industry leaders, and government officials, we foster collaborative solutions that address real-world concerns. Our research tracks delve into advanced security methods, risk analysis, and the impact of technology choices, ultimately aiming to make the digital world safer for everyone. Join BuildSEC'24 and be a part of the movement to build a more secure and trusted digital future for all.",
    url: "https://www.buildsec.org/_next/image?url=%2Flogo_buildsec.png&w=256&q=75",
    siteName: "BuildSec 2024",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// const datapath = path.join(process.cwd(), "app");
export default async function Page() {
  // console.log(getBlogPosts(datapath)[0].slug);
  // let post = getBlogPosts(datapath).find((post) => post.slug === "page");

  // if (!post) {
  //   notFound();
  // }

  // console.log(heading)

  // const [headingData, setHeadingData] = useState(null);

  // useEffect(() => {
  //   fetch('/api/heading')
  //     .then((response) => response.json())
  //     .then((data) => setHeadingData(data));
  // }, []);

  // if (!headingData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section
      className={clsx(
        `px-6 md:px-${marginValue} flex flex-col justify-center items-center md:justify-start md:items-start space-y-10`
      )}
    >
              <div className="w-full flex justify-center">
        <img 
          src= "/my-image.jpg" 
          alt="Banner Details" 
          className="w-200xl md:w-200xl lg:w-200xl h-auto" 
        />
      </div>
      {/* <section> */}
      <Image
        src={LOGO}
        alt="Logo"
        width={263}
        height={55}
        className="mt-4 md:hidden"
      />
      <Headinig data={heading} />
      <Introduction data={introdcution} />
      <KeyDates data={keyDates} />
      {/* <Schedule data={sessionSchedule} /> */}
      {/* <Speaker data={speaker} /> */}
      {/* <Registration data={registration} /> */}
      <Sponsorshipp data={Sponsors} />
      <Sponsorship data={sponsorship} />
      <Venue data={venue} marginValue={marginValue} />
      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} BuildSec
      </p>
    </section>
  );
}
