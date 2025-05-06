"use client"
import ImageFallback from "@/components/fragments/image-fallback";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, StarIcon } from "lucide-react";
import { useDetail } from "./hooks/useDetail";
import { Badge } from "@/components/ui/badge";
import LoadingProduct from "@/app/(features)/products/[id]/loading";
import { CardReview } from "@/components/fragments/card-review";
import { useState } from "react";
import { cn } from "@/lib/utils";


export type ProductDetailProps = {
  id: string;
}

const ProductDetail = ({ id }: ProductDetailProps) => {
  const { data, isLoading } = useDetail(id);
  const [star, setStar] = useState(5);

  if (isLoading) return <LoadingProduct />
  console.log(star)
  return (
    <>
      <Button size="sm" className="mb-3"><Edit />Edit Product</Button>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="hidden md:w-20 h-full md:flex md:flex-col gap-3">
          <ImageFallback />
          <ImageFallback />
          <ImageFallback />
          <ImageFallback />
          <ImageFallback />
        </div>
        <div className="flex-1 max-w-[500px]">
          <ImageFallback />
        </div>
        <div className="md:w-20 h-full flex md:hidden md:flex-col gap-3">
          <ImageFallback />
          <ImageFallback />
          <ImageFallback />
          <ImageFallback />
          <ImageFallback />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold mb-1">{data?.productName}</h1>
              <h2>Price: Rp{data?.price} </h2>
            </div>
          </div>
          <Separator className="my-4" />
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2 mb-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="review">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <p className="mb-5">&quot;{data?.productDescription}&quot;</p>
              <h6 className="font-bold mb-1">Size</h6>
              {data?.isAllSize && <p>The product is All sized</p>}
              {!data?.isAllSize && data?.size?.map((item, index) => {
                return (
                  <Badge className="mr-1" key={index}>{item.name}</Badge>
                )
              })}

              <h6 className="font-bold mt-6 mb-1">Variant</h6>
              {data?.isNoVariant && <p>There&apos;s no variant for this product</p>}
              <div className="flex flex-wrap gap-2 mb-2 overflow-auto">
                {!data?.isNoVariant && data?.variant?.map((item, index) => {
                  return (
                    <div key={index} className="border p-2 mb-2 px-5 rounded-md flex gap-3 items-center justify-between">
                      <div>
                        <p>{item.name}</p>
                        <p className="text-muted-foreground text-sm">Available: {item.qty}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
            <TabsContent value="review">
              <div className="flex flex-wrap gap-2 ">
                {Array.from({ length: 5 }, (_, index) => (
                  <Button variant="outline" size="sm" className={cn("mb-3", star === 5 - index && "bg-primary/10")} key={index} onClick={() => setStar(5 - index)}>
                    <div className="flex items-center">
                      {Array.from({ length: 5 - index }, (_, i) => (
                        <StarIcon className="text-primary text-sm" key={i} />
                      ))}
                    </div>
                  </Button>
                ))}
              </div>
              <div className="max-h-[250px] overflow-auto">
                <CardReview />
                <CardReview />
                <CardReview />
                <CardReview />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;

