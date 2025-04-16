import { CardOrder } from "@/components/fragments/card-order"

const DetailCustomer = () => {
  return (
    <div>
      <span className="text-sm italic">Customer id</span>
      <p>Customer name</p>
      <p>Customer@mail.com</p>
      <p>Total PurchasedRp1.000.000</p>
      <p>Last Purchase: January 13, 2025</p>
      <hr className="my-4" />
      <h1 className="text-lg font-bold">Purchase History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
      </div>
    </div>
  )
}

export default DetailCustomer