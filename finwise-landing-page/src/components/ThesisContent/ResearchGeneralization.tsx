import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";
import { TargetChart } from "../Charts/TargetChart";
import SectionQuote from "../Section/SectionQuote";

const ResearchGeneralization: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>07 / The target of generalization</ChapterTitle>
        <SectionTitle>A gap in the generalizations</SectionTitle>

        <SectionParagraph>
          <SectionQuote>
            The studied context often differs from the environment researchers
            want to generalize their findings to. Therefore, each study should
            address a environment as a target of generalization.
          </SectionQuote>
          <p>
            The analysis investigated whether <b>the experimental environment</b> {' '}
            actually matches <b>the target environment</b> researchers want to
            generalize to.
          </p>
          <p>
            Although most experiments were conducted in <b>academic settings</b>, the
            studies primarily aimed to generalize their findings to <b>the software
            industry</b>. The thesis reports that only <b>8%</b> had the same experimental
            environment as their target environment, with <b>92%</b> not matching.
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
