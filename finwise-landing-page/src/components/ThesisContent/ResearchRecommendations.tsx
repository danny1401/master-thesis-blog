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
        <ChapterTitle>10 / Guidelines</ChapterTitle>
        <SectionTitle>
          Recommendations <br /> for reporting
        </SectionTitle>

        <SectionParagraph>
          <p>
            The thesis provides a reflection of how threats to external validity
            in technologies are reported in prior software engineering research.
          </p>
          <p>
            Researchers need to report more of the threat of misaligned
            environments. Due to the low number of threats to the experimental
            environment and misaligned generalization claims, practitioners
            should interpret the findings with caution.
          </p>
          <p>
            The recommendations presented in this section aim to improve
            experimental design and the reporting of external validity for
            practitioners.
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
