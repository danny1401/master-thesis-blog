import { chartConfig } from "@/data/chartConfig";

interface ChartYAxisTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
}

// Custom SVG text node for wrapping multi-word category titles cleanly
export function ChartYAxisTick({ x = 0, y = 0, payload }: ChartYAxisTickProps) {
  if (!payload?.value) return null;

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
        className="text-xs font-medium"
      >
        {lines.map((line, index) => (
          <tspan key={index} x={-8} dy={index === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}