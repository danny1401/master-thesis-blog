import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

import { MoveRight } from "lucide-react";
import ExperimentChart from "../Charts/ExperimentChart";

const ResearchMethod: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>03 / THE RESEARCH METHOD</ChapterTitle>
        <SectionTitle>Data Collection</SectionTitle>

        <SectionParagraph>
          <p>
            The methodology involved extracting and categorizing relevant text segments from discussions of external validity in the articles. 
          </p>
          <p>
            Four raters were involved, with articles independently rated by two raters; disagreements were subsequently discussed for consensus.
          </p>
          
          <div className="pt-5 space-y-5">
            <h4 className="font-semibold">Extraction process:</h4>
            <div className="flex flex-row gap-x-3 items-center justify-between bg-section border border-foreground py-2 px-10">
              <span>Articles</span>
              <span><MoveRight /></span>
              <span>Experiment</span>
              <span><MoveRight /></span>
              <span>Segment</span>
            </div>
            <div className="flex flex-row gap-x-3 items-center justify-between bg-section border border-foreground py-2 px-10">
              <span>Segment</span>
              <span><MoveRight /></span>
              <span className="whitespace-nowrap">Threats and generalization claims</span>
            </div>
          </div>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <div className="px-10"> 
          <ExperimentChart />
        </div>
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchMethod;
