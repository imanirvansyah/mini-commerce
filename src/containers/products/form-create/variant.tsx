import { Button } from "@/components/ui/button";
import { DialogDescription } from "@/components/ui/dialog";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PlusIcon, TrashIcon } from "lucide-react";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { TProduct } from "@/schemas/products";

export const ProductVariant = ({ form, variantFieldArray }: { form: UseFormReturn<TProduct>, variantFieldArray: UseFieldArrayReturn<TProduct, "variant"> }) => {

  const { fields, append, remove } = variantFieldArray
  const isNoVariant = form.watch("isNoVariant");
  return (
    <>
      <div className="flex items-center justify-between">
        <DialogDescription>Variant</DialogDescription>
        <FormField
          control={form.control}
          name="isNoVariant"
          render={({ field }) => (
            <FormItem className="flex space-x-2 items-center ">
              <FormControl>
                <Switch
                  id="isVariant"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={!!fields && fields.length > 0}
                />
              </FormControl>
              <FormDescription className=" h-full pb-2">No Variant</FormDescription>
            </FormItem>
          )}
        />
      </div>
      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-4 gap-2 items-end">
          <FormField
            control={form.control}
            name={`variant.${index}.name`}
            render={() => (
              <FormItem className="col-span-2">
                <FormLabel>Variant Name</FormLabel>
                <FormControl>
                  <Input type="string" id={`variant.${index}.name`} placeholder="Eg: Red Blue" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`variant.${index}.qty`}
            render={() => (
              <FormItem className="col-span-2">
                <FormLabel>Qty</FormLabel>
                <div className="flex gap-2">
                  <FormControl>
                    <Input type="string" id={`variant.${index}.qty`} placeholder="0" />
                  </FormControl>
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-fit text-right"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
      ))}
      {!isNoVariant && (
        <div className="col-span-3 w-full text-right mt-2">
          <Button
            type="button"
            className="w-fit text-right"
            variant="outline"
            onClick={() => {
              append({ name: "", qty: 0 })
            }}
            disabled={isNoVariant}
          ><PlusIcon />Add new variant</Button>
        </div>
      )}
    </>
  )
}