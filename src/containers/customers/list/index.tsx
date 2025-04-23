import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterIcon } from "lucide-react";
import Link from "next/link";

const ListCustomers = () => {
  return (
    <div className="w-full h-full overflow-scroll mt-12">
      <div className="flex items-center justify-start gap-2 mb-3">
        <Input placeholder="Search customer here..." className="w-fit" />
        <Button>Search</Button>
        <Button variant={"outline"} size={"icon"}><FilterIcon /></Button>
      </div>
      <Card>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Purchased</TableHead>
              <TableHead>Last Purchase</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John doe</TableCell>
              <TableCell>johndoe@mail.com</TableCell>
              <TableCell>Rp1.000.000</TableCell>
              <TableCell>January 13, 2025</TableCell>
              <TableCell>
                <Link href="/customers/1">
                  <Button size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John doe</TableCell>
              <TableCell>johndoe@mail.com</TableCell>
              <TableCell>Rp1.000.000</TableCell>
              <TableCell>January 13, 2025</TableCell>
              <TableCell>
                <Link href="/customers/1">
                  <Button size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John doe</TableCell>
              <TableCell>johndoe@mail.com</TableCell>
              <TableCell>Rp1.000.000</TableCell>
              <TableCell>January 13, 2025</TableCell>
              <TableCell>
                <Link href="/customers/1">
                  <Button size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John doe</TableCell>
              <TableCell>johndoe@mail.com</TableCell>
              <TableCell>Rp1.000.000</TableCell>
              <TableCell>January 13, 2025</TableCell>
              <TableCell>
                <Link href="/customers/1">
                  <Button size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John doe</TableCell>
              <TableCell>johndoe@mail.com</TableCell>
              <TableCell>Rp1.000.000</TableCell>
              <TableCell>January 13, 2025</TableCell>
              <TableCell>
                <Link href="/customers/1">
                  <Button size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex my-4">
          <TablePagination />
        </div>
      </Card>
    </div>
  );
}

export function TablePagination() {
  return (
    <Pagination className="w-fit">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default ListCustomers;