import React from "react";
import { motion, Variants } from "framer-motion";

import { threatTaxonomy } from "@/data/chartData/taxonomy";

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
          <div className="py-3 px-2 sm:px-5 w-24 sm:w-36 xl:w-52 min-w-0 shrink-0">Threat Category</div>
          <div className="py-3 px-2 sm:px-5 sm:pr-10 min-w-0 flex-1 break-words">Description</div>
        </div>

        {/* Animated Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1 h-full divide-y divide-foreground overflow-y-hidden scrollbar-none"
        >
          {threatTaxonomy.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={rowVariants}
                className="flex flex-1 items-center transition-colors duration-200 hover:bg-section-accent"
              >
                <div className="py-3 lg:py-0 px-2 sm:px-5 w-24 sm:w-36 xl:w-52 min-w-0 shrink-0 font-medium text-foreground break-words">
                  {item.category}
                </div>
                <div className="py-3 lg:py-0 px-2 sm:px-5 sm:pr-10 min-w-0 flex-1 leading-relaxed break-words">
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
