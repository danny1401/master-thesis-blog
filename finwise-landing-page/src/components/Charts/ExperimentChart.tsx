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

import ChartTooltip from "@/components/Charts/ChartTooltip";
import ChartHeader from "@/components/Charts/ChartHeader";
import ChartFooter from "@/components/Charts/ChartFooter";

import { thesisData } from "@/data/thesis";
import { experiments, ExperimentData } from "@/data/chartData/experiment";
import { chartConfig } from "@/data/chartConfig";

export default function ExperimentChart() {
  return (
    <div className="w-full my-5 px-10">
      <ChartHeader>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Types of experiments
          </h3>
          <p className="mt-2 text-sm text-secondary">
            Frequency across {thesisData.articles} articles
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-3xl font-semibold tracking-tight">{thesisData.experiments}</p>
          <p className="text-xs text-secondary">experiments</p>
        </div>
      </ChartHeader>

      {/* Chart */}
      <div style={{ height: chartConfig.chartHeight }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={experiments}
            layout="vertical"
            margin={{
              top: 4,
              right: 24,
              bottom: 4,
              left: 8,
            }}
          >
            {/* Grid */}
            <CartesianGrid
              horizontal={false}
              strokeDasharray="2 4"
              stroke={chartConfig.gridColor}
            />

            {/* X Axis */}
            <XAxis
              type="number"
              domain={[0, 100]}
              ticks={chartConfig.axisTicks}
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 11,
                fill: chartConfig.axisColor,
              }}
            />

            {/* Y Axis */}
            <YAxis
              type="category"
              dataKey="type"
              width={170}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: chartConfig.labelColor,
                fontSize: 12,
                fontWeight: 500,
              }}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(243, 244, 246, 0.3)" }}
              content={
                <ChartTooltip<ExperimentData> getTitle={(item) => item.type}>
                  {(item) => (
                    <div className="flex gap-6">
                      <div>
                        <p className="text-xs text-neutral-500">Frequency</p>

                        <p className="mt-0.5 text-lg font-semibold text-neutral-800">
                          {item.frequency}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-neutral-500">Percentage</p>

                        <p className="mt-0.5 text-lg font-semibold text-neutral-800">
                          {item.percentage}%
                        </p>
                      </div>
                    </div>
                  )}
                </ChartTooltip>
              }
              wrapperStyle={{
                outline: "none",
                zIndex: 50,
              }}
            />

            {/* Bars */}
            <Bar
              dataKey="frequency"
              radius={[0, chartConfig.barRadius, chartConfig.barRadius, 0]}
              barSize={chartConfig.barHeight}
              animationDuration={900}
              animationEasing="ease-out"
              label={{
                position: "right",
                fill: "var(--secondary)",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {experiments.map((_, index) => (
                <Cell
                  key={index}
                  fill={chartConfig.barColor}
                  style={{
                    transition: "fill 200ms ease, fill-opacity 200ms ease",
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ChartFooter>
        <p>Hover over a bar to explore the data</p>
        
        <div className="flex flex-row gap-x-1">
          <div className="bg-primary w-3 h-3" />
          <div>Frequency</div>
        </div>
      </ChartFooter>
    </div>
  );
}
