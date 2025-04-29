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

export const MENUS_FOOTER: menu[] = []
// export const MENUS_FOOTER: menu[] = [
//   {
//     title: "Account",
//     url: "/account",
//     icon: "account",
//   },
//   {
//     title: "Notifications",
//     url: "/notification",
//     icon: "notification",
//   },
// ]