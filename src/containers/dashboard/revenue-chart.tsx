"use client";
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { RevenueChart as RevenueType } from '@/services/dashboard/dashboard.type';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export const RevenueChart = ({ data }: { data: RevenueType[] }) => {

  const chartConfig = {
    desktop: {
      label: "Month",
      color: "#2563eb",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ChartContainer>
  )
}