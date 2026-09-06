import React from "react";

const SectionParagraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-5 max-w-lg text-lg font-normal leading-relaxed text-background-accent space-y-5">
      {children}
    </div>
  );
};

export default SectionParagraph;
