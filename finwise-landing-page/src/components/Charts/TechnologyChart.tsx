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
import { technologyThreats, TechnologyThreats } from "@/data/chartData/technology";
import { chartConfig } from "@/data/chartConfig";

export function TechnologyChart() {
  return (
    <div className="flex flex-col justify-center w-full my-5 px-10">
      {/* Header */}
      <ChartHeader>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Technology threats
          </h3>
          <p className="mt-2 text-sm text-secondary">
            Frequency across {thesisData.method} METHOD segments
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-3xl font-semibold tracking-tight">{thesisData.method_threats}</p>
          <p className="text-xs text-secondary">threats</p>
        </div>
      </ChartHeader>

      <div style={{ height: chartConfig.chartHeight }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={technologyThreats}
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
              domain={[0, 20]} 
              ticks={[0, 5, 10, 15, 20]}
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 11,
                fill: chartConfig.axisColor,
              }}
            />

            <YAxis
              type="category"
              dataKey="category"
              width={150}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: chartConfig.labelColor,
                fontSize: 12,
                fontWeight: 500,
              }}
            />

            <Tooltip
              cursor={{
                fill: "rgba(0, 0, 0, 0.025)",
              }}
              content={
                <ChartTooltip<TechnologyThreats>
                  getTitle={(item) => item.category}
                >
                  {(item) => (
                    <>
                      <p className="text-xs leading-relaxed text-[var(--chart-tooltip-text)]">
                        {item.definition}
                      </p>

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
              barSize={20}
              animationDuration={900}
              animationEasing="ease-out"
              label={{
                position: "right",
                fill: "var(--secondary)",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {technologyThreats.map((item) => (
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
        <p>Number of reported threats identified</p>
      </ChartFooter>
    </div>
  );
}
