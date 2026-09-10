import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";
import SectionQuote from "../Section/SectionQuote";

import DistributionChart from "../Charts/DistributionChart";

const ResearchReplications: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>08 / Replications</ChapterTitle>
        <SectionTitle>The Strength of Replicatons</SectionTitle>

        <SectionParagraph>
          <SectionQuote>
            Differentiated replications vary contextual factors to confirm
            whether an effect is robust or restricted to a specific environment.
          </SectionQuote>
          <p>
            Conducting replications builds a family of experiments, which
            creates an iterative process of observed inconsistencies. This
            gradually accumulates knowledge and builds confidence needed to
            generalize findings to real-world software engineering contexts.
          </p>
          <p>
            Only <b>two-fifths</b> of the articles had more than one experiment.
            This suggests that the findings in the remaining articles may not
            generalize across different settings.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <DistributionChart />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchReplications;
