import { Button } from "@/components/ui/button";
import { DialogDescription } from "@/components/ui/dialog";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PlusIcon, TrashIcon } from "lucide-react";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { TProduct } from "@/schemas/products";

export const ProductSize = ({ form, sizeFieldArray }: { form: UseFormReturn<TProduct>, sizeFieldArray: UseFieldArrayReturn<TProduct, "size"> }) => {

  const { fields: sizeFields, append: appendSize, remove: removeSize } = sizeFieldArray

  const isAllSize = form.watch("isAllSize");
  const isSizeField = form.watch("size")
  return (
    <>
      <div className="flex items-center justify-between">
        <DialogDescription>Size</DialogDescription>
        <FormField
          control={form.control}
          name="isAllSize"
          render={({ field }) => (
            <FormItem className="flex space-x-2 items-center ">
              <FormControl>
                <Switch
                  id="isAllSize"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={!!isSizeField && isSizeField.length > 0}
                />
              </FormControl>
              <FormDescription className=" h-full pb-2">All Size</FormDescription>
            </FormItem>
          )}
        />
      </div>
      {sizeFields.map((item, index) => (
        <FormField
          key={item.id}
          control={form.control}
          name={`size.${index}.name`}
          render={({ field }) => (
            <FormItem className="mb-2">
              {/* <FormLabel>Size Name</FormLabel> */}
              <div className="flex gap-2">
                <FormControl>
                  <Input type="string" id={`size.${index}.name`} placeholder="Eg: XL" {...field} />
                </FormControl>
                <Button type="button" variant="destructive" className="w-fit text-right" onClick={() => removeSize(index)}>
                  <TrashIcon />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      {!isAllSize && (
        <div className="w-full text-right mt-4">
          <Button
            size={"sm"}
            type="button"
            className="w-fit text-right"
            variant="outline"
            disabled={isAllSize}
            onClick={() => appendSize({
              name: ""
            })}
          ><PlusIcon />Add Size</Button>
        </div>
      )}
    </>
  )
}