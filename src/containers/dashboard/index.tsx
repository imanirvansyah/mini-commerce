
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "./revenue-chart";
import { ProductChart } from "./product-chart";
import { RecentOrders } from "./recent-orders";

const Dashboard = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>Today revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">Rp1.000.000</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>Today&apos;s Orders</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">3</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>

      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>Need to sent</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">3</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-3">
        <CardHeader>
          <CardDescription>On Progress</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">3</CardTitle>
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
          <RevenueChart />
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-6">
        <CardHeader>
          <CardTitle >Product chart</CardTitle>
          <CardDescription>Higher are better</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductChart />
        </CardContent>
      </Card>
      <Card className="col-span-12  md:col-span-12">
        <CardHeader>
          <CardTitle >Recent order list</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentOrders />
        </CardContent>
      </Card>

    </div>
  );
}

export default Dashboard;