export type TechnologyThreats = {
  category: string;
  count: number;
  definition: string;
};

export const technologyThreats: TechnologyThreats[] = [
  {
    category: "Selected Technology",
    count: 14,
    definition:
      "A threat that describes how the selected technology does not reflect the real world, or its limitations to the results.",
  },
  {
    category: "Context",
    count: 9,
    definition:
      "A threat that describes the limitations of the context of the experiment.",
  },
  {
    category: "Experimental environment",
    count: 16,
    definition:
      "A threat that describes the limitations in artificial laboratories, academic- and industrial environments.",
  },
  {
    category: "Skill Level & Experience",
    count: 5,
    definition:
      "A threat that describes the limitations regarding skill levels, experience, and human performance in the subjects when using a technology.",
  },
  {
    category: "Task",
    count: 14,
    definition:
      "A threat describes task activities, experimental procedure and experimental material.",
  },
  {
    category: "Work environment",
    count: 3,
    definition:
      "A threat that describes how environments in teams, isolation, or through cultural differences can affect the results.",
  },
  {
    category: "History and time",
    count: 5,
    definition:
      "A threat that describes the temporal effect of the treatments in the experiments.",
  },
  {
    category: "Location",
    count: 0,
    definition:
      "A threat that describes the limitations in the specific conducted site due to economic conditions and organizational and national culture.",
  },
  {
    category: "Implicit",
    count: 5,
    definition:
      "An implicit description of a threat.",
  },
];