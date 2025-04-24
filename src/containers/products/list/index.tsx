"use client"

import Link from "next/link";
import FormCreate from "../form-create";
import { Card as CardComponent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FilterIcon } from "lucide-react"
import { useProducts } from "./hooks/useProduct";

const ProductList = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="w-full h-full overflow-scroll mt-12">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-start gap-2 mb-3">
          <Input placeholder="Search product here..." className="w-fit" />
          <Button>Search</Button>
          <Button variant={"outline"} size={"icon"}><FilterIcon /></Button>
        </div>
        <FormCreate />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {data?.map((product, index) => (
          <Card key={index} product={{
            id: index,
            name: product.productName,
            description: product.productDescription,
          }} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;



export const Card: React.FC<{
  product: ProductItemProps;
}> = (props) => {
  const { product } = props;
  return (
    <Link href={`/products/${product.id}`}>
      <CardComponent>
        <div className="h-56 w-full bg-gray-200 flex items-center justify-center rounded-t-md">
          <ImageIcon className="text-slate-500" />
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
      </CardComponent>
    </Link>
  );
}

// type ProductListProps = {
//   products: ProductItemProps[];
// }

type ProductItemProps = { id: number; name: string; description: string }