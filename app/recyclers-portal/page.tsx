import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Truck, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProcessSteps } from "@/components/process-steps"
import { DropoffMap } from "@/components/dropoff-map"

export default function RecyclersPortalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Recycler's Portal
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Turn Your Waste into <span className="text-green-600">Rewards</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                Join our network of recyclers and contribute to a sustainable future while earning rewards for your
                eco-friendly actions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="#collection-options">
                    Start Recycling <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#incentive-program">
                    View Rewards <Gift className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Recycling process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Process Overview */}
      <section id="process-overview" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recycling Process Overview</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Learn how your recyclable materials are transformed into valuable resources
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Collection Options */}
      <section id="collection-options" className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Collection Options</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Choose the recycling method that works best for you
            </p>
          </div>

          <Tabs defaultValue="pickup" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pickup">At-Home Pickup</TabsTrigger>
              <TabsTrigger value="dropoff">Drop-Off Centers</TabsTrigger>
            </TabsList>
            <TabsContent value="pickup" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="mr-4 bg-green-100 p-2 rounded-full">
                      <Truck className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">At-Home Pickup Service</h3>
                      <p className="text-gray-600">
                        Schedule a convenient pickup from your home when you have at least 10kg of recyclable materials.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-bold">How it works:</h4>
                    <ol className="space-y-3 list-decimal list-inside text-gray-600">
                      <li>Collect a minimum of 10kg of recyclable materials</li>
                      <li>Schedule a pickup using our online form or mobile app</li>
                      <li>Our team will arrive at the scheduled time to collect your materials</li>
                      <li>Earn reward points based on the quantity and type of materials</li>
                    </ol>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-bold">Accepted Materials:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="font-medium">Paper & Cardboard</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="font-medium">Plastic (Types 1-7)</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="font-medium">Glass</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="font-medium">Metal</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="font-medium">Electronics</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <p className="font-medium">Organic Waste</p>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="#schedule-pickup">
                      Schedule a Pickup <Calendar className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dropoff" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="mr-4 bg-green-100 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Drop-Off Centers</h3>
                      <p className="text-gray-600">
                        Visit one of our convenient drop-off locations to deliver your recyclable materials and earn
                        rewards.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-bold">How it works:</h4>
                    <ol className="space-y-3 list-decimal list-inside text-gray-600">
                      <li>Collect your recyclable materials (no minimum amount required)</li>
                      <li>Find your nearest drop-off center using our interactive map</li>
                      <li>Bring your materials to the center during operating hours</li>
                      <li>Earn reward points based on the quantity and type of materials</li>
                    </ol>
                  </div>

                  <div className="h-[300px] mb-6 rounded-lg overflow-hidden">
                    <DropoffMap />
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="#find-center">
                      Find Nearest Center <MapPin className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Incentive Program */}
      <section id="incentive-program" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Rewards program"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Rewards Program
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Earn While You Recycle</h2>
              <p className="text-gray-600">
                Our incentive program rewards you for your recycling efforts with coupons that can be redeemed for
                eco-friendly products.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Gift className="mr-2 h-5 w-5 text-green-600" />
                    How to Earn Points
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Earn 1 point per kg of paper, cardboard, or plastic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Earn 2 points per kg of glass or metal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Earn 5 points per kg of electronics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Bonus points for regular recycling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Gift className="mr-2 h-5 w-5 text-green-600" />
                    Redeem Your Points
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>50 points: $10 coupon for eco-friendly products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>100 points: $25 coupon for eco-friendly products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>200 points: $60 coupon for eco-friendly products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>500 points: $175 coupon for eco-friendly products</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/marketplace">
                  Browse Eco-Friendly Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Find answers to common questions about our recycling program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What materials can I recycle?</h3>
                <p className="text-gray-600">
                  We accept a wide range of materials including paper, cardboard, plastic (types 1-7), glass, metal,
                  electronics, and organic waste.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How do I schedule a pickup?</h3>
                <p className="text-gray-600">
                  You can schedule a pickup through our website or mobile app. Simply select a date and time that works
                  for you, and our team will arrive to collect your materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How are points calculated?</h3>
                <p className="text-gray-600">
                  Points are calculated based on the weight and type of materials you recycle. Different materials earn
                  different point values, with electronics earning the most points per kg.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Where can I redeem my coupons?</h3>
                <p className="text-gray-600">
                  Coupons can be redeemed in our marketplace for a variety of eco-friendly products, including recycled
                  fertilizers, animal feed, and other sustainable items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Start Recycling?</h2>
          <p className="mx-auto max-w-[700px] text-green-50 md:text-xl mb-8">
            Join our community of recyclers today and start earning rewards while helping the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="#schedule-pickup">
                Schedule a Pickup <Truck className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
            >
              <a href="#find-center">
                Find Drop-Off Center <MapPin className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

