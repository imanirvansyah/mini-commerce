import Link from "next/link";

const ProductList = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Product List</h1>
        <button>Add Product</button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-12">
        <Card product={{ id: 1, name: 'Product 1', description: 'Description 1' }} />
        <Card product={{ id: 2, name: 'Product 2', description: 'Description 2' }} />
        <Card product={{ id: 3, name: 'Product 3', description: 'Description 3' }} />
        <Card product={{ id: 4, name: 'Product 4', description: 'Description 3' }} />
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
    <Link href={`/products/${product.id}`} className="card border p-3">
      <h2 className="mb-3 font-bold">{product.name}</h2>
      <p>{product.description}</p>
    </Link>
  );
}

// type ProductListProps = {
//   products: ProductItemProps[];
// }

type ProductItemProps = { id: number; name: string; description: string }