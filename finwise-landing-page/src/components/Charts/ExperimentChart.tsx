import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

type ExperimentData = {
  type: string;
  frequency: number;
  percentage: number;
};

const data: ExperimentData[] = [
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

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{
    payload: ExperimentData;
  }>;
}) {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-xl">
      <p className="mb-3 text-sm font-medium text-zinc-900">{item.type}</p>

      <div className="flex gap-6">
        <div>
          <p className="text-xs text-zinc-400">Frequency</p>
          <p className="mt-0.5 text-lg font-semibold text-zinc-900">
            {item.frequency}
          </p>
        </div>

        <div>
          <p className="text-xs text-zinc-400">Percentage</p>
          <p className="mt-0.5 text-lg font-semibold text-zinc-900">
            {item.percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ExperimentChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Types of experiments
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            Frequency across 150 articles
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-3xl font-semibold tracking-tight text-zinc-900">
            150
          </p>
          <p className="text-xs text-zinc-400">articles</p>
        </div>
      </div>

      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 4,
              right: 24,
              bottom: 4,
              left: 8,
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid
              horizontal={false}
              strokeDasharray="2 4"
              className="stroke-zinc-200"
            />

            <XAxis
              type="number"
              domain={[0, 105]}
              ticks={[0, 25, 50, 75, 100]}
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 11,
                fill: "#a1a1aa",
              }}
            />

            <YAxis
              type="category"
              dataKey="type"
              width={165}
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 12,
                fill: "#52525b",
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: "rgba(0, 0, 0, 0.025)",
              }}
            />

            <Bar
              dataKey="frequency"
              radius={[0, 6, 6, 0]}
              barSize={50}
              animationDuration={900}
              animationEasing="ease-out"
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  className="transition-opacity duration-200"
                  fillOpacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.25
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs text-zinc-400">
          Hover over a bar to explore the data
        </p>

        <p className="text-xs text-zinc-400">Frequency</p>
      </div>
    </div>
  );
}
