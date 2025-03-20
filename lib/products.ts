// This is a mock product database
// In a real application, this would be fetched from a database or API

export interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  rating: number
  reviewCount?: number
  category: string
  image: string
  images?: string[]
  chemicals?: string[]
  specifications?: { name: string; value: string }[]
  recyclingMethod?: string
  stock?: number
}

const products: Product[] = [
  {
    id: "organic-compost",
    name: "Organic Compost Premium",
    description: "Premium compost made from recycled organic waste, perfect for enriching soil.",
    longDescription:
      "RecyclingBin's Organic Compost Premium is the result of our advanced composting process that transforms organic waste into a nutrient-rich soil amendment. The carefully controlled decomposition process ensures that all pathogens are eliminated while beneficial microorganisms thrive.",
    price: 19.99,
    rating: 4.8,
    reviewCount: 127,
    category: "Fertilizer",
    image: "/placeholder.svg?height=300&width=300",
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
      "Our compost is produced through a controlled aerobic decomposition process that takes approximately 12 weeks. We carefully monitor temperature, moisture, and oxygen levels to ensure optimal conditions for beneficial microorganisms.",
    stock: 35,
  },
  {
    id: "plant-nutrient-mix",
    name: "Plant Nutrient Mix",
    description: "Balanced nutrient mix derived from recycled food waste, ideal for vegetable gardens.",
    price: 24.99,
    rating: 4.6,
    reviewCount: 89,
    category: "Fertilizer",
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    chemicals: [
      "Nitrogen (derived from composted food waste)",
      "Phosphorus (from bone meal recycling)",
      "Potassium (from wood ash recovery)",
      "Trace Minerals (iron, manganese, zinc)",
    ],
    stock: 42,
  },
  {
    id: "poultry-feed-mix",
    name: "Poultry Feed Mix",
    description: "Nutritious feed for chickens made from recycled food products and grains.",
    price: 32.99,
    rating: 4.7,
    reviewCount: 56,
    category: "Animal Feed",
    image: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    chemicals: [
      "Probiotics (Lactobacillus acidophilus)",
      "Vitamin E (natural preservative)",
      "Calcium Carbonate (shell strength)",
      "Lysine (essential amino acid)",
    ],
    stock: 28,
  },
  {
    id: "soil-enhancer",
    name: "Soil Enhancer",
    description: "Recycled organic matter processed to improve soil structure and water retention.",
    price: 15.99,
    rating: 4.5,
    reviewCount: 112,
    category: "Fertilizer",
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    chemicals: [
      "Humic Acid (from composted plant matter)",
      "Fulvic Acid (natural chelator)",
      "Beneficial Fungi (mycorrhizae)",
      "Seaweed Extract (growth stimulant)",
    ],
    stock: 65,
  },
  {
    id: "cattle-supplement",
    name: "Cattle Supplement",
    description: "Nutrient-rich supplement for cattle derived from recycled agricultural waste.",
    price: 45.99,
    rating: 4.6,
    reviewCount: 43,
    category: "Animal Feed",
    image: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    chemicals: [
      "Protein Concentrate (from processed grain byproducts)",
      "Molasses (natural binder and energy source)",
      "Calcium Phosphate (bone development)",
      "Vitamin B Complex (metabolic support)",
    ],
    stock: 19,
  },
]

export function getProducts(category?: string): Product[] {
  if (category) {
    return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const currentProduct = getProductById(id)
  if (!currentProduct) return []

  return products.filter((product) => product.id !== id && product.category === currentProduct.category).slice(0, limit)
}

