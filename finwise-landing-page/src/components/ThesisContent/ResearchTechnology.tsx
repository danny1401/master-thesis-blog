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
          <p className="text-red-500">
            diving into method segments
            <br />
            explanation of technology and environment
          </p>
          <p>
            Are researchers actually discussing how the technology itself behaves differently in different contexts?
          </p>
          <p>
            Your analysis found that only a relatively small portion of the reporting specifically addresses the selected technologies, while contextual factors dominate.
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
