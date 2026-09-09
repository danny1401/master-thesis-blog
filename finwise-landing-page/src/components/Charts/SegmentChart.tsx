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

export function SegmentsChart() {
  return (
    <div className="flex flex-col justify-center w-full my-5 px-10">
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

      <div style={{ height: chartConfig.chartHeight }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={segmentCategories}
            layout="vertical"
            margin={{
              top: 8,
              right: 48,
              bottom: 8,
              left: 8,
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
                fontSize: 13,
              }}
            />

            <YAxis
              type="category"
              dataKey="category"
              width={chartConfig.labelWidth}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: chartConfig.labelColor,
                fontWeight: 600,
                fontSize: 15,
              }}
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
                fontSize: 15,
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
        
        <div className="flex flex-row gap-x-1">
          <div className="bg-primary w-3 h-3" />
          <div>Number of reported threats identified</div>
        </div>
      </ChartFooter>
    </div>
  );
}
