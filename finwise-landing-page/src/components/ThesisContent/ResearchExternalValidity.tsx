import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";

const ResearchExternalValidity: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>04 / External validity</ChapterTitle>
        <SectionTitle>What do researchers actually report?</SectionTitle>
        
        <SectionParagraph>
          <p>
            External Validity.
          </p>
          <p>
            Categores.
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

export default ResearchExternalValidity;
