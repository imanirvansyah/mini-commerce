import { ROUTES } from "./route"

type menu = {
  title: string;
  icon: string;
  url: string;
}
export const MENUS: menu[] = [
  {
    title: "Dashboard",
    url: ROUTES.DASHBOARD,
    icon: "home",
  },
  {
    title: "Products",
    url: ROUTES.PRODUCT,
    icon: "package",
  },
  {
    title: "Orders",
    url: ROUTES.ORDER,
    icon: "shopping-cart",
  },
  {
    title: "Customers",
    url: ROUTES.CUSTOMER,
    icon: "users",
  },
  {
    title: "Analytics",
    url: ROUTES.ANALYTIC,
    icon: "chart-bar-big",
  }
]

export const MENUS_FOOTER: menu[] = []

