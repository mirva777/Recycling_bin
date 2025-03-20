import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star, Truck, Shield, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductPageProps {
  params: {
    product: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch this data from an API or database
  // For this example, we'll use a placeholder product
  const product = {
    id: params.product,
    name: "Organic Compost Premium",
    description:
      "Our premium organic compost is made from recycled food waste and plant materials, providing essential nutrients for your garden. This high-quality compost improves soil structure, water retention, and promotes healthy plant growth.",
    longDescription:
      "RecyclingBin's Organic Compost Premium is the result of our advanced composting process that transforms organic waste into a nutrient-rich soil amendment. The carefully controlled decomposition process ensures that all pathogens are eliminated while beneficial microorganisms thrive. Our compost is tested for quality and consistency, ensuring you get the best results for your garden, farm, or landscaping projects.",
    price: 24.99,
    rating: 4.8,
    reviewCount: 127,
    category: "Fertilizer",
    stock: 35,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    chemicals: [
      "Beneficial Microorganisms (Bacillus subtilis, Trichoderma)",
      "Calcium Carbonate (pH balancer)",
      "Humic Acids (soil conditioner)",
      "Natural Enzymes (Cellulase, Lignase)",
    ],
    specifications: [
      { name: "NPK Ratio", value: "3-2-1" },
      { name: "pH Level", value: "6.5-7.2" },
      { name: "Organic Matter", value: "65-75%" },
      { name: "Moisture Content", value: "30-40%" },
      { name: "Weight", value: "20 kg bag" },
    ],
    recyclingMethod:
      "Our compost is produced through a controlled aerobic decomposition process that takes approximately 12 weeks. We carefully monitor temperature, moisture, and oxygen levels to ensure optimal conditions for beneficial microorganisms. The process includes initial grinding of materials, active composting with regular turning, and a final curing phase to stabilize the product.",
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/marketplace" className="hover:text-green-600">
              Marketplace
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/marketplace?category=${product.category}`} className="hover:text-green-600">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden border">
                <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-square relative rounded-lg overflow-hidden border cursor-pointer">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-green-600">{product.category}</Badge>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>

              <p className="text-gray-600">{product.description}</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Key Ingredients:</h3>
                <ul className="space-y-1 text-gray-600">
                  {product.chemicals.map((chemical, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{chemical}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-32">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">Availability</p>
                  <p className="mt-1 text-sm text-green-600">
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-sm">Free shipping over $50</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-sm">30-day money back</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-sm">100% Eco-friendly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="recycling">Recycling Method</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6 p-6 bg-white rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Product Description</h3>
                <p className="text-gray-600 mb-4">{product.longDescription}</p>
                <h4 className="font-bold mt-6 mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improves soil structure and water retention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provides essential nutrients for plant growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Increases beneficial microbial activity in soil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduces the need for chemical fertilizers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Environmentally friendly and sustainable</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6 p-6 bg-white rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{spec.name}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recycling" className="mt-6 p-6 bg-white rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Recycling Method</h3>
                <p className="text-gray-600 mb-6">{product.recyclingMethod}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Collection</h4>
                    <p className="text-sm text-gray-600">
                      Organic waste is collected from homes, restaurants, and agricultural operations, then sorted to
                      remove contaminants.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Processing</h4>
                    <p className="text-sm text-gray-600">
                      Materials are ground to a consistent size and mixed with specific ratios of carbon and nitrogen
                      sources for optimal decomposition.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Quality Control</h4>
                    <p className="text-sm text-gray-600">
                      Each batch is tested for nutrient content, pH levels, and the absence of pathogens before
                      packaging.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 p-6 bg-white rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${i < Math.floor(product.rating) ? "fill-current text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold">{product.rating.toFixed(1)}</span>
                  <span className="text-gray-600 ml-2">based on {product.reviewCount} reviews</span>
                </div>

                {/* Sample reviews - in a real app, these would be fetched from a database */}
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "fill-current text-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="font-bold">Amazing results!</span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      I've been using this compost in my vegetable garden for the past season, and the results have been
                      incredible. My tomatoes and peppers have never been so productive!
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Sarah J.</span>
                      <span className="mx-2">•</span>
                      <span>Verified Purchaser</span>
                      <span className="mx-2">•</span>
                      <span>2 months ago</span>
                    </div>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "fill-current text-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="font-bold">Good quality, a bit pricey</span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      The compost is definitely high quality and my plants love it. I appreciate the sustainable
                      approach, but wish it was a bit more affordable.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Michael T.</span>
                      <span className="mx-2">•</span>
                      <span>Verified Purchaser</span>
                      <span className="mx-2">•</span>
                      <span>1 month ago</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="mt-6">
                  View All Reviews
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* These would be dynamically generated in a real app */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Related product"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Related Product {item}</h3>
                    <p className="text-sm text-gray-600 mb-2">Short product description here</p>
                    <p className="font-bold">${(19.99 + item).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

