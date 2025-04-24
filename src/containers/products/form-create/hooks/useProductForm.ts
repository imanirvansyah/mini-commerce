import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, TProduct } from "@/schemas/products";

export const useProductForm = () => {
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

  return { form, variantFieldArray, sizeFieldArray };
}