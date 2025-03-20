import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Recycle, TruckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "@/components/count-up"
import { RecyclingAnimation } from "@/components/recycling-animation"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <RecyclingAnimation />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
              Sustainable Future
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Turning Waste into <span className="text-green-600">Resources</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Join our mission to create a sustainable future by recycling waste materials and transforming them into
              valuable resources for agriculture and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/recyclers-portal">
                  Become a Recycler <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/marketplace">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-100 transform transition-transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Recycle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold">
                  <CountUp end={1500} suffix="+" />
                </h3>
                <p className="text-gray-600">Tons of Waste Recycled</p>
              </CardContent>
            </Card>
            <Card className="border-green-100 transform transition-transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold">
                  <CountUp end={350} suffix="+" />
                </h3>
                <p className="text-gray-600">Farmers Supported</p>
              </CardContent>
            </Card>
            <Card className="border-green-100 transform transition-transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <TruckIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold">
                  <CountUp end={25} suffix="%" />
                </h3>
                <p className="text-gray-600">Reduction in Landfill Waste</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
              We provide comprehensive recycling solutions from collection to distribution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-6 h-full flex flex-col">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recycling Collection</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  We offer convenient options for recycling your waste materials, including at-home pickup services and
                  drop-off centers.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/recyclers-portal">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-6 h-full flex flex-col">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable Products</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Browse our marketplace for eco-friendly products made from recycled materials, including fertilizers
                  and animal feed.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/marketplace">Explore Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Environmental Impact</h2>
              <p className="text-gray-600 mb-6">
                By recycling waste materials and transforming them into valuable resources, we're making a significant
                positive impact on the environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 bg-green-100 p-1 rounded-full">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Reduced Landfill Waste</h3>
                    <p className="text-gray-600">
                      Diverting materials from landfills reduces methane emissions and pollution.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-green-100 p-1 rounded-full">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Sustainable Agriculture</h3>
                    <p className="text-gray-600">
                      Our recycled products help farmers reduce their environmental footprint.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-green-100 p-1 rounded-full">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Circular Economy</h3>
                    <p className="text-gray-600">
                      We're creating a closed-loop system where waste becomes a valuable resource.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Environmental impact"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Join Our Recycling Movement
          </h2>
          <p className="mx-auto max-w-[700px] text-green-50 md:text-xl mb-8">
            Whether you're looking to recycle your waste or purchase sustainable products, we have solutions for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/recyclers-portal">
                Become a Recycler <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
            >
              <Link href="/marketplace">
                Shop Sustainable Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

