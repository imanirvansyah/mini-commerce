import Link from "next/link"

const BottomBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 absolute bottom-0 w-full md:hidden">
      {NAV_ITEMS.map((item) => (
        <Link href={item.path} key={item.name} className="flex flex-col items-center text-white cursor-pointer hover:bg-gray-700 rounded-md bg-gray-800">
          <i className={`icon-${item.icon}`}></i>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default BottomBar

export type NavItem = {
  name: string
  icon: string
  path: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', icon: 'home', path: '/' },
  { name: 'Products', icon: 'products', path: '/products' },
  { name: 'Orders', icon: 'orders', path: '/orders' },
  { name: 'Customers', icon: 'customers', path: '/customers' },
  { name: 'Analytics', icon: 'analytics', path: '/analytics' },
]