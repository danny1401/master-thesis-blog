import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import ChartTooltip from "@/components/Charts/ChartTooltip";
import ChartHeader from "@/components/Charts/ChartHeader";
import ChartFooter from "@/components/Charts/ChartFooter";

import {
  experimentDistribution,
  DistributionExperiments,
} from "@/data/chartData/distribution";
import { chartConfig } from "@/data/chartConfig";

export const DistributionChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center w-full my-5 px-10">
      <ChartHeader>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Single studies vs. Family of experiments
          </h3>
          <p className="mt-2 text-sm text-secondary">
            Distribution of articles and experiments
          </p>
        </div>
      </ChartHeader>

      {/* Chart */}
      <div style={{ height: chartConfig.chartHeight }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={experimentDistribution}
            barCategoryGap="20%"
            margin={{ top: 25, right: 30, left: 10, bottom: 25 }}
            onMouseMove={(state) => {
              if (
                state.isTooltipActive &&
                typeof state.activeTooltipIndex === "number"
              ) {
                setActiveIndex(state.activeTooltipIndex);
              } else {
                setActiveIndex(null);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke={chartConfig.gridColor}
            />

            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: chartConfig.labelColor,
                fontWeight: 600,
                fontSize: 15,
              }}
            />

            <YAxis
              domain={[0, 160]}
              ticks={[0, 20, 40, 60, 80, 100, 120, 140, 160]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: chartConfig.labelColor,
                fontWeight: 600,
                fontSize: 15,
              }}
              label={{
                value: "Count",
                angle: -90,
                position: "insideLeft",
                style: {
                  fill: chartConfig.labelColor,
                  fontWeight: 600,
                  fontSize: 15,
                },
              }}
            />

            {/* Hover Tooltip replacing the Legend */}
            <Tooltip
              content={
                <ChartTooltip<DistributionExperiments>
                  getTitle={(item) => item.category}
                >
                  {(item, payload) => (
                    <div className="space-y-1.5 text-xs">
                      {payload.map((entry, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-4"
                        >
                          <span className="flex items-center gap-1.5">
                            <span
                              className="inline-block h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-neutral-500">
                              {entry.name}:
                            </span>
                          </span>
                          <span className="font-semibold text-neutral-800">
                            {String(entry.value ?? "")}
                          </span>
                        </div>
                      ))}
                      {payload.length > 1 && (
                        <div className="flex justify-between border-t border-neutral-200 pt-1.5 font-semibold text-amber-600">
                          <span>Total Count:</span>
                          <span>{item.total}</span>
                        </div>
                      )}
                    </div>
                  )}
                </ChartTooltip>
              }
              cursor={{ fill: "rgba(243, 244, 246, 0.4)" }}
            />

            {/* Bottom Stack Segment: Single Studies */}
            <Bar
              dataKey="singleStudies"
              name="Single studies"
              stackId="a"
              maxBarSize={120}
              fill={chartConfig.alternateBarColor}
              animationDuration={900}
              animationEasing="ease-out"
              opacity={activeIndex === null ? 1 : 0.85}
            >
              <LabelList
                dataKey="singleStudies"
                position="center"
                style={{
                  fill: "var(--secondary)",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              />
            </Bar>

            {/* Top Stack Segment: Family of Experiments */}
            <Bar
              dataKey="familyOfExperiments"
              name="Family of experiments"
              radius={[chartConfig.barRadius, chartConfig.barRadius, 0, 0]}
              stackId="a"
              maxBarSize={120}
              fill={chartConfig.barColor}
              animationDuration={900}
              animationEasing="ease-out"
              opacity={activeIndex === null ? 1 : 0.85}
            >
              <LabelList
                dataKey="familyOfExperiments"
                position="center"
                style={{
                  fill: "var(--secondary)",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              />
              {/* Dynamically adjust total label based on active view */}
              <LabelList
                dataKey={"total"}
                position="top"
                style={{
                  fill: "var(--secondary)",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ChartFooter>
        <p>Hover over a bar to explore the data</p>

        <div className="flex flex-row gap-x-5">
          <div className="flex flex-row gap-x-1">
            <div className="bg-bar p-2" />
            <div>Single studies</div>
          </div>
          <div className="flex flex-row gap-x-1">
            <div className="bg-primary p-2" />
            <div>Family of experiments</div>
          </div>
        </div>
      </ChartFooter>
    </div>
  );
};

export default DistributionChart;
