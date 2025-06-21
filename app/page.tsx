"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, ShoppingCart, Recycle, Users, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RecyclingAnimation } from "@/components/recycling-animation"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <RecyclingAnimation />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 mb-4">
                Food Waste Solution
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Turn Food Waste into <span className="text-orange-600">Opportunity</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                ReWaste connects food sellers, buyers, and recyclers to reduce food waste while creating value for
                everyone in the supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/marketplace">
                    Browse Food Deals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/sell-food">
                    Sell Your Food <Leaf className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-food-waste.jpg"
                alt="Food waste reduction"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">The Food Waste Crisis</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Every year, billions of tons of food are wasted while millions go hungry. ReWaste is here to change that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">1.3B</div>
                <div className="text-sm text-gray-500 mb-2">Tons of food wasted globally</div>
                <p className="text-gray-600 text-sm">
                  One-third of all food produced for human consumption is lost or wasted
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">$1T</div>
                <div className="text-sm text-gray-500 mb-2">Economic losses annually</div>
                <p className="text-gray-600 text-sm">Food waste costs the global economy over $1 trillion every year</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">8%</div>
                <div className="text-sm text-gray-500 mb-2">Of global greenhouse gases</div>
                <p className="text-gray-600 text-sm">Food waste contributes significantly to climate change</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How ReWaste Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Two pathways to reduce food waste and create value
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pathway 1: Near-Expiry Food */}
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-orange-400 to-orange-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingCart className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Near-Expiry Food Marketplace</h3>
                <p className="text-gray-600 mb-4">
                  Sell food that's close to expiry or in excess at discounted prices. Perfect for budget-conscious
                  consumers and reducing waste.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">For Sellers</p>
                      <p className="text-sm text-gray-600">
                        Recover value from excess inventory instead of throwing it away
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">For Buyers</p>
                      <p className="text-sm text-gray-600">Get quality food at 30-70% off regular prices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">Small Delivery Fee</p>
                      <p className="text-sm text-gray-600">We handle logistics and take a small fee for delivery</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/marketplace">Browse Food Deals</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pathway 2: Food Recycling */}
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Recycle className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Food Waste Recycling</h3>
                <p className="text-gray-600 mb-4">
                  We collect inedible food waste and transform it into valuable products for farmers and businesses.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">Free Collection</p>
                      <p className="text-sm text-gray-600">We pick up your inedible food waste at no cost</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">Advanced Processing</p>
                      <p className="text-sm text-gray-600">Convert waste into compost, animal feed, and biofuel</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">B2B Sales</p>
                      <p className="text-sm text-gray-600">
                        Sell recycled products to farms and agricultural businesses
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/waste-collection">Schedule Collection</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose ReWaste?</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Creating value while fighting food waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reduce Costs</h3>
              <p className="text-gray-600">
                Save money on food purchases and waste disposal fees while generating revenue from excess inventory.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
              <p className="text-gray-600">
                Reduce greenhouse gas emissions and contribute to a more sustainable food system.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Make quality food accessible to more people while supporting local businesses and farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Reduce Food Waste?</h2>
          <p className="mx-auto max-w-[700px] text-orange-50 md:text-xl mb-8">
            Join thousands of businesses and individuals who are already making a difference with ReWaste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/marketplace">
                Start Shopping <ShoppingCart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/sell-food">
                List Your Food <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
