"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { ProductBasicInfo } from "./basic-info";
import { ProductSize } from "./size";
import { useProductForm } from "./hooks/useProductForm";
import { ProductVariant } from "./variant";

export type Variant = {
  id?: number;
  name: string;
  stock: number;
}

const FormCreate = () => {
  const { form, variantFieldArray, sizeFieldArray, mutate, openDialog, setOpenDialog } = useProductForm();

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button ><PlusIcon /> Add product</Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto max-h-[90vh]">
        <DialogTitle>Add Product</DialogTitle>
        <DialogDescription>

        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => {
            mutate(data)
          })}>
            <ProductBasicInfo form={form} />
            <Separator className="my-4" />
            <ProductSize form={form} sizeFieldArray={sizeFieldArray} />
            <Separator className="my-4" />
            <ProductVariant form={form} variantFieldArray={variantFieldArray} />
            <Separator className="mt-4" />
            <Button type="submit" className="w-full mt-4">Create Product</Button>
            <Button type="button" className="w-full mt-4" variant="outline">Cancel</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )

}

export default FormCreate

