type menu = {
  title: string;
  icon: string;
  url: string;
}
export const MENUS: menu[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: "home",
  },
  {
    title: "Products",
    url: "/products",
    icon: "package",
  },
  {
    title: "Orders",
    url: "/orders",
    icon: "shopping-cart",
  },
  {
    title: "Customers",
    url: "/customers",
    icon: "users",
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: "chart-bar-big",
  }
]
