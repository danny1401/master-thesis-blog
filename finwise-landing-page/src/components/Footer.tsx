import Link from "next/link";
import React from "react";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";

import { SendButton } from "@/components/SendButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-14 mt-20 border-t-4 border-foreground">
      <div className="flex flex-col w-full text-center sm:text-left px-16 gap-y-8 text-base">
        <div className="space-y-2">
          <Link href="/">
            <h3 className="hidden md:block text-2xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
            <h3 className="md:hidden block text-xl sm:text-2xl md:text-2xl font-semibold cursor-pointer">
              {siteDetails.shortName}
            </h3>
          </Link>
          <p className="text-foreground-accent">
            {siteDetails.metadata.description}
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center sm:justify-between gap-5">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Research Information</h4>
            <div className="flex flex-col text-foreground-accent ">
              <p>
                <b>Author:</b> {footerDetails.author}
              </p>
              <p>
                <b>Released:</b> {footerDetails.releaseDate}
              </p>
              <p>
                <b>Program:</b> {footerDetails.program}
              </p>
              <p>
                <b>Department:</b> {footerDetails.department}
              </p>
              <p>
                <b>Faculty:</b> {footerDetails.faculty}
              </p>
              <p>
                <b>Institution:</b> {footerDetails.institution}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <SendButton
              href={siteDetails.repositoryUrl}
              label="Github"
              className="w-56 text-base font-semibold"
            />
            <SendButton
              href={siteDetails.portfolioUrl}
              label="Back to portfolio"
              className="w-56 text-base font-semibold"
            />
            {footerDetails.email && (
              <SendButton
                href={`mailto:${footerDetails.email}`}
                label="Contact the author"
                className="w-56 text-base font-semibold"
              />
            )}
          </div>
        </div>

        <div className="text-foreground-accent">
          <p>
            Copyright &copy;{new Date().getFullYear()} {siteDetails.owner}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
