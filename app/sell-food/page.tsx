import Link from "next/link"
import Image from "next/image"
import { ArrowRight, DollarSign, Clock, Users, Camera, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function SellFoodPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 mb-4">
                For Food Sellers
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Turn Excess Food into <span className="text-orange-600">Revenue</span>
              </h1>
              <p className="text-gray-600 md:text-xl">
                Don't let good food go to waste. List your excess inventory or near-expiry items and recover value while
                helping customers save money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <a href="#list-food">
                    List Your Food <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#how-it-works">
                    Learn How <Users className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/sell-food-banner.jpg"
                alt="Food seller dashboard"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Sell on ReWaste?</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">Transform your food waste into profit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recover Revenue</h3>
                <p className="text-gray-600">
                  Get 70-90% of your original price instead of throwing food away. Turn waste into profit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
                <p className="text-gray-600">
                  List items in minutes. Our platform handles payments, and we take care of delivery logistics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reach More Customers</h3>
                <p className="text-gray-600">
                  Connect with budget-conscious customers who appreciate quality food at discounted prices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-12 md:py-24 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              Start selling your excess food in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">List Your Food</h3>
              <p className="text-gray-600 text-sm">
                Upload photos, set your discounted price, and add expiry information.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Get Orders</h3>
              <p className="text-gray-600 text-sm">Customers discover and order your food through our platform.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Prepare & Package</h3>
              <p className="text-gray-600 text-sm">Pack the food safely for pickup or delivery by our drivers.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Get Paid</h3>
              <p className="text-gray-600 text-sm">
                Receive payment directly to your account after successful delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List Food Form */}
      <section id="list-food" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">List Your Food</h2>
              <p className="text-gray-600 md:text-xl mt-4">Fill out the form below to start selling your excess food</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="food-name">Food Item Name</Label>
                      <Input id="food-name" placeholder="e.g., Fresh Croissants" />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select category</option>
                        <option value="bakery">Bakery</option>
                        <option value="produce">Fresh Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat & Seafood</option>
                        <option value="prepared">Prepared Foods</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Describe your food item, ingredients, quantity, etc." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="original-price">Original Price ($)</Label>
                      <Input id="original-price" type="number" step="0.01" placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="discount-price">Your Price ($)</Label>
                      <Input id="discount-price" type="number" step="0.01" placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity Available</Label>
                      <Input id="quantity" type="number" placeholder="1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry-date">Expiry Date</Label>
                      <Input id="expiry-date" type="datetime-local" />
                    </div>
                    <div>
                      <Label htmlFor="pickup-time">Available for Pickup</Label>
                      <Input id="pickup-time" type="time" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Pickup Location</Label>
                    <div className="flex">
                      <Input id="location" placeholder="Enter your business address" className="rounded-r-none" />
                      <Button type="button" variant="outline" className="rounded-l-none">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="photos">Food Photos</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload photos of your food</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                      <Button type="button" variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-orange-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-orange-600 hover:underline">
                        Food Safety Guidelines
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    List My Food
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 md:text-xl mt-4">We only make money when you do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">What You Keep</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">85-90%</div>
                  <p className="text-gray-600 mb-4">of the sale price goes directly to you</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• No listing fees</li>
                    <li>• No monthly subscriptions</li>
                    <li>• Fast payouts within 24 hours</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Service Fee</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">10-15%</div>
                  <p className="text-gray-600 mb-4">covers platform and delivery costs</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Payment processing</li>
                    <li>• Delivery logistics</li>
                    <li>• Customer support</li>
                    <li>• Platform maintenance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Ready to Start Selling?</h2>
          <p className="mx-auto max-w-[700px] text-orange-50 md:text-xl mb-8">
            Join hundreds of businesses already reducing waste and increasing revenue with ReWaste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="#list-food">
                List Your Food <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/marketplace">
                See Example Listings <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
