"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterIcon, ImageIcon } from "lucide-react";
import FormCreate from "../form-create";
import { useProducts } from "./hooks/useProduct";
import { TablePagination } from "@/components/fragments/pagination";
import LoadingProduct from "@/app/(features)/products/loading";
import Link from "next/link";

const ProductList = () => {
  const { data, page, handleNextPage, handlePageChange, handlePreviousPage } = useProducts();

  const { data: list, isLoading, error } = data

  if (isLoading) return <LoadingProduct />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="w-full h-full overflow-scroll">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-start gap-2 mb-3 p-1">
          <Input placeholder="Search product here..." />
          <Button variant={"outline"} size={"icon"} className="px-3"><FilterIcon /></Button>
        </div>
        <FormCreate />
      </div>
      <Card>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list?.data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="flex gap-3 items-center">
                  <div className="h-32 w-32 bg-gray-200 flex items-center justify-center rounded-t-md">
                    <ImageIcon className="text-slate-500" />
                  </div>
                  <div>
                    <p className="font-bold">{item.productName}</p>
                    <p className="">{item.productDescription}</p>
                  </div>
                </TableCell>
                <TableCell>100</TableCell>
                <TableCell>Rp 120.000</TableCell>
                <TableCell>100</TableCell>
                <TableCell>
                  <Badge variant="destructive">Add more stock</Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/products/${index + 1}`}>
                    <Button>See detail</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CardFooter className="mt-4">
          <TablePagination
            data={list?.meta}
            page={page}
            handlePageChange={handlePageChange}
            handleNextPage={() => handleNextPage(list?.meta.totalPage || 0)}
            handlePreviousPage={handlePreviousPage}
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductList;