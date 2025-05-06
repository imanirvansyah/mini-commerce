import DetailCustomer from "@/containers/customers/detail";
import { Suspense } from "react";
import LoadingCustomer from "./loading";

export default function Customers() {
  return (
    <Suspense fallback={<LoadingCustomer />}>
      <DetailCustomer />
    </Suspense>
  );
}