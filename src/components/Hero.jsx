import { useState, useEffect } from "react";

import heroDesktop from "../assets/hero-image-simple-homepage.png";
import heroMobile from "../assets/hero-image-simple-homepage@2x.png";
import Paragraph from "./Paragraph";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  });

  return (
    <div className="flex flex-col p-4 justify-center font-poppins md:flex-row md:items-center gap-16 md:gap-0 ">
      <div className="md:order-1 flex items-center justify-center">
        <img
          className=" w-max-full h-auto md:w-max-full md:w-full"
          src={isMobile ? heroMobile : heroDesktop}
          alt="hero img"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <h4 className="text-lg md:text-sm text-accent-color font-bold uppercase dark:text-dark-accent-color">
          😎 Simple way to communicate
        </h4>
        <h1
          className=" text-accent-color text-4xl font-bold leading-normal md:text-6xl md:max-w-96 md:leading-relaxed
          dark:text-dark-accent-color
        "
        >
          Actions for Accessibility in Design
        </h1>

        <p className="text-[#909193] text-lg ">
          The fastest way to build and deploy websites with reusable components.
        </p>

        <div className="flex gap-8 ">
          <button className="uppercase font-semibold text-background-color bg-primary-color hover:bg-[#4D6FE0] px-6 py-3 rounded-md">
            <a href="#">Get started</a>
          </button>
          <button className="relative text-primary-color font-semibold hover:scale-105 transition-transform duration-700 group">
            Get live demo
            <span className="absolute bottom-0 left-0 w-full bg-primary-color h-0.5 scale-x-100 origin-right group-hover:scale-x-0 transition-transform duration-300"></span>
          </button>
        </div>
        <div className="flex gap-2 mt-2 md:gap-8">
          <Paragraph>No credit card required</Paragraph>
          <Paragraph>No software to install</Paragraph>
        </div>
      </div>
    </div>
  );
}
