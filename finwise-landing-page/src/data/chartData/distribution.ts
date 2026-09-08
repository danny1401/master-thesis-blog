export type DistributionExperiments = {
category: string;
  singleStudies: number;
  familyOfExperiments: number;
  total: number;
}

export const experimentDistribution: DistributionExperiments[] = [
{
    category: 'Articles',
    singleStudies: 49,
    familyOfExperiments: 32,
    total: 81,
  },
  {
    category: 'Experiments',
    singleStudies: 49,
    familyOfExperiments: 101,
    total: 150,
  },
];