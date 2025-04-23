import Link from "next/link";
import FormCreate from "../form-create";
import { Card as CardComponent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const ProductList = () => {
  return (
    <div>
      <div className="mt-12 mb-6">
        <FormCreate />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Card product={{ id: 1, name: 'Product 1', description: 'Description 1' }} />
        <Card product={{ id: 2, name: 'Product 2', description: 'Description 2' }} />
        <Card product={{ id: 3, name: 'Product 3', description: 'Description 3' }} />
        <Card product={{ id: 4, name: 'Product 4', description: 'Description 3' }} />
        <Card product={{ id: 1, name: 'Product 1', description: 'Description 1' }} />
        <Card product={{ id: 2, name: 'Product 2', description: 'Description 2' }} />
        <Card product={{ id: 3, name: 'Product 3', description: 'Description 3' }} />
        <Card product={{ id: 4, name: 'Product 4', description: 'Description 3' }} />
        <Card product={{ id: 1, name: 'Product 1', description: 'Description 1' }} />
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