import {
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BREADCRUMBS } from "@/constants/breadcrumbs"
import { Fragment } from "react";

export const Breadcrumb = ({ title }: { title: string }) => {
  console.log(title)
  const breadcrumbs = BREADCRUMBS[title];
  return (
    <BreadcrumbPrimitive>
      <BreadcrumbList className="text-xs">
        {breadcrumbs.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ?
                <BreadcrumbPage className="font-bold">{item.title}</BreadcrumbPage> :
                <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
              }
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>

        ))}
      </BreadcrumbList>
    </BreadcrumbPrimitive>
  )
}