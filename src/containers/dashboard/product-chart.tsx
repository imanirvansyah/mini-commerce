"use client";
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { ProductChart as ProductType } from '@/services/dashboard/dashboard.type';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from 'recharts';

const ProductChart = ({ data }: { data: ProductType[] }) => {

  const chartConfig = {
    desktop: {
      label: "Name",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <Tooltip />
        <Bar dataKey="total" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

export default ProductChart