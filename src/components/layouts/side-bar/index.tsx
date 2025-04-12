import Link from "next/link"

const Sidebar = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col w-64 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0">
        <h1 className="text-2xl font-bold mb-4">Logo</h1>
        <nav className="flex flex-col space-y-2">
          <Link href="/" className="hover:bg-gray-700 p-2 rounded-md">Home</Link>
          <Link href="/products" className="hover:bg-gray-700 p-2 rounded-md">Products</Link>
          <Link href="/orders" className="hover:bg-gray-700 p-2 rounded-md">Orders</Link>
          <Link href="/customers" className="hover:bg-gray-700 p-2 rounded-md">Customers</Link>
          <Link href="/analytics" className="hover:bg-gray-700 p-2 rounded-md">Analytics</Link>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar