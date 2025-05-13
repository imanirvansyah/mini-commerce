"use client";
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  Tooltip,
  XAxis
} from 'recharts';

export type TDataBarChart = {
  name: string;
  value: number;
}

export interface IBarChart {
  data: TDataBarChart[];
  config: ChartConfig;
  className?: ClassValue;
}

const BarChart = ({ data, config, className }: IBarChart) => {
  if (!data?.length) {
    return (
      <ChartContainer config={config} className={cn(className)}>
        <div className="text-muted-foreground text-center py-6 text-sm">
          No data available
        </div>
      </ChartContainer>
    );
  }

  return (
    <ChartContainer config={config} className={cn(className)}>
      <BarChartPrimitive data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
        <Tooltip />
        <Bar dataKey="value" fill="var(--color-desktop)" radius={4} />
      </BarChartPrimitive>
    </ChartContainer >
  );
}

export default BarChart;
