import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MoveDown } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each element appearing
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    } 
  },
};

export const FlowChartGeneralization: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full items-center pt-16 font-medium text-center justify-center gap-y-5"
    >
      {/* Box 1 */}
      <motion.div
        variants={itemVariants}
        className="border-2 border-foreground bg-section-accent p-5 w-60 hover:bg-background transition-colors duration-200"
      >
        Controlled experiment
      </motion.div>

      {/* Arrow 1 */}
      <motion.div variants={itemVariants}>
        <MoveDown />
      </motion.div>

      {/* Box 2 */}
      <motion.div
        variants={itemVariants}
        className="border-2 border-foreground bg-section-accent p-5 w-60 hover:bg-background transition-colors duration-200"
      >
        Study findings
      </motion.div>

      {/* Arrow 2 with Label */}
      <motion.div
        variants={itemVariants}
        className="relative flex items-center justify-center w-full"
      >
        <MoveDown />
        <span className="absolute left-[calc(50%+1rem)] text-left text-xs sm:text-sm text-foreground">
          Can we generalize the results to other contexts?
        </span>
      </motion.div>

      {/* Box 3 */}
      <motion.div
        variants={itemVariants}
        className="border-2 border-foreground bg-section-accent p-5 w-60 hover:bg-background transition-colors duration-200"
      >
        Different Contexts
      </motion.div>
    </motion.div>
  );
};

export default FlowChartGeneralization;