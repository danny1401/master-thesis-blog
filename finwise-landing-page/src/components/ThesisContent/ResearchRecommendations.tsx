import React from "react";
import SectionContainer from "@/components/Section/SectionContainer";
import SectionGrid from "@/components/Section/SectionGrid";
import ChapterTitle from "@/components/Section/ChapterTitle";
import SectionTitle from "@/components/Section/SectionTitle";
import SectionParagraph from "@/components/Section/SectionParagraph";

import TableGuidelines from "@/components/Charts/TableGuidelines";

const ResearchRecommendations: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT */}
      <SectionGrid side={true}>
        <ChapterTitle>09 / Guidelines</ChapterTitle>
        <SectionTitle>
          Recommendations <br /> for reporting
        </SectionTitle>

        <SectionParagraph>
          <p>
            Your thesis investigates whether the environment in which an experiment occurs actually matches the environment researchers want to generalize to.
          </p>
          <p>
            The environment studied often differs from the environment researchers want to generalize to.
          </p>
          <p className="italic mt-5 max-w-lg text-lg leading-relaxed text-background-accent">
            Generalization isn&apos;t just about whether an experiment works. It&apos;s about where, for whom, and under which conditions it works.
          </p>
          <p className="lg:h-80"></p>
        </SectionParagraph>
        
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <TableGuidelines />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchRecommendations;
