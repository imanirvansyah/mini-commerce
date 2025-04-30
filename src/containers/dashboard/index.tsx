"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RecentOrders from "./recent-orders";
import { useDashboard } from "./hooks/useDashboard";
import LoadingPage from "@/app/(features)/dashboard/loading";
import dynamic from "next/dynamic";

const ProductChart = dynamic(() => import("./product-chart"), { ssr: false })
const RevenueChart = dynamic(() => import("./revenue-chart"), { ssr: false })

const Dashboard = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>Today revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">Rp {data?.data.todayRevenue}</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>Today&apos;s Orders</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{data?.data.todaysOrders}</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>Need to sent</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {data?.data.NeedToShip}
          </CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>On Progress</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {data?.data.onHoldOrders}
          </CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-6">
        <CardHeader>
          <CardTitle >Revenue chart</CardTitle>
          <CardDescription>Revenue of this year</CardDescription>
        </CardHeader>
        <CardContent>
          <RevenueChart data={data?.data.chart.revenue || []} />
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-6">
        <CardHeader>
          <CardTitle >Product chart</CardTitle>
          <CardDescription>Higher are better</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductChart data={data?.data.chart.products || []} />
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-12">
        <CardHeader>
          <CardTitle >Recent order list</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentOrders data={data?.data.orderList || []} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;