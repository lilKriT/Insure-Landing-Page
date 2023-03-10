import React from "react";

const CTA = () => {
  return (
    <section className="flex justify-center text-veryLightGray mb-28 mx-6">
      <div className="container bg-ctaDesktop bg-no-repeat bg-right bg-darkViolet flex flex-col desktop:flex-row text-center justify-between items-center px-8 desktop:px-16 py-12 gap-12">
        <h2 className="text-6xl">
          Find out more
          <br /> about how we work
        </h2>
        <a href="#" className="btn btn--primary">
          How we work
        </a>
      </div>
    </section>
  );
};

export default CTA;
