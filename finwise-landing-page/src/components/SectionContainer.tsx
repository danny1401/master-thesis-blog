import React from "react";

const SectionContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="research-section-grid grid h-full grid-cols-2 gap-16">
      {children}
    </div>
  );
};

export default SectionContainer;
