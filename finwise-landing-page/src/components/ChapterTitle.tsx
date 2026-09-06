import React from "react";

interface Props {
  children: React.ReactNode;
}

const ChapterTitle: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-background-accent">
      {children}
    </p>
  );
};

export default ChapterTitle;
