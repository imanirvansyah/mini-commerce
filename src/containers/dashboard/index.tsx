"use client"

import LoadingPage from "@/app/(features)/dashboard/loading";
import BarChart from "@/components/fragments/chart/bar";
import LineChart from "@/components/fragments/chart/line";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboard } from "./hooks/useDashboard";
import RecentOrders from "./recent-orders";

const revenueChartConfig = {
  desktop: {
    label: "Month",
    color: "hsl(var(--primary))",
  },
}

const productChartConfig = {
  desktop: {
    label: "Name",
    color: "hsl(var(--primary))",
  },
}

const Dashboard = () => {
  const {
    todayRevenue,
    todaysOrders,
    NeedToShip,
    onHoldOrders,
    revenueChart,
    productChart,
    orderList,
    isPending
  } = useDashboard();

  if (isPending) {
    return <LoadingPage />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
      <Container
        title={`Rp ${todayRevenue}`}
        subtitle="Today revenue"
        column={12}
        mdColumn={3}
      />
      <Container
        title={`Rp ${todaysOrders}`}
        subtitle="Today&apos;s Orders"
        column={12}
        mdColumn={3}
      />
      <Container
        title={`Rp ${NeedToShip}`}
        subtitle="Need to sent"
        column={12}
        mdColumn={3}
      />
      <Container
        title={`Rp ${onHoldOrders}`}
        subtitle="On Progress"
        column={12}
        mdColumn={3}
      />
      <Container
        title={`Revenue of this year`}
        subtitle="Revenue chart"
        column={12}
        mdColumn={6}
      >
        <LineChart data={revenueChart || []} config={revenueChartConfig} />
      </Container>
      <Container
        title={`Higher are better`}
        subtitle="Product chart"
        column={12}
        mdColumn={6}
      >
        <BarChart data={productChart || []} config={productChartConfig} />
      </Container>
      <Container
        title={`Recent order list`}
        subtitle=""
        column={12}
        mdColumn={12}
      >
        <RecentOrders data={orderList || []} />
      </Container>
    </div>
  );
}

export default Dashboard;

type containerProps = {
  column: number;
  mdColumn: number;
  title: string;
  subtitle: string;
  children?: React.ReactNode
}

const Container = ({
  column,
  mdColumn,
  title,
  subtitle,
  children
}: containerProps) => {
  return (
    <Card className={`col-span-${column}  md:col-span-${mdColumn}`}>
      <CardHeader>
        <CardDescription>{subtitle}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{title}</CardTitle>
      </CardHeader>
      {!!children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  )
}