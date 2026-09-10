export type ExperimentData = {
  type: string;
  frequency: number;
  percentage: number;
};

export const experiments: ExperimentData[] = [
  {
    type: "Controlled experiment",
    frequency: 99,
    percentage: 66,
  },
  {
    type: "Quasi experiment",
    frequency: 17,
    percentage: 11.3,
  },
  {
    type: "Replication",
    frequency: 17,
    percentage: 11.3,
  },
  {
    type: "Empirical study",
    frequency: 7,
    percentage: 4.6,
  },
  {
    type: "Other",
    frequency: 6,
    percentage: 4.0,
  },
  {
    type: "Experimental study",
    frequency: 4,
    percentage: 2.6,
  },
  {
    type: "Survey",
    frequency: 3,
    percentage: 2.0,
  },
  {
    type: "Semi-controlled experiments",
    frequency: 2,
    percentage: 1.3,
  },
  {
    type: "Case study",
    frequency: 2,
    percentage: 1.3,
  },
];