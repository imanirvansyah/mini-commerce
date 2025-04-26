export interface Order {
  name: string;
  orderId: string;
  shippingStatus: string;
  totalPrice: number;
  items: {
    name: string;
    variant: string;
    qty: number;
    price: number;
  }[]
}