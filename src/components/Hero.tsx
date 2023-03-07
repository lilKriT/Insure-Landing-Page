import React from "react";
import imageDesktop from "../assets/images/image-intro-desktop.jpg";

const Hero = () => {
  return (
    <section className="flex justify-center bg-darkViolet text-veryLightGray mb-36">
      <div className="container flex py-28 ">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col justify-center items-start gap-8 pr-4">
          <div className="border border-veryLightGray w-28" />
          <h1 className="text-7xl">
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
        <div className="w-1/2 outline relative">
          <img src={imageDesktop} alt="" className="absolute w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
