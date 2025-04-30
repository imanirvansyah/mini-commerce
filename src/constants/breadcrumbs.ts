import { ROUTES } from "./route";

type Tbreadcrumb = {
  title: string;
  url: string;
}
const DASHBOARD_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Dashboard",
    url: ROUTES.DASHBOARD,
  }
]
const PRODUCT_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Product",
    url: ROUTES.PRODUCT,
  }
]
const PRODUCT_DETAIL_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Product",
    url: ROUTES.PRODUCT,
  },
  {
    title: "Detail",
    url: ROUTES.PRODUCT,
  },
]
const ORDER_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Order",
    url: ROUTES.ORDER,
  }
]
const CUSTOMER_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Customer",
    url: ROUTES.CUSTOMER,
  }
]
const CUSTOMER_DETAIL_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Detail",
    url: ROUTES.CUSTOMER,
  }
]
const ANALYTIC_BREADCRUMBS: Tbreadcrumb[] = [
  {
    title: "Analytic",
    url: ROUTES.ANALYTIC,
  }
]

export const BREADCRUMBS: Record<string, Tbreadcrumb[]> = {
  dashboard: DASHBOARD_BREADCRUMBS,
  products: PRODUCT_BREADCRUMBS,
  "products/detail": PRODUCT_DETAIL_BREADCRUMBS,
  orders: ORDER_BREADCRUMBS,
  customers: CUSTOMER_BREADCRUMBS,
  "customers/detail": CUSTOMER_DETAIL_BREADCRUMBS,
  analytics: ANALYTIC_BREADCRUMBS
}