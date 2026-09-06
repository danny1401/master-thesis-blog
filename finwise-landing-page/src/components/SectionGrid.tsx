import React, { createContext, useContext } from "react";

export type ResearchColumn = "both" | "left" | "right";

export const ResearchColumnContext = createContext<ResearchColumn>("both");

interface Props {
  side: boolean;
}

const SectionGrid: React.FC<React.PropsWithChildren<Props>> = ({
  side,
  children,
}: React.PropsWithChildren<Props>) => {
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
        <div className="flex items-center">
          <div className="max-w-xl">
            {children}
          </div>
        </div>
      ) : (
        /* RIGHT COLUMN */
        <div className="relative aspect-square rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          {children}
        </div>
      )}
    </>
  );
};

export default SectionGrid;
