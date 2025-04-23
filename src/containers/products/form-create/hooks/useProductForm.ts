import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema, ProductFormValues } from "../schema";

export const useProductForm = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
  });

  const variantFieldArray = useFieldArray<ProductFormValues, "variant">({
    control: form.control,
    name: "variant",
  });

  const sizeFieldArray = useFieldArray<ProductFormValues, "size">({
    control: form.control,
    name: "size",
  });

  return { form, variantFieldArray, sizeFieldArray };
}