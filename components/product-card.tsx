"use client"

import { ShoppingCart, Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ProductImage } from "./product-image"

interface ProductCardProps {
  name: string
  description: string
  price: number
  rating: number
  image: string
  category: string
  chemicals?: string[]
  images?: string[]
}

export function ProductCard({
  name,
  description,
  price,
  rating,
  image,
  category,
  chemicals = [],
  images = [],
}: ProductCardProps) {
  const allImages = images.length > 0 ? images : [image]

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Badge className="absolute top-2 right-2 z-10 bg-green-600">{category}</Badge>
        <ProductImage images={allImages} name={name} />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          {chemicals.length > 0 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <Info className="h-4 w-4 text-gray-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-bold mb-1">Key Ingredients:</p>
                    <ul className="text-xs">
                      {chemicals.map((chemical, index) => (
                        <li key={index}>{chemical}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-current text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{description}</p>
        <p className="font-bold text-lg">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-green-600 hover:bg-green-700">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
