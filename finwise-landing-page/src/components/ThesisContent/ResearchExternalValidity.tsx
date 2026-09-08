import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

import { SegmentsChart } from "../Charts/SegmentChart";

const ResearchExternalValidity: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>04 / Threats to External validity</ChapterTitle>
        <SectionTitle>What do researchers actually report?</SectionTitle>

        <SectionParagraph>
          <p className="text-red-500">
            ev explanation
          </p>
          <p>
            The most frequently mentioned threats in the discussions of external
            validity revolved around subjects, followed by method, system, definition, and
            task.
          </p>
          <p className="text-red-500">
            1 more sentence
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <SegmentsChart />
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchExternalValidity;
