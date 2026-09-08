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
];