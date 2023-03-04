import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center bg-darkViolet text-veryLightGray py-4">
      <div className="container">
        {/* Left Column */}
        <div>
          <h1 className="text-4xl">Humanizing your insurance.</h1>
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
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
