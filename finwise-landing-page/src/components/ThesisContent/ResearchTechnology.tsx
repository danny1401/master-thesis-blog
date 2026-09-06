import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

const ResearchTechnology: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>05 / The Object of the study</ChapterTitle>
        <SectionTitle>The threat in use of technology</SectionTitle>

        <SectionParagraph>
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
        <div className="grid h-full place-items-center">
          {" "}
          <div className="grid grid-cols-3 gap-8 text-background">
            {" "}
            {[
              "I",
              "love",
              "AI",
              "and",
              "attention",
              "too",
              "much",
              "today",
              "?",
            ].map((word, i) => (
              <div
                key={`${word}-${i}`}
                className={` relative rounded-lg border px-4 py-3 text-center text-sm transition-all ${i === 4 ? "bg-black text-white" : "bg-white"} `}
              >
                {" "}
                {word}{" "}
                {i === 4 && (
                  <div className="absolute inset-0 -z-10 animate-pulse rounded-lg bg-black/10" />
                )}{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-6 left-8 font-mono text-xs text-neutral-400">
          {" "}
          every token can attend to every other token{" "}
        </div>{" "}
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchTechnology;
