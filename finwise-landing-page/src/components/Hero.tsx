import React from "react";
import Image from "next/image";

import HeroGrid from "@/components/HeroGrid";

import { siteDetails } from "@/data/siteDetails";
import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center text-center mt-5 px-10"
    >
      {/* Background */}
      <HeroGrid />

      <div className="flex flex-col gap-y-3 max-w-lg md:max-w-6xl text-foreground">
        <p className="text-xs md:text-base text-primary uppercase font-semibold tracking-wider">
          {heroDetails.projectcategory}
        </p>
        <div className="md:leading-tight font-bold mt-3">
          <h1 className="text-2xl md:text-6xl lg:text-7xl mb-0 md:mb-3">
            {heroDetails.heading1}
          </h1>
          <h1 className="text-lg md:text-4xl">
            in <span className="text-primary italic">Software Engineering Research</span>
          </h1>
        </div>
        <p className="text-sm md:text-lg mx-auto max-w-lg mt-10 md:mt-4">
          A analysis of threats to <b>external validity</b> in <b>controlled experiments</b>
          <br />
          - with a focus on technologies and contextual factors.
        </p>
        <p className="mt-12 uppercase font-thin">
          Scroll to read more
        </p>
      </div>
    </section>
  );
};

export default Hero;
