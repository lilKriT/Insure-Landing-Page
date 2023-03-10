import React from "react";
import imageDesktop from "../assets/images/image-intro-desktop.jpg";
import imageMobile from "../assets/images/image-intro-mobile.jpg";

const Hero = () => {
  return (
    <section className="flex justify-center bg-darkViolet text-veryLightGray relative">
      <div className="container flex flex-col-reverse desktop:flex-row desktop:py-28 desktop:mx-6">
        {/* Left Column */}
        <div className="w-full desktop:w-1/2 flex flex-col justify-center items-center desktop:items-start text-center desktop:text-left gap-8 pr-4 mobile py-32 desktop:py-0 px-6 desktop:px-0">
          <div className="hidden desktop:block border border-veryLightGray w-28" />
          <h1 className="text-5xl desktop:text-7xl">
            Humanizing <br />
            your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a href="#" className="btn btn--primary">
            View plans
          </a>
        </div>
        {/* Right Column */}
        <div className="w-full desktop:w-1/2 relative">
          <picture>
            <source
              srcSet={imageDesktop}
              media="(min-width: 1024px)"
              className="relative desktop:absolute w-full"
            />
            <img
              src={imageMobile}
              alt="Happy Insured Family"
              className="relative desktop:absolute w-full"
            />
          </picture>
        </div>
      </div>
      {/* The background images */}
      <div className="absolute w-full pointer-events-none outline-red-500 h-[150%] patternOverlay hidden desktop:block"></div>
    </section>
  );
};

export default Hero;
