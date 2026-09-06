import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

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
            How confidently can software engineering research be generalized beyond the environment in which it was studied?
          </p>
          <p>
            To argue for generalization, one needs to articulate
            threats to external validity in a study and specify the conditions in which
            their results may not be extended to.
          </p>
          <p>
            In this thesis, <b>81 articles</b> was analyzed from five high-impact software engineering journals, containing{" "}
            <b>150 experiments</b>.
          </p>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <div className="flex h-full items-center justify-center gap-3">
          <div>
            Articles
          </div>
          <div>
            Experiments
          </div>
          <div>
            Replications
          </div>
          <div>
            Publication period
          </div>
        </div>
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchTopic;
