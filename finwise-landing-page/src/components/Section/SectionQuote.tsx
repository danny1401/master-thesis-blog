import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionQuote: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <p className="italic font-light text-foreground">
      {children}
    </p>
  );
};

export default SectionQuote;
