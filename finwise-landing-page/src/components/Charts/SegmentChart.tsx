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
import { SegmentCategory, segmentCategories } from "@/data/chartData/segment";
import { chartConfig } from "@/data/chartConfig";

// SVG text node that automatically wraps multi-word segment labels onto 2 lines
const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const words = payload.value.split(" ");
  
  let lines: string[] = [];
  if (words.length > 1 && payload.value.length > 14) {
    const mid = Math.ceil(words.length / 2);
    lines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  } else {
    lines = [payload.value];
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-8}
        y={lines.length > 1 ? -4 : 4}
        textAnchor="end"
        fill={chartConfig.labelColor}
        className="text-xs font-semibold"
      >
        {lines.map((line, index) => (
          <tspan key={index} x={-8} dy={index === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

export function SegmentsChart() {
  return (
    // Reduced container horizontal padding on mobile viewports
    <div className="flex flex-col justify-center w-full my-5 px-4 sm:px-10">
      <ChartHeader>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Segment Categories
          </h3>
          <p className="mt-2 text-sm text-secondary">
            Frequency across {thesisData.articles} articles
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-3xl font-semibold tracking-tight">
            {thesisData.segments}
          </p>
          <p className="text-xs text-secondary">segments</p>
        </div>
      </ChartHeader>

      <div 
        style={{ height: chartConfig.chartHeight }} 
        className="w-full min-h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={segmentCategories}
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
              domain={[0, 100]}
              ticks={chartConfig.axisTicks}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: chartConfig.axisColor,
                fontWeight: 600,
                fontSize: 12,
              }}
            />

            {/* Y Axis - Replaced hardcoded width with a tighter 110px and custom tick wrapper */}
            <YAxis
              type="category"
              dataKey="category"
              width={110}
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
              interval={0}
            />

            <Tooltip
              cursor={{ fill: "rgba(243, 244, 246, 0.3)" }}
              content={
                <ChartTooltip<SegmentCategory>
                  getTitle={(item) => item.category}
                >
                  {(item) => (
                    <>
                      <p className="text-xs leading-relaxed text-[var(--chart-tooltip-text)]">
                        {item.definition}
                      </p>

                      <p className="mt-2 text-[10px] tracking-wider text-[var(--chart-tooltip-muted)]">
                        Segment frequency: {item.count}
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
              {segmentCategories.map((item) => (
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
          <div className="text-xs">Number of reported threats identified</div>
        </div>
      </ChartFooter>
    </div>
  );
}