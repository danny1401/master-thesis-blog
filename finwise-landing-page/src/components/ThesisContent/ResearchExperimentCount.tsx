import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

import DistributionChart from "../Charts/DistributionChart";

const ResearchExperimentCount: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>07 / Single Study vs Family of Experiments</ChapterTitle>
        <SectionTitle>The Strength of Experiments</SectionTitle>

        <SectionParagraph>
          <p className="text-red-500">
            single studies vs family experiments
          </p>
          <p>
            The thesis argues that differentiated replications are particularly
            useful because they deliberately vary contextual conditions.
          </p>
          <p>
            And you found that most replications were close replications, rather
            than differentiated replications.
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

export default ResearchExperimentCount;
