import React from "react";
import { clsx } from "clsx";
import Link from "next/link";

type Props = {
  data: {
    venue: string;
    link: string;
    google_embeded_map_src: string;
  };
  marginValue: number;
};

const Venue = (props: Props) => {
  return (
    <section id="venue" className="w-full text-center">
      <h1 className="text-2xl text-center sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Venue
      </h1>
      {/* <a
        href="https://www.learningenvironments.unsw.edu.au/physical-spaces/colombo-building/k-b16-lg03-colombo-theatre"
      >
        Columbo Theatre A, Colombo Building K-B16-LG03 UNSW Sydney
      </a> */}
      <Link 
      className="hover:text-red-500 underline font-semibold text-center"
      href={props.data.link}>
      {props.data.venue}
      </Link>
      {/* <div id="map" className={clsx(`-mx-${props.marginValue} mt-4`)}>
        <iframe
          src={props.data.google_embeded_map_src}
          width="100%"
          height="450"
          style={{ border: 1 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </section>
  );
};

export default Venue;
