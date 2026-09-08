import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

const ResearchGeneralization: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>06 / The target of generalization</ChapterTitle>
        <SectionTitle>A gap in the generalizations</SectionTitle>

        <SectionParagraph>
          <p>
            Your thesis investigates whether the environment in which an experiment occurs actually matches the environment researchers want to generalize to.
          </p>
          <p>
            The environment studied often differs from the environment researchers want to generalize to.
          </p>
          <p>
            The thesis reports that only 8% had the same experimental environment as their target environment, with 92% not matching.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        hey
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchGeneralization;
