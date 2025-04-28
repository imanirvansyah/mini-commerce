import ProductDetail from "@/containers/products/detail";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getProductById } from "@/services/product/product";

type pageProps = {
  params: Promise<{ id: string }>
}
export default async function Products({ params }: pageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products-by-id'],
    queryFn: () => getProductById(id)
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail id={id} />
    </HydrationBoundary>
  );
}


