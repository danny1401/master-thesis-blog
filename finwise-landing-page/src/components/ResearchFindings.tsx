import React from "react";
import SectionContainer from "./SectionContainer";
import SectionGrid from "./SectionGrid";
import ChapterTitle from "./ChapterTitle";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";

const ResearchFindings: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>08 / Findings</ChapterTitle>
        <SectionTitle>Three Major Findings</SectionTitle>

        <SectionParagraph>
          <p>
            text
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

export default ResearchFindings;
