import Link from "next/link";
import React from "react";
import { Send } from "lucide-react";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import { SendButton } from "@/components/SendButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10 pt-16">
      <div className="flex flex-col px-6 max-w-7xl w-full mx-auto gap-y-8 text-base">
        <div className="space-y-2">
          <Link href="/">
            <h3 className="text-xl md:text-2xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="text-foreground-accent">
            {siteDetails.metadata.description}
          </p>
        </div>
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
        {footerDetails.email && (
          <SendButton
            href={`mailto:${footerDetails.email}`}
            label="Contact the author"
            className="w-56 text-lg font-semibold"
          />
        )}

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
