import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Property } from "@/types/types";
import { Badge } from "./badge";

interface ProductCard {
  data: Property;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
      <Link href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
        <Card className="rounded-lg border-2">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <img
                src={data.images?.[0]}
                alt=""
                className="fill aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex items-start flex-col">
              <p className="font-semibold text-md">{data.name}</p>
              {/* <p className="text-sm text-primary/80"></p> */}
              <Badge variant="outline">{data.category}</Badge>
              <p className="text-sm text-primary/80">Rs.{data?.price}</p>
            <div className=""></div>
          </CardFooter>
        </Card>
      </Link>
  );
};

export default ProductCard;