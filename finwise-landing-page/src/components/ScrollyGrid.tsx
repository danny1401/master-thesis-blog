"use client";

import React, { useEffect, useRef, useState } from "react";

import ResearchTopic from "@/components/ResearchTopic";
import ResearchQuestions from "@/components/ResearchQuestions";
import ResearchMethod from "@/components/ResearchMethod";
import ResearchExternalValidity from "@/components/ResearchExternalValidity";
import ResearchTechnology from "@/components/ResearchTechnology";
import ResearchGeneralization from "./ResearchGeneralization";
import ResearchExperimentCount from "./ResearchExperimentCount";
import ResearchFindings from "./ResearchFindings";
import ResearchRecommendations from "./ResearchRecommendations";
import {
  ResearchColumnContext,
  type ResearchColumn,
} from "./SectionGrid";

const sections = [
  {
    id: "research-topic",
    component: ResearchTopic,
  },
  {
    id: "research-questions",
    component: ResearchQuestions,
  },
  {
    id: "research-method",
    component: ResearchMethod,
  },
  {
    id: "external-validity",
    component: ResearchExternalValidity,
  },
  {
    id: "technology",
    component: ResearchTechnology,
  },
  {
    id: "generalization",
    component: ResearchGeneralization,
  },
  {
    id: "single-experiment-versus-multiple-experiments",
    component: ResearchExperimentCount,
  },
  {
    id: "findings",
    component: ResearchFindings,
  },
  {
    id: "recommendations",
    component: ResearchRecommendations,
  },
];

export default function ScrollyGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let newIndex = 0;

      triggerRefs.current.forEach((element, index) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= viewportCenter) {
          newIndex = index;
        }
      });

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ActiveSection = sections[activeIndex].component;

  const renderSection = (Section: (typeof sections)[number]["component"], column: ResearchColumn) => (
    <ResearchColumnContext.Provider value={column}>
      <Section />
    </ResearchColumnContext.Provider>
  );

  return (
    <>
      {/* DESKTOP SCROLLING CONTENT AND STICKY VISUAL */}
      <div className="mx-auto hidden lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-16 xl:max-w-7xl">
        <div className="desktop-scroll-sections">
          {sections.map((section, index) => {
            const Section = section.component;

            return (
              <div
                key={section.id}
                ref={(element) => {
                  triggerRefs.current[index] = element;
                }}
                className="desktop-scroll-section flex min-h-screen items-center py-10"
              >
                {renderSection(Section, "left")}
              </div>
            );
          })}
        </div>

        <div className="sticky top-0 h-screen py-10">
          <div
            key={sections[activeIndex].id}
            className="desktop-active-section h-full animate-section-in"
          >
            {renderSection(ActiveSection, "right")}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden">
        {sections.map((section) => {
          const Section = section.component;
          return (
            <section key={section.id} className="min-h-screen px-6 py-24">
              <Section />
            </section>
          );
        })}
      </div>

    </>
  );
}
