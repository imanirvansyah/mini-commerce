import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, TProduct } from "@/schemas/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewProduct } from "@/services/product/product";
import { useState } from "react";

export const useProductForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const qc = useQueryClient();
  const form = useForm<TProduct>({
    resolver: zodResolver(productSchema),
  });

  const variantFieldArray = useFieldArray<TProduct, "variant">({
    control: form.control,
    name: "variant",
  });

  const sizeFieldArray = useFieldArray<TProduct, "size">({
    control: form.control,
    name: "size",
  });

  const { mutate, isPending } = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (params: any) => postNewProduct(params),
    onSuccess: () => {
      console.log("success submitting")
      qc.invalidateQueries({ queryKey: ["products"] })
      form.reset();
    },
    onError: (e) => {
      console.log(e)
    },
    onSettled: () => {
      setOpenDialog(false)
    }
  })

  return { form, variantFieldArray, sizeFieldArray, mutate, isPending, openDialog, setOpenDialog };
}