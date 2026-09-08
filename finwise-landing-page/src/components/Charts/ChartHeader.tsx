import React from "react";

const ChartHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mb-8">
        <div className="flex items-end justify-between gap-6 text-foreground">
          {children}
        </div>
      </div>
  );
};

export default ChartHeader;
