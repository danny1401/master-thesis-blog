export interface Guideline {
  id: string;
  title: string;
  description: React.ReactNode;
}

export const guidelinesData: Guideline[] = [
  {
    id: 'G1',
    title: 'Report target environment',
    description: 'Clearly report the target environment that the study intends to generalize to.',
  },
  {
    id: 'G2',
    title: 'Discuss alignment to target environment',
    description: 'Clearly report the experimental environment(s) and the threat to whether it aligns with the target environment or not.',
  },
  {
    id: 'G3',
    title: 'Report single study or family of experiments',
    description: 'Clearly report if it was a single study or family of experiments.',
  },
  {
    id: 'G4',
    title: 'Discuss alignment to target environment',
    description: (
      <div>
        Report the threat of context dependent environment where generalization is limited to the experimental environment(s) if:
        <ul className="text-xs mt-2 list-inside list-disc space-y-1 text-foreground-accent">
          <li>misaligned with the target environment; or</li>
          <li>
            the study did not vary contextual factors relevant to the target environment in single studies, or family of experiments, or in any type of replication
          </li>
        </ul>
      </div>
    ),
  },
];