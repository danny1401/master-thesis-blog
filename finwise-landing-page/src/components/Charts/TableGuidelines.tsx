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
    <div className="flex flex-col justify-center w-full border bg-section">
      <table className="w-full text-left text-sm text-foreground-accent">
        <thead className="bg-background text-foreground uppercase font-semibold text-base border-b border-foreground">
          <tr>
            <th className="py-6 px-5 w-12">#</th>
            <th className="py-6 w-52">Guideline</th>
            <th className="py-6 px-5 pr-10">Description</th>
          </tr>
        </thead>

        <motion.tbody
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="divide-y divide-foreground"
        >
          {guidelinesData.map((item) => {
            return (
              <motion.tr
                key={item.id}
                variants={rowVariants}
                className="transition-colors duration-200 hover:bg-section-accent"
              >
                <td className="py-9 px-5 font-bold align-top">
                  <span className="inline-block">{item.id}</span>
                </td>
                <td className="py-9 font-medium text-foreground align-top">
                  {item.title}
                </td>
                <td className="py-9 px-5 pr-10 leading-relaxed align-top">
                  {item.description}
                </td>
              </motion.tr>
            );
          })}
        </motion.tbody>
      </table>
    </div>
  );
};

export default TableGuidelines;
