'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  data: 
    {
      name: string;
      image_src: string;
      width: number;
      height: number;
      display_width: string;
    }[];
};

const Sponsorship = (props: Props) => {
  const quadrupledData = [...props.data, ...props.data, ...props.data, ...props.data, ...props.data]; // quadruple the data for seamless loop
  const [isMobile, setIsMobile] = useState(false); // add state for mobile check

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize(); // call on mount
    window.addEventListener("resize", handleResize); // add event listener
    return () => {
      window.removeEventListener("resize", handleResize); // remove event listener on unmount
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <div className="marquee">
        {quadrupledData.map((sponsor) => (
          <Image
            key={sponsor.name}
            alt={sponsor.name}
            src={sponsor.image_src}
            width={sponsor.width}
            height={sponsor.height}
            style={{
              width: isMobile ? '90px' : sponsor.display_width, // conditional styling
              marginRight: isMobile ? '5px' : '25px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsorship;