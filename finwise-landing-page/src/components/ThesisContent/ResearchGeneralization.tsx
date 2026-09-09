import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";
import { TargetChart } from "../Charts/TargetChart";

const ResearchGeneralization: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>07 / The target of generalization</ChapterTitle>
        <SectionTitle>A gap in the generalizations</SectionTitle>

        <SectionParagraph>
          <p className="italic font-light text-foreground">
            The studied context often differs from the environment researchers
            want to generalize their findings to. Therefore, each study should
            address a environment as a target of generalization.
          </p>
          <p>
            The analysis investigated whether the experimental environment
            actually matches the target environment researchers want to
            generalize to.
          </p>
          <p>
            Although most experiments were conducted in academic settings, the
            studies primarily aimed to generalize their findings to the software
            industry. The thesis reports that only 8% had the same experimental
            environment as their target environment, with 92% not matching.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <TargetChart />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchGeneralization;
