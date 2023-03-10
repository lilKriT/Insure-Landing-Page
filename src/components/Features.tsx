import React from "react";

import Snappy from "../assets/images/icon-snappy-process.svg";
import Affordable from "../assets/images/icon-affordable-prices.svg";
import People from "../assets/images/icon-people-first.svg";

const Features = () => {
  return (
    <section className="flex justify-center mt-[clamp(4rem,30%,20rem)] mb-40">
      <div className="container mx-6">
        <div className="border bg-darkGrayishViolet w-28 mb-24 h-[1px]" />
        <h2 className="text-7xl mb-16 text-center desktop:text-left">
          We’re different
        </h2>
        <div className="flex flex-col desktop:flex-row gap-12 desktop:gap-4">
          <article className="featureCard">
            <img src={Snappy} alt="" />
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </article>
          <article className="featureCard">
            <img src={Affordable} alt="" />
            <h3>Affordable Prices</h3>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </article>
          <article className="featureCard">
            <img src={People} alt="" />
            <h3>People First</h3>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
