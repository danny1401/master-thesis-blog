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
import { experimentalEnvironments, ExperimentalEnvironments } from "@/data/chartData/environment";
import { chartConfig } from "@/data/chartConfig";
import { ChartYAxisTick } from "@/components/Charts/ChartYAxisTick";

export function EnvironmentChart() {
  return (
    // Reduced container horizontal padding on mobile screens (px-4 sm:px-10)
    <div className="flex flex-col justify-center w-full my-5 px-4 sm:px-10">
      {/* Header */}
      <ChartHeader>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Experimental environments
          </h3>
          <p className="mt-2 text-sm text-secondary">
            Few experiments had reported more than a single environments.
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-3xl font-semibold tracking-tight">
            {thesisData.experimental_environments}
          </p>
          <p className="text-xs text-secondary">environments</p>
        </div>
      </ChartHeader>

      <div 
        style={{ height: chartConfig.chartHeight }} 
        className="w-full min-h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={experimentalEnvironments}
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
              domain={[0, 60]} 
              ticks={[0, 15, 30, 45, 60]}
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 11,
                fill: chartConfig.axisColor,
              }}
            />

            {/* Y Axis - Added ChartYAxisTick & interval={0} to preserve mobile labels */}
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
                <ChartTooltip<ExperimentalEnvironments>
                  getTitle={(item) => item.category}
                >
                  {(item) => (
                    <>
                      <p className="mt-2 text-[10px] tracking-wider text-[var(--chart-tooltip-muted)]">
                        Threat frequency: {item.count}
                      </p>
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
              barSize={28}
              animationDuration={900}
              animationEasing="ease-out"
              label={{
                position: "right",
                fill: "var(--secondary)",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {experimentalEnvironments.map((item) => (
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