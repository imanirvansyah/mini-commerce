"use client"

import ImageFallback from "@/components/fragments/image-fallback";
import LoadingTable from "@/components/fragments/loading-table";
import { TablePagination } from "@/components/fragments/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterIcon } from "lucide-react";
import Link from "next/link";
import FormCreate from "../form-create";
import { useProducts } from "./hooks/useProduct";
import { toIDR } from "@/utils/number";
import NegativeCase from "@/components/fragments/negative-case";
import { ILLUSTRATION } from "@/constants/illustration";

const ProductList = () => {
  const { data, page, handleNextPage, handlePageChange, handlePreviousPage } = useProducts();
  const { data: list, isLoading } = data
  if (isLoading) return <LoadingTable />;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-start gap-2 mb-3 p-1">
          <Input placeholder="Search product here..." />
          <Button variant={"outline"} size={"icon"} className="px-3"><FilterIcon /></Button>
        </div>
        <FormCreate />
      </div>
      {!!list && list?.data.length > 0 && (
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
                    <ImageFallback className="w-24" />
                    <div>
                      <p className="font-bold">{item.productName}</p>
                      <p className="">{item.productDescription}</p>
                    </div>
                  </TableCell>
                  <TableCell className="tabular-nums">{item.orderCount}</TableCell>
                  <TableCell className="tabular-nums">{toIDR(item.price)}</TableCell>
                  <TableCell className="tabular-nums">{item.totalQty}</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Add more stock</Badge>
                  </TableCell>
                  <TableCell>
                    <Link href={`/products/${item.id}`}>
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
      )}
      {!!list && list.data.length === 0 && <NegativeCase
        title="Hey, There's nothing to see now, at least now"
        subtitle="Add your data now"
        image={ILLUSTRATION.NO_DATA}
      />}
    </div>
  );
}

export default ProductList;