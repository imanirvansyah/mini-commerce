"use client";
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Line, LineChart as LineChartPrimitive, XAxis } from 'recharts';

export type TdataLineChart = {
  name: string;
  value: number;
}

export interface ILineChart {
  data: TdataLineChart[];
  config: ChartConfig;
  className?: ClassValue;
}

const LineChart = ({ data, config, className }: ILineChart) => {
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
      <LineChartPrimitive accessibilityLayer data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
      </LineChartPrimitive>
    </ChartContainer>
  )
}

export default LineChart