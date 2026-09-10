import React from "react";

const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="research-section-grid flex flex-col lg:flex-row h-full gap-y-12 text-foreground scroll-mt-10">
      {children}
    </div>
  );
};

export default SectionContainer;
