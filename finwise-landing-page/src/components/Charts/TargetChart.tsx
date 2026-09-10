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
import { targetEnvironments, TargetEnvironments } from "@/data/chartData/target";
import { chartConfig } from "@/data/chartConfig";
import { ChartYAxisTick } from "@/components/Charts/ChartYAxisTick";

export function TargetChart() {
  return (
    // Reduced container horizontal padding on mobile viewports (px-4 sm:px-10)
    <div className="flex flex-col justify-center w-full my-5 px-4 sm:px-10">
      {/* Header */}
      <ChartHeader>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Target environments
          </h3>
          <p className="mt-2 text-sm text-secondary">
            The chart considers one target environment for every article.
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-3xl font-semibold tracking-tight">
            {thesisData.articles}
          </p>
          <p className="text-xs text-secondary">target environments</p>
        </div>
      </ChartHeader>

      <div 
        style={{ height: chartConfig.chartHeight }} 
        className="w-full min-h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={targetEnvironments}
            layout="vertical"
            margin={{
              top: 8,
              right: 28,
              bottom: 8,
              left: 0,
            }}
            barCategoryGap="28%"
          >
            {/* Grid */}
            <CartesianGrid
              horizontal={false}
              strokeDasharray="2 4"
              stroke={chartConfig.gridColor}
            />

            <XAxis 
              type="number" 
              domain={[0, 50]} 
              ticks={[0, 10, 20, 30, 40, 50]}
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 11,
                fill: chartConfig.axisColor,
              }}
            />

            {/* Y Axis - Applied text wrapping tick & interval={0} for mobile compatibility */}
            <YAxis
              type="category"
              dataKey="category"
              width={110}
              axisLine={false}
              tickLine={false}
              tick={<ChartYAxisTick />}
              interval={0}
            />

            <Tooltip
              cursor={{ fill: "rgba(243, 244, 246, 0.3)" }}
              content={
                <ChartTooltip<TargetEnvironments>
                  getTitle={(item) => item.category}
                >
                  {(item) => (
                    <>
                      <div className="text-[10px] tracking-wider text-[var(--chart-tooltip-muted)]">
                        Threat frequency: {item.count}
                      </div>
                    </>
                  )}
                </ChartTooltip>
              }
              wrapperStyle={{
                outline: "none",
                zIndex: 50,
              }}
            />

            <Bar
              dataKey="count"
              radius={[0, chartConfig.barRadius, chartConfig.barRadius, 0]}
              barSize={50}
              animationDuration={900}
              animationEasing="ease-out"
              label={{
                position: "right",
                fill: "var(--secondary)",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {targetEnvironments.map((item) => (
                <Cell
                  key={item.category}
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
        
        <div className="flex flex-row gap-x-1 items-center">
          <div className="bg-primary w-3 h-3 rounded-sm" />
          <div className="text-xs">Number of reported environments</div>
        </div>
      </ChartFooter>
    </div>
  );
}