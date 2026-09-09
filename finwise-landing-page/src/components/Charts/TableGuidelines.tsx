import React from "react";
import { motion, Variants } from "framer-motion";

import { guidelinesData } from "@/data/chartData/guideline";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export const TableGuidelines: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="flex flex-col h-full w-full text-left text-sm text-foreground-accent">
        {/* Header Row */}
        <div className="flex shrink-0 bg-background text-foreground uppercase font-semibold text-base border-b border-foreground">
          <div className="py-6 px-2 sm:px-5 w-12 sm:w-16 shrink-0">#</div>
          <div className="py-6 w-24 sm:w-32 xl:w-52 min-w-0 shrink-0">Guideline</div>
          <div className="py-6 px-2 sm:px-5 sm:pr-10 min-w-0 flex-1 break-words">Description</div>
        </div>

        {/* Animated Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1 h-full divide-y divide-foreground overflow-y-hidden scrollbar-none"
        >
          {guidelinesData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={rowVariants}
                className="flex flex-1 items-center transition-colors duration-200 hover:bg-section-accent"
              >
                <div className="py-5 px-2 sm:px-5 w-12 sm:w-16 shrink-0 font-bold">
                  <span className="inline-block">{item.id}</span>
                </div>
                <div className="py-5 w-24 sm:w-32 xl:w-52 min-w-0 shrink-0 font-medium text-foreground break-words">
                  {item.title}
                </div>
                <div className="py-5 px-2 sm:px-5 sm:pr-10 min-w-0 flex-1 leading-relaxed break-words">
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TableGuidelines;
