import Image from "next/image"
import { ArrowRight, Leaf, CheckCircle, Truck, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WasteCollectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Food Waste Collection
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Turn Your Food Waste into <span className="text-green-600">Valuable Resources</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                We collect your inedible food waste for free and transform it into compost, animal feed, and biofuel.
                Help the environment while reducing your waste disposal costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="#schedule-collection">
                    Schedule Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#how-it-works">
                    Learn More <Leaf className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/waste-collection-truck.jpg"
                alt="Food waste collection truck"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Collection Service?</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Free, reliable, and environmentally responsible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Free Service</h3>
                <p className="text-gray-600">
                  No collection fees, no contracts. We collect your food waste at no cost to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliable Pickup</h3>
                <p className="text-gray-600">
                  Scheduled collections that fit your business needs. Never worry about waste buildup again.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Zero Waste to Landfill</h3>
                <p className="text-gray-600">
                  100% of collected food waste is recycled into valuable products. Nothing goes to landfill.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Our Collection Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Simple, efficient, and environmentally responsible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Schedule Pickup</h3>
              <p className="text-gray-600 text-sm">
                Contact us to set up regular collection times that work for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Separate Waste</h3>
              <p className="text-gray-600 text-sm">
                We provide containers and guidelines for separating food waste from other materials.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">We Collect</h3>
              <p className="text-gray-600 text-sm">
                Our team arrives on schedule to collect your food waste using specialized vehicles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Transform & Sell</h3>
              <p className="text-gray-600 text-sm">
                We process the waste into compost, animal feed, and biofuel for sale to farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Food Waste We Accept</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              We accept most types of organic food waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  We Accept
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fruit and vegetable scraps</li>
                  <li>• Expired dairy products</li>
                  <li>• Stale bread and baked goods</li>
                  <li>• Coffee grounds and tea bags</li>
                  <li>• Meat and fish scraps</li>
                  <li>• Eggshells</li>
                  <li>• Spoiled or moldy food</li>
                  <li>• Food preparation waste</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center">
                  <span className="mr-2 h-5 w-5 text-red-500">✗</span>
                  We Don't Accept
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Packaging materials</li>
                  <li>• Plastic containers</li>
                  <li>• Metal cans or foil</li>
                  <li>• Glass containers</li>
                  <li>• Paper napkins or cardboard</li>
                  <li>• Cooking oil in large quantities</li>
                  <li>• Bones from large animals</li>
                  <li>• Non-food organic waste</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="schedule-collection" className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
            Ready to Start Recycling Your Food Waste?
          </h2>
          <p className="mx-auto max-w-[700px] text-green-50 md:text-xl mb-8">
            Join hundreds of businesses already reducing their environmental impact with our free collection service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+1234567890">Call Now: (123) 456-7890</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
            >
              <a href="mailto:collection@rewaste.com">
                Email Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
