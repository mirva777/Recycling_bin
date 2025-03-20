import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, ShoppingCart, Star, Leaf, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Marketplace
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                <span className="text-green-600">RecyclingBin</span> Sustainable Products
              </h1>
              <p className="text-gray-600 md:text-xl">
                Browse our selection of eco-friendly products made from recycled materials, designed to support
                sustainable farming practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="#products">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#about-products">
                    Learn More <Leaf className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable products"
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
              <Input type="search" placeholder="Search products..." className="pl-10" />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Products</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Explore our range of sustainable products made from recycled materials
            </p>
          </div>

          <Tabs defaultValue="fertilizers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="fertilizers">Recycled Fertilizers</TabsTrigger>
              <TabsTrigger value="feed">Animal Feed</TabsTrigger>
            </TabsList>

            <TabsContent value="fertilizers" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard
                  name="Organic Compost"
                  description="Premium compost made from recycled organic waste, perfect for enriching soil."
                  price={19.99}
                  rating={4.8}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Beneficial Microorganisms", "Calcium Carbonate", "Humic Acids"]}
                  images={[
                    "app/marketplace/images/green_stuff.jpg",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Plant Nutrient Mix"
                  description="Balanced nutrient mix derived from recycled food waste, ideal for vegetable gardens."
                  price={24.99}
                  rating={4.6}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Nitrogen", "Phosphorus", "Potassium"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Soil Enhancer"
                  description="Recycled organic matter processed to improve soil structure and water retention."
                  price={15.99}
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Humic Acid", "Fulvic Acid", "Amino Acids"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Garden Booster"
                  description="Concentrated nutrients from recycled materials to boost plant growth and yield."
                  price={29.99}
                  rating={4.9}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Seaweed Extract", "Bone Meal", "Blood Meal"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Lawn Revitalizer"
                  description="Specialized formula for lawns made from recycled green waste."
                  price={22.99}
                  rating={4.7}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Iron", "Magnesium", "Sulfur"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Flower Bloom Enhancer"
                  description="Promotes vibrant blooms with nutrients derived from recycled plant matter."
                  price={18.99}
                  rating={4.4}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Boron", "Molybdenum", "Zinc"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Organic Potting Mix"
                  description="Complete potting solution made from recycled materials for container plants."
                  price={12.99}
                  rating={4.3}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Peat Moss", "Compost", "Perlite"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Tree & Shrub Food"
                  description="Slow-release nutrients from recycled sources for trees and shrubs."
                  price={27.99}
                  rating={4.8}
                  image="/placeholder.svg?height=300&width=300"
                  category="Fertilizer"
                  chemicals={["Potassium", "Nitrogen", "Phosphorus"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="feed" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard
                  name="Poultry Feed Mix"
                  description="Nutritious feed for chickens made from recycled food products and grains."
                  price={32.99}
                  rating={4.7}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Corn", "Soybean Meal", "Vitamins"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Cattle Supplement"
                  description="Nutrient-rich supplement for cattle derived from recycled agricultural waste."
                  price={45.99}
                  rating={4.6}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Molasses", "Urea", "Minerals"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Fish Food"
                  description="Sustainable fish feed made from recycled organic materials."
                  price={18.99}
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Algae", "Fish Meal", "Spirulina"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Goat & Sheep Feed"
                  description="Specialized feed for goats and sheep using recycled plant matter."
                  price={36.99}
                  rating={4.8}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Hay", "Barley", "Oats"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Pig Feed Formula"
                  description="Balanced nutrition for pigs made from recycled food products."
                  price={39.99}
                  rating={4.7}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Corn", "Soybean", "Lysine"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Horse Feed Supplement"
                  description="Premium supplement for horses derived from recycled agricultural materials."
                  price={52.99}
                  rating={4.9}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Beet Pulp", "Bran", "Flaxseed"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Rabbit Food Mix"
                  description="Complete nutrition for rabbits made from recycled plant materials."
                  price={22.99}
                  rating={4.6}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Timothy Hay", "Pellets", "Vegetables"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
                <ProductCard
                  name="Duck & Geese Feed"
                  description="Specialized feed for waterfowl using recycled grains and plant matter."
                  price={28.99}
                  rating={4.5}
                  image="/placeholder.svg?height=300&width=300"
                  category="Animal Feed"
                  chemicals={["Corn", "Wheat", "Oats"]}
                  images={[
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                    "/placeholder.svg?height=300&width=300",
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Our Products */}
      <section id="about-products" className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sustainable farming"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Sustainable Agriculture
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of Our Products</h2>
              <p className="text-gray-600">
                Our recycled products offer numerous benefits for farmers and the environment, promoting sustainable
                agricultural practices.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Leaf className="mr-2 h-5 w-5 text-green-600" />
                    Environmentally Friendly
                  </h3>
                  <p className="text-gray-600">
                    By using products made from recycled materials, you're helping to reduce waste and minimize your
                    environmental footprint.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Leaf className="mr-2 h-5 w-5 text-green-600" />
                    Cost-Effective
                  </h3>
                  <p className="text-gray-600">
                    Our recycled products are often more affordable than traditional options, helping you save money
                    while supporting sustainable practices.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Leaf className="mr-2 h-5 w-5 text-green-600" />
                    High Quality
                  </h3>
                  <p className="text-gray-600">
                    Despite being made from recycled materials, our products meet or exceed the quality standards of
                    traditional alternatives.
                  </p>
                </div>
              </div>

              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="#products">
                  Shop Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Methods & Chemicals */}
      <section id="recycling-methods" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Recycling Methods</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Learn about the innovative processes and chemicals we use to transform waste into high-quality products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Composting process"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Organic Composting</h3>
              <p className="text-gray-600">
                Our organic composting process uses controlled aerobic decomposition to transform food waste and plant
                matter into nutrient-rich fertilizer.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Key Chemicals & Additives:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Beneficial Microorganisms:</span> Bacillus subtilis, Trichoderma,
                        and mycorrhizal fungi to accelerate decomposition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Mineral Additives:</span> Calcium carbonate to balance pH levels
                        and improve soil structure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Natural Enzymes:</span> Cellulase and lignase to break down
                        complex plant materials
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl font-bold">Plastic Recycling & Transformation</h3>
              <p className="text-gray-600">
                We use advanced mechanical and chemical processes to transform plastic waste into durable products for
                agricultural applications.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Key Chemicals & Processes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Solvent-Based Purification:</span> Using eco-friendly solvents
                        like limonene to remove contaminants
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Compatibilizers:</span> Maleic anhydride-grafted polymers to
                        improve binding properties
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">UV Stabilizers:</span> Hindered amine light stabilizers (HALS) to
                        prevent degradation in outdoor applications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Plastic recycling process"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Food waste processing"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Animal Feed Production</h3>
              <p className="text-gray-600">
                Our animal feed products are created through specialized processing of food waste and agricultural
                byproducts, ensuring optimal nutrition.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Key Ingredients & Additives:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Nutritional Supplements:</span> Vitamin E, selenium, and zinc for
                        improved animal health
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Probiotics:</span> Lactobacillus acidophilus and Bifidobacterium
                        for digestive health
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-medium">Natural Preservatives:</span> Tocopherols and rosemary extract to
                        extend shelf life without synthetic chemicals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Hear from farmers who have experienced the benefits of our recycled products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've been using the Organic Compost for my vegetable garden, and the results have been amazing. My
                  plants are healthier and more productive than ever before."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-green-700">JD</span>
                  </div>
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm text-gray-500">Small-scale Farmer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The Cattle Supplement has made a noticeable difference in the health of my herd. It's affordable and
                  sustainable, which aligns perfectly with my farming philosophy."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-green-700">JS</span>
                  </div>
                  <div>
                    <p className="font-bold">Jane Smith</p>
                    <p className="text-sm text-gray-500">Cattle Rancher</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I switched to the Poultry Feed Mix last year, and my chickens are healthier and producing more eggs.
                  Plus, I love knowing that I'm supporting sustainable practices."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-green-700">RJ</span>
                  </div>
                  <div>
                    <p className="font-bold">Robert Johnson</p>
                    <p className="text-sm text-gray-500">Poultry Farmer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Shop Sustainable?</h2>
          <p className="mx-auto max-w-[700px] text-green-50 md:text-xl mb-8">
            Browse our selection of eco-friendly products and start your journey towards sustainable farming today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="#products">
                Shop Now <ShoppingCart className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
            >
              <Link href="/recyclers-portal">
                Become a Recycler <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

