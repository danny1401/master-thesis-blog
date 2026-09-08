import React from "react";

const ChartFooter: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-3 flex items-center justify-between text-xs text-secondary">
      {children}
    </div>
  );
};

export default ChartFooter;
