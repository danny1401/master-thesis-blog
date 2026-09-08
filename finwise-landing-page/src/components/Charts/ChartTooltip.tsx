import { ReactNode } from "react";

type ChartTooltipProps<T> = {
  active?: boolean;
  payload?: Array<{
    payload: T;
  }>;
  getTitle: (item: T) => string;
  children: (item: T) => ReactNode;
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
      {children(item)}
    </div>
  );
}