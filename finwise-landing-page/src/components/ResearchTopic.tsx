import React from "react";
import SectionContainer from "./SectionContainer";
import SectionGrid from "./SectionGrid";
import ChapterTitle from "./ChapterTitle";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";

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
          {["I", "love", "machine", "learning"].map((word, i) => (
            <div
              key={word}
              className="rounded-lg border border-black/10 px-4 py-3 text-sm"
              style={{ transform: `translateY(${i * -10}px)` }}
            >
              {word}
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-8 font-mono text-xs text-neutral-400">
          sequential processing
        </div>
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchTopic;
