import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

const ResearchGeneralization: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>06 / The target of generalization</ChapterTitle>
        <SectionTitle>A gap in the generalizations</SectionTitle>

        <SectionParagraph>
          <p>
            Your thesis investigates whether the environment in which an experiment occurs actually matches the environment researchers want to generalize to.
          </p>
          <p>
            The environment studied often differs from the environment researchers want to generalize to.
          </p>
          <p>
            The thesis reports that only 8% had the same experimental environment as their target environment, with 92% not matching.
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

export default ResearchGeneralization;
