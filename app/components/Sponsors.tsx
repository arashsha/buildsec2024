"use client";
import Image from "next/image";
import React from "react";

type Props = {
  data: {
    name: string;
    image_src: string;
    width: number;
    height: number;
    display_width: string;
  }[];
};

const Sponsors = (props: Props) => {
  return (
    <section id="Sponsors" className="w-full py-12">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center mb-8">
        Sponsors
      </h1>
      <div className="flex flex-col items-center"> We are proud to have these Corporate supporters. </div>
      <div className="flex flex-col items-center space-y-12 md:space-y-16">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-gold animate-pulse">
            Gold Sponsor
          </h2>
          <div className="sponsor-logo gold-sponsor">
            {props.data[0] && (
              <Image
                key={props.data[0].name}
                alt={props.data[0].name}
                src={props.data[0].image_src}
                width={props.data[0].width}
                height={props.data[0].height}
                style={{ width: props.data[0].display_width }}
              />
            )}
          </div>
        </div>
<div className="flex flex-col items-center">
  <h2 className="text-xl font-semibold mb-4 text-bronze animate-pulse">
    Bronze Sponsor
  </h2>
  <div className="sponsor-logo bronze-sponsor flex flex-row space-x-4">
    {props.data[1] && (
      <Image
        key={props.data[1].name}
        alt={props.data[1].name}
        src={props.data[1].image_src}
        width={props.data[1].width}
        height={props.data[1].height}
        style={{ width: props.data[1].display_width }}
      />
    )}
    {props.data[2] && (
      <Image
        key={props.data[2].name}
        alt={props.data[2].name}
        src={props.data[2].image_src}
        width={props.data[2].width}
        height={props.data[2].height}
        style={{ width: props.data[2].display_width }}
      />
    )}
    {props.data[3] && (
      <Image
        key={props.data[3].name}
        alt={props.data[3].name}
        src={props.data[3].image_src}
        width={props.data[3].width}
        height={props.data[3].height}
        style={{ width: props.data[3].display_width }}
      />
    )}
        {props.data[4] && (
      <Image
        key={props.data[4].name}
        alt={props.data[4].name}
        src={props.data[4].image_src}
        width={props.data[4].width}
        height={props.data[4].height}
        style={{ width: props.data[4].display_width }}
      />
    )}
        {props.data[5] && (
      <Image
        key={props.data[5].name}
        alt={props.data[5].name}
        src={props.data[5].image_src}
        width={props.data[5].width}
        height={props.data[5].height}
        style={{ width: props.data[5].display_width }}
      />
    )}
        {props.data[6] && (
      <Image
        key={props.data[6].name}
        alt={props.data[6].name}
        src={props.data[6].image_src}
        width={props.data[6].width}
        height={props.data[6].height}
        style={{ width: props.data[6].display_width }}
      />
    )}
  </div>
</div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 animate-pulse" >Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {props.data.slice(7).map((sponsor) => (
              <div key={sponsor.name} className="sponsor-logo our-partners">
                <Image
                  alt={sponsor.name}
                  src={sponsor.image_src}
                  width={sponsor.width}
                  height={sponsor.height}
                  style={{ width: sponsor.display_width }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;