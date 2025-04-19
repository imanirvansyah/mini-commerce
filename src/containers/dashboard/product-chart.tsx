"use client";
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const DATA = [
  { month: "A", desktop: 186, mobile: 80 },
  { month: "B", desktop: 305, mobile: 200 },
  { month: "C", desktop: 237, mobile: 120 },
  { month: "D", desktop: 73, mobile: 190 },
  { month: "E", desktop: 209, mobile: 130 },
  { month: "F", desktop: 214, mobile: 140 },
  { month: "G", desktop: 186, mobile: 80 },
  { month: "H", desktop: 305, mobile: 200 },
  { month: "I", desktop: 237, mobile: 120 },
]

export const ProductChart = () => {

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}