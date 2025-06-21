import Image from "next/image"
import { ArrowRight, Leaf, Truck, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RecycledProductsPage() {
  const products = [
    {
      id: 1,
      name: "Premium Organic Compost",
      description: "Rich compost made from recycled food waste, perfect for improving soil health and crop yields.",
      price: "From $45/ton",
      image: "/images/products/compost.jpg",
      category: "Soil Amendment",
      features: ["High nutrient content", "Improves soil structure", "Reduces need for chemical fertilizers"],
    },
    {
      id: 2,
      name: "Livestock Feed Supplement",
      description: "Nutritious feed supplement derived from processed food waste, suitable for cattle and poultry.",
      price: "From $320/ton",
      image: "/images/products/animal-feed.jpg",
      category: "Animal Feed",
      features: ["High protein content", "Cost-effective nutrition", "Sustainable feed source"],
    },
    {
      id: 3,
      name: "Biogas & Renewable Energy",
      description: "Clean energy generated from food waste through anaerobic digestion processes.",
      price: "Contact for pricing",
      image: "/images/products/biogas.jpg",
      category: "Energy",
      features: ["Renewable energy source", "Reduces carbon footprint", "Consistent energy output"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Recycled Products
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Sustainable Products from <span className="text-green-600">Food Waste</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                Discover our range of high-quality products made from recycled food waste. Perfect for farmers,
                agricultural businesses, and environmentally conscious organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="#products">
                    Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">
                    Request Quote <Leaf className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/recycled-products.jpg"
                alt="Recycled products from food waste"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Product Range</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              High-quality products made from recycled food waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative">
                  <Badge className="absolute top-2 right-2 z-10 bg-green-600">{product.category}</Badge>
                  <div className="aspect-[4/3] relative">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Recycling Process</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">From food waste to valuable products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Collection</h3>
              <p className="text-gray-600 text-sm">
                We collect food waste from restaurants, grocery stores, and food processing facilities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Processing</h3>
              <p className="text-gray-600 text-sm">
                Advanced processing techniques transform waste into high-quality raw materials.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Production</h3>
              <p className="text-gray-600 text-sm">
                Raw materials are refined into finished products like compost, feed, and biofuel.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Distribution</h3>
              <p className="text-gray-600 text-sm">
                Products are delivered to farmers and businesses across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/recycled-products.jpg"
                  alt="Benefits of recycled products"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Recycled Products?</h2>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Environmentally Responsible</h3>
                  <p className="text-gray-600">
                    Reduce landfill waste and carbon emissions while supporting circular economy principles.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Cost-Effective</h3>
                  <p className="text-gray-600">
                    Our recycled products often cost 20-40% less than traditional alternatives.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">High Quality</h3>
                  <p className="text-gray-600">
                    Rigorous quality control ensures our products meet or exceed industry standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Order?</h2>
          <p className="mx-auto max-w-[700px] text-green-50 md:text-xl mb-8">
            Contact us today to discuss your needs and get a custom quote for our recycled products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+1234567890">Call Sales: (123) 456-7890</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
            >
              <a href="mailto:sales@rewaste.com">
                Email Sales Team <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
