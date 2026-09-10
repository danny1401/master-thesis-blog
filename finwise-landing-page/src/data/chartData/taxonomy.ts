export interface Taxonomy {
  category: string;
  description: React.ReactNode;
}

export const threatTaxonomy: Taxonomy[] = [
  {
    category: 'Selected technologies',
    description: 'A threat that describes how the selected technology does not reflect the real world, or its limitations to the results.',
  },
  {
    category: 'Context',
    description: 'A threat that describes the limitations of the context of the experiment.',
  },
  {
    category: 'Experimental environment',
    description: 'A threat that describes the limitations in artificial laboratories, academic and industrial environments.',
  },
  {
    category: 'Skill Level and Experience',
    description: 'A threat that describes the limitations of the experimental environment of the experiment.',
  },
  {
    category: 'Task',
    description: 'A threat describes task activities, experimental procedure and experimental material.',
  },
  {
    category: 'Work environment',
    description: 'A threat that describes how environments in teams, isolation, or through cultural differences can affect the results.',
  },
  {
    category: 'History',
    description: 'A threat that describes the temporal effect of the treatments in the experiments.',
  },
  {
    category: 'Location',
    description: 'A threat that describes the limitations in the specific conducted site due to economic conditions and organizational and national culture.',
  },
];