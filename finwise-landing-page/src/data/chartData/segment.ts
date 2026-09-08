export type SegmentCategory = {
  category: string;
  count: number;
  definition: string;
};

export const segmentCategories: SegmentCategory[] = [
  {
    category: "Subject",
    count: 84,
    definition:
      "Segments involving characteristics of the experiment's subjects, such as experience, background, or number of participants.",
  },
  {
    category: "Method",
    count: 67,
    definition:
      "Segments concerning how the experiment or experimental procedure is conducted.",
  },
  {
    category: "System",
    count: 60,
    definition:
      "Segments concerning characteristics of the software system or system under investigation.",
  },
  {
    category: "Definition",
    count: 48,
    definition:
      "Segments concerning how concepts, variables, or measurements are defined in the experiment.",
  },
  {
    category: "Task",
    count: 32,
    definition:
      "Segments concerning the activities or procedures participants perform during the experiment.",
  },
];