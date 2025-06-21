import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, ShoppingCart, Star, Clock, Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketplacePage() {
  const foodDeals = [
    {
      id: 1,
      name: "Fresh Bakery Bread",
      originalPrice: 4.99,
      discountPrice: 1.99,
      discount: 60,
      expiresIn: "2 hours",
      seller: "Corner Bakery",
      location: "Downtown",
      image: "/images/products/bread-deals.jpg",
      category: "Bakery",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Organic Vegetables Mix",
      originalPrice: 12.99,
      discountPrice: 4.99,
      discount: 62,
      expiresIn: "1 day",
      seller: "Green Grocers",
      location: "Midtown",
      image: "/images/products/vegetables-mix.jpg",
      category: "Produce",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Gourmet Sandwiches",
      originalPrice: 8.99,
      discountPrice: 3.49,
      discount: 61,
      expiresIn: "4 hours",
      seller: "Deli Express",
      location: "Business District",
      image: "/images/products/sandwiches.jpg",
      category: "Ready Meals",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Premium Dairy Products",
      originalPrice: 15.99,
      discountPrice: 6.99,
      discount: 56,
      expiresIn: "3 days",
      seller: "Farm Fresh Dairy",
      location: "Suburbs",
      image: "/images/products/dairy-products.jpg",
      category: "Dairy",
      rating: 4.9,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 mb-4">
                Food Marketplace
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Quality Food at <span className="text-orange-600">Unbeatable Prices</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                Discover fresh food from local businesses at 30-70% off regular prices. Help reduce food waste while
                saving money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <a href="#food-deals">
                    Browse Deals <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/sell-food">
                    Sell Your Food <ShoppingCart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/marketplace-banner.jpg"
                alt="Fresh food marketplace"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="search" placeholder="Search food deals..." className="pl-10" />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="expiry">Expiring Soon</option>
                <option value="discount">Highest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="distance">Nearest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section id="food-deals" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Today's Food Deals</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Fresh food from local businesses at incredible prices
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Deals</TabsTrigger>
              <TabsTrigger value="bakery">Bakery</TabsTrigger>
              <TabsTrigger value="produce">Produce</TabsTrigger>
              <TabsTrigger value="meals">Ready Meals</TabsTrigger>
              <TabsTrigger value="dairy">Dairy</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {foodDeals.map((deal) => (
                  <Card key={deal.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative">
                      <Badge className="absolute top-2 right-2 z-10 bg-red-600">-{deal.discount}%</Badge>
                      <Badge className="absolute top-2 left-2 z-10 bg-orange-600">
                        <Clock className="w-3 h-3 mr-1" />
                        {deal.expiresIn}
                      </Badge>
                      <div className="aspect-square relative">
                        <Image src={deal.image || "/placeholder.svg"} alt={deal.name} fill className="object-cover" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-lg line-clamp-1">{deal.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          <span className="text-sm text-gray-600 ml-1">{deal.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-2">{deal.seller}</p>
                      <p className="text-xs text-gray-500 mb-3 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {deal.location}
                      </p>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold text-orange-600">${deal.discountPrice}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tab contents would be similar with filtered items */}
            <TabsContent value="bakery" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {foodDeals
                  .filter((deal) => deal.category === "Bakery")
                  .map((deal) => (
                    <Card key={deal.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      {/* Same card structure as above */}
                      <div className="relative">
                        <Badge className="absolute top-2 right-2 z-10 bg-red-600">-{deal.discount}%</Badge>
                        <Badge className="absolute top-2 left-2 z-10 bg-orange-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {deal.expiresIn}
                        </Badge>
                        <div className="aspect-square relative">
                          <Image src={deal.image || "/placeholder.svg"} alt={deal.name} fill className="object-cover" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-lg line-clamp-1">{deal.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span className="text-sm text-gray-600 ml-1">{deal.rating}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-2">{deal.seller}</p>
                        <p className="text-xs text-gray-500 mb-3 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {deal.location}
                        </p>

                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-lg font-bold text-orange-600">${deal.discountPrice}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                          </div>
                        </div>

                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">Getting great food deals is simple</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Browse & Search</h3>
              <p className="text-gray-600">Find food deals near you from restaurants, bakeries, and grocery stores.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Order & Pay</h3>
              <p className="text-gray-600">Add items to your cart and pay securely through our platform.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Quick Pickup/Delivery</h3>
              <p className="text-gray-600">Pick up your order or get it delivered quickly before expiry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Start Saving Today!</h2>
          <p className="mx-auto max-w-[700px] text-orange-50 md:text-xl mb-8">
            Join thousands of smart shoppers who save money while reducing food waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="#food-deals">
                Browse Deals <ShoppingCart className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/sell-food">
                Sell Your Food <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
