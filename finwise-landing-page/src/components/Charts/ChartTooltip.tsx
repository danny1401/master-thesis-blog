import { ReactNode } from "react";

type ChartTooltipEntry<T> = {
  payload: T;
  dataKey?: string | number;
  value?: unknown;
  color?: string;
  name?: string;
};

type ChartTooltipProps<T> = {
  active?: boolean;
  payload?: Array<ChartTooltipEntry<T>>;
  getTitle: (item: T) => string;
  children: (item: T, payload: Array<ChartTooltipEntry<T>>) => ReactNode;
};

export default function ChartTooltip<T>({
  active,
  payload,
  getTitle,
  children,
}: ChartTooltipProps<T>) {
  if (!active || !payload?.length) {
    return null;
  }

  const item = payload[0].payload;

  return (
    <div className="max-w-xs rounded-xl px-4 py-3 shadow-xl text-neutral-800 bg-white">
      <p className="mb-3 text-sm font-medium">{getTitle(item)}</p>
      {children(item, payload)}
    </div>
  );
}