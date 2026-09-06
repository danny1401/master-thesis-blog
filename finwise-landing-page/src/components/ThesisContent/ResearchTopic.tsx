import React from "react";

import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

import { thesisData } from "@/data/thesis";

const ResearchTopic: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>01 / THE RESEARCH TOPIC</ChapterTitle>
        <SectionTitle>
          Research in
          <br />
          Software Engineering
        </SectionTitle>

        <SectionParagraph>
          <p className="italic">
            How confidently can software engineering research be generalized
            beyond the environment in which it was studied?
          </p>
          <p>
            To argue for generalization, one needs to articulate threats to
            external validity in a study and specify the conditions in which
            their results may not be extended to.
          </p>
          <p>
            In this thesis, <b>81 articles</b> was analyzed from five
            high-impact software engineering journals, containing{" "}
            <b>150 experiments</b>.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <div className="grid grid-cols-2 h-full text-center justify-center gap-px bg-foreground">
          <div className="flex flex-col justify-center items-center bg-section-accent p-4">
            <div className="font-bold text-5xl mb-3">{thesisData.articles}</div>
            <div>Articles</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-section p-4">
            <div className="font-bold text-5xl mb-3">{thesisData.experiments}</div>
            <div>Experiments</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-section p-4">
            <div className="font-bold text-5xl mb-3">{thesisData.replications}</div>
            <div>Replications</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-section-accent p-4">
            <div className="font-bold text-5xl mb-3 whitespace-nowrap">2015-2019</div>
            <div>Publication period</div>
          </div>
        </div>
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchTopic;
