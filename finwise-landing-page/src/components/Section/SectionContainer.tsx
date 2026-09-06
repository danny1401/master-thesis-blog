import React from "react";

const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="research-section-grid flex flex-col lg:flex-row h-full gap-16 text-foreground">
      {children}
    </div>
  );
};

export default SectionContainer;
