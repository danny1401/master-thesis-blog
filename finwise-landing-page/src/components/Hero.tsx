import React from "react";

import HeroGrid from "@/components/HeroGrid";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex h-full sm:min-h-screen items-center justify-center text-left sm:text-center"
    >
      {/* Background */}
      <HeroGrid />

      <div className="flex flex-col gap-y-3 w-full max-w-lg md:max-w-6xl text-foreground my-32 sm:my-5 px-6 sm:px-10">
        <p className="block md:hidden text-sm md:text-base text-primary uppercase font-semibold tracking-wider">
          {heroDetails.projecttype}
        </p>
        <p className="hidden md:block whitespace-nowrap text-xs md:text-base text-primary uppercase font-semibold tracking-wider">
          {heroDetails.projectcategory}
        </p>
        <div className="md:leading-tight font-bold mt-3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-0 sm:mb-1 md:mb-3 whitespace-nowrap text-secondary">
            {heroDetails.heading1}
          </h1>
          <h1 className="text-lg sm:text-2xl md:text-4xl text-secondary">
            in <span className="text-primary italic whitespace-nowrap">Software Engineering Research</span>
          </h1>
        </div>
        <div className="flex flex-col text-base md:text-lg mt-4 sm:mt-4 space-y-2 sm:space-y-0">
          <span>An analysis of threats to <b>external validity</b> in <b>controlled experiments.</b>
          </span>
          <span className="italic">
            - with a focus on technologies and contextual factors.
          </span>
        </div>
        <p className="mt-12 tracking-wider uppercase font-thin">
          Scroll to read more
        </p>
      </div>
    </section>
  );
};

export default Hero;
