import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionGrid from "../Section/SectionGrid";
import ChapterTitle from "../Section/ChapterTitle";
import SectionTitle from "../Section/SectionTitle";
import SectionParagraph from "../Section/SectionParagraph";
import ChartHeader from "../Charts/ChartHeader";
import FlowChartGeneralization from "../Charts/FlowChartGeneralization";

const ResearchQuestions: React.FC = () => {
  return (
    <SectionContainer>
      {/* LEFT COLUMN */}
      <SectionGrid side={true}>
        <ChapterTitle>02 / THE RESEARCH PROBLEM</ChapterTitle>
        <SectionTitle>Research Questions</SectionTitle>

        <SectionParagraph>
          <p>
            The thesis explored the extent to which software engineering
            research can be generalized beyond the environment in which it was
            studied.
          </p>

          <div className="pt-4">
            <h3 className="font-bold">RQ1:</h3>
            How are threats to experimental procedures reported?
          </div>
          <div>
            <h3 className="font-bold">RQ2:</h3>
            How are threats to technologies reported?
          </div>
          <div>
            <h3 className="font-bold">RQ3:</h3>
            Do experimental environments align with the environments researchers
            want to generalize to?
          </div>
        </SectionParagraph>
      </SectionGrid>

      {/* RIGHT COLUMN */}
      <SectionGrid side={false}>
        <div className="flex flex-col justify-center w-full my-5 px-10">
          <ChartHeader>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                The process of generalizaton
              </h3>
              <p className="mt-2 text-sm text-secondary">
                The problem of external generalization to other contexts.
              </p>
            </div>
          </ChartHeader>
          <FlowChartGeneralization />
        </div>
      </SectionGrid>
    </SectionContainer>
  );
};

export default ResearchQuestions;
