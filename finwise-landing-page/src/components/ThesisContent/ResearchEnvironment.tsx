import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

import { EnvironmentChart } from "../Charts/EnvironmentChart";

const ResearchEnvironment: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>06 / Contextual factors</ChapterTitle>
        <SectionTitle>Enviroments</SectionTitle>

        <SectionParagraph>
          <p>
            There are an infinite number of contextual factors in experiments
            that can be used to compare to different contexts. Instead,{" "}
            <b>the experimental environment</b> was selected as the primary
            variable because it usually gives an overall perspective of a
            context.
          </p>
          <p>
            The data shows that researchers mostly perform experiments at{" "}
            <b>the academia</b>, followed by laboratories and industrual
            environments.
          </p>
          <p>
            16% of the experiments were implicit or did not mention their
            experimental environments in their designs.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <EnvironmentChart />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchEnvironment;
