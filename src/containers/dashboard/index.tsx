const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="border p-3 rounded-md md:col-span-6">
          <p>Today revenue</p>
          <h2>Rp1.000.000</h2>
        </div>
        <div className="border p-3 rounded-md md md:col-span-6">
          <p>New Customer</p>
          <h2>3</h2>
        </div>
        <div className="border p-3 rounded-md md:col-span-4">
          <p>Today&apos;s Orders</p>
          <h2>100</h2>
        </div>
        <div className="border p-3 rounded-md md:col-span-4">
          <p>Need to sent</p>
          <h2>100</h2>
        </div>
        <div className="border p-3 rounded-md md:col-span-4">
          <p>On Progress</p>
          <h2>100</h2>
        </div>
        <div className="border p-3 rounded-md md:col-span-6">
          <p>Revenue chart</p>
          <div className="h-48"></div>
        </div>
        <div className="border p-3 rounded-md md:col-span-6">
          <p>Product chart</p>
        </div>
        <div className="border p-3 rounded-md md:col-span-12 min-h-48">
          <p>Recent order list</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;