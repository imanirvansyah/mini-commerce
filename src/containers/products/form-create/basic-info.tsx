
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { TProduct } from "@/schemas/products";

export const ProductBasicInfo = ({ form }: { form: UseFormReturn<TProduct> }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="productName"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Product Name</FormLabel>
            <FormControl>
              <Input type="text" id="productName" placeholder="ex: Long Sleeve Clothes" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="productDescription"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Product Description</FormLabel>
            <FormControl>
              <Input type="text" id="product-description" placeholder="Eg: Made by love..."  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input type="number" id="price" placeholder="Eg: 100000"  {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="totalQty"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Total Quantity</FormLabel>
            <FormControl>
              <Input type="number" id="totalQty" placeholder="Eg: 100000"  {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}