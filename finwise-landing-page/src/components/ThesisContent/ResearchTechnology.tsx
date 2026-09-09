import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

import { TechnologyChart } from "../Charts/TechnologyChart";

const ResearchTechnology: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>05 / The Object of the study</ChapterTitle>
        <SectionTitle>The use of technology</SectionTitle>

        <SectionParagraph>
          <p className="italic font-light text-foreground">
            Are researchers actually discussing how the technology itself
            behaves differently in different contexts?
          </p>
          <p>
            Previous research has shown that technologies cannot be classified
            as universally good or bad, but rather how appropriate it is to
            specific circumstances and organizations.
          </p>
          <p>
            The analysis found that only a relatively <b>small portion</b> of the
            reporting specifically addresses the selected technologies, while
            contextual factors dominate.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <TechnologyChart />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchTechnology;
