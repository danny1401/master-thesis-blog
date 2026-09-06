import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

const ResearchQuestions: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>02 / THE RESEARCH PROBLEM</ChapterTitle>
        <SectionTitle>Research Questions</SectionTitle>

        <SectionParagraph>
          <p>
            The thesis explored the extent to which software engineering research can be generalized beyond the environment in which it was studied.
          </p>
        </SectionParagraph>

        <SectionParagraph>
          <div>
            <h3 className="font-bold">RQ1:</h3>
            How are threats to experimental procedures reported?
          </div>
          <div>
            <h3 className="font-bold">RQ2:</h3>
            How are threats to technologies reported?
          </div>
          <div>
            <h3 className="font-bold">RQ3:</h3>
            Do experimental environments align with the environments researchers want to generalize to?
          </div>
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

export default ResearchQuestions;
