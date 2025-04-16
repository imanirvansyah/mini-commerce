import { CardOrder } from "@/components/fragments/card-order"

const ListOrders = () => {
  return (
    <div className="container">
      <h1 className="text-xl font-bold">List Orders</h1>
      <p>List of orders will be displayed here.</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="p-2 bg-slate-800 cursor-pointer rounded-md">All</span>
        <span className="p-2 bg-slate-800 cursor-pointer rounded-md">Uncomfirmed</span>
        <span className="p-2 bg-slate-800 cursor-pointer rounded-md">Need to send</span>
        <span className="p-2 bg-slate-800 cursor-pointer rounded-md">Sent</span>
        <span className="p-2 bg-slate-800 cursor-pointer rounded-md">Finished</span>
        <span className="p-2 bg-slate-800 cursor-pointer rounded-md">Rejected</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
        <CardOrder />
        <CardOrder />
        <CardOrder />
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




export default ListOrders