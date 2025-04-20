import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, StarIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

const ProductDetail = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        <div className="my-3 flex-1 min-w-[33%] max-w-[500px]">
          <div className="w-full aspect-square bg-gray-200 rounded-md flex items-center justify-center">
            <ImageIcon className="text-slate-500" />
          </div>
          <div className="flex mt-3 gap-3">
            <div className="w-1/2 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
            <div className="w-1/2 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
            <div className="w-1/2 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
            <div className="w-1/2 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="my-5">
            <h1 className="text-3xl font-bold">Product Name <Button size="icon" variant="ghost"><Edit /></Button></h1>
            <h2 className="text-lg">Price: $100 <Button size="icon" variant="ghost"><Edit /></Button></h2>
            <span className="text-sm italic">Sell more than 10k item this month</span>
          </div>
          <hr className="my-3" />
          <div className="my-5">
            <h5 className="font-bold text-lg mb-1">Product description  <Button variant="ghost" size="icon"><Edit /></Button></h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat!</p>
          </div>
          <div className="my-5">
            <h5 className="font-bold text-lg mb-1">Product Stock</h5>
            <p >Total Available: 100</p>
          </div>
          <h6 className="mb-1 font-bold text-lg">Variant</h6>
          <div className="flex flex-wrap gap-2 mb-2 overflow-auto">
            <div className="border border-gray-300 p-2 mb-2 rounded-md flex gap-3 items-center justify-between">
              <div>
                <p>Variant 1</p>
                <p className="text-muted-foreground text-sm">Available: 100</p>
              </div>
              <Button size="icon" variant="ghost"><Edit /></Button>
            </div>
            <div className="border border-gray-300 p-2 mb-2 rounded-md flex gap-3 items-center justify-between">
              <div>
                <p>Variant 2</p>
                <p className="text-muted-foreground text-sm">Available: 100</p>
              </div>
              <Button size="icon" variant="ghost"><Edit /></Button>
            </div>
            <div className="border border-gray-300 p-2 mb-2 rounded-md flex gap-3 items-center justify-between">
              <div>
                <p>Variant 3</p>
                <p className="text-muted-foreground text-sm">Available: 100</p>
              </div>
              <Button size="icon" variant="ghost"><Edit /></Button>
            </div>
          </div>
        </div>
      </div>
      <h5 className="font-bold text-lg mb-1">Product Reviews</h5>
      <div className="flex gap-3">
        <Button variant="outline" className="mb-3">
          <div className="flex items-center">
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
          </div>
          (100)
        </Button>
        <Button variant="outline" className="mb-3">
          <div className="flex items-center">
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
          </div>
          (30)
        </Button>
        <Button variant="outline" className="mb-3">
          <div className="flex items-center">
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
          </div>
          (5)
        </Button>
        <Button variant="outline" className="mb-3">
          <div className="flex items-center">
            <StarIcon className="text-yellow-300 text-sm" />
            <StarIcon className="text-yellow-300 text-sm" />
          </div>
          (0)
        </Button>
        <Button variant="outline" className="mb-3">
          <div className="flex items-center">
            <StarIcon className="text-yellow-300 text-sm" />
          </div>
          (0)
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>John doe</CardTitle>
            <div className="flex items-center">
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
            </div>
            <CardDescription className="mr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat! </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 items-start">

          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>John doe</CardTitle>
            <div className="flex items-center">
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
              <StarIcon className="text-yellow-300 text-sm" />
            </div>
            <CardDescription className="mr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat! </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 items-start">
            <div className="w-32 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
            <div className="w-32 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
            <div className="w-32 aspect-square bg-gray-200 rounded-md flex items-center justify-center">
              <ImageIcon className="text-slate-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ProductDetail;