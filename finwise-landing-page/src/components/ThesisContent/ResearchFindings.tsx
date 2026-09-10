import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionQuote from "../Section/SectionQuote";

import TableTaxonomy from "@/components/Charts/TableTaxonomy";

const ResearchFindings: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>09 / Discussion</ChapterTitle>
        <SectionTitle>Findings</SectionTitle>

        <div className="mt-5 max-w-lg space-y-2 text-lg font-normal leading-relaxed text-background-accent">
          <SectionQuote>
            Generalization isn&apos;t just about whether an experiment works.
            It&apos;s about where, for whom, and under which conditions it
            works.
          </SectionQuote>
          <br />

          <p>1. Low number of threats in discussions of external validity</p>
          <div className="pl-8 text-sm">
            <ul className="list-disc list-outside space-y-2">
              <li>
                Two-fifths of all articles report threats to technologies and
                its contextual factors.
              </li>
            </ul>
          </div>
          <br />

          <p>2. Types of threats to technologies</p>
          <div className="pl-8 text-sm">
            <ul className="list-disc list-outside space-y-2">
              <li>
                Based on previous research and observations of the discussions,
                a conceptual taxonomy can serve as checklist for reporting distinct
                threats to technologies regarding external validity.
              </li>
            </ul>
          </div>
          <br />

          <p>3. Low number of aligned environments</p>
          <div className="pl-8 text-sm">
            <ul className="list-disc list-outside space-y-2">
              <li>
                Only 16 instances of threats to the experimental environment.
              </li>
              <li>
                The thesis reports that only 8% had the same experimental
                environment as their target environment, with 92% not matching.
              </li>
            </ul>
          </div>
          <p className="lg:h-32" />
        </div>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <TableTaxonomy />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchFindings;
