import { BadgeProps } from "@/components/ui/badge";

export type Product = {
  name: string;
  variant: string;
  qty: number;
};

export type PaymentStatus = {
  label: string;
  variant: BadgeProps["variant"];
};

export type ShippingStatus = {
  label: string;
  variant: BadgeProps["variant"];
};

export type Shipping = {
  id: string;
  name: string;
  status: ShippingStatus;
};

export type Order = {
  id: string;
  product: Product[];
  customerName: string;
  datePurchase: string;
  totalPurchase: number;
  paymentStatus: PaymentStatus;
  shipping: Shipping;
};