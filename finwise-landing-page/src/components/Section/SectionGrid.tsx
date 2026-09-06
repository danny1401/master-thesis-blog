import React, { createContext, useContext } from "react";

export type ResearchColumn = "both" | "left" | "right";

export const ResearchColumnContext = createContext<ResearchColumn>("both");

interface Props {
  side: boolean;
  className?: string;
}

const SectionGrid: React.FC<React.PropsWithChildren<Props>> = ({
  side,
  className = "",
  children,
}) => {
  const column = useContext(ResearchColumnContext);

  if (
    (column === "left" && !side) ||
    (column === "right" && side)
  ) {
    return null;
  }

  return (
    <>
      {side ? (
        /* LEFT COLUMN */
        <div className={`flex items-center ${className}`}>
          <div className="max-w-xl">
            {children}
          </div>
        </div>
      ) : (
        /* RIGHT COLUMN */
        <div className={`relative aspect-square border border-foreground bg-section shadow-sm ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default SectionGrid;
