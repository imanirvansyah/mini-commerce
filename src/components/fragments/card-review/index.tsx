import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export const CardReview = () => {
  return (
    <Card className="mb-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>John doe</CardTitle>
          <div className="flex items-center">
            <StarIcon className="text-primary w-4" />
            <StarIcon className="text-primary w-4" />
            <StarIcon className="text-primary w-4" />
            <StarIcon className="text-primary w-4" />
            <StarIcon className="text-primary w-4" />
          </div>
        </div>
        <CardDescription className="mr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non autem animi sunt illo facilis, tempore nostrum omnis quas tempora sapiente minima iusto dolore voluptate eligendi cum? Ut, eum repellat! </CardDescription>
      </CardHeader>
    </Card>
  )
}