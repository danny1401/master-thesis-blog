import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionTitle: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <h2 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.04em] xl:text-6xl">
      {children}
    </h2>
  );
};

export default SectionTitle;
